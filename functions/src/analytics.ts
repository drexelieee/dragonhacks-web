import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { IParticipant } from './participant-form';

type DocumentReference = admin.firestore.DocumentReference;

export const getAnalytics = functions.https.onCall(async (data, context) => {
  let registeredCount = 0;
  let attendedCount = 0;
  let schoolCount = 0;
  let countryCount = 0;
  let firstHackathonCount = 0;
  const genderCount = {
    male: 0,
    female: 0
  };

  const db = admin.firestore();
  const cache = await db.collection("analytics-cache").doc(new Date(Date.now()).toLocaleDateString()).get();
  // if cache exists, use it
  if (cache.exists) {
    return cache.data();
  }

  const eventDoc = db.collection("events").doc("dragonhacks2019");
  try {
    await db.runTransaction(async (t) => {
      const e_doc = await t.get(eventDoc);

      const registered: DocumentReference[] = e_doc.get("registered");
      registeredCount = registered.length;

      const attended: DocumentReference[] = e_doc.get("attended");
      attendedCount = attended.length;

      // get data from references
      const attended_refs = attended.map(async (a) => (await (a.get())).data());
      const attended_d: IParticipant[] = <IParticipant[]>(await Promise.all(attended_refs));

      schoolCount = new Set(attended_d.map((a) => a.school)).size;
      countryCount = new Set(attended_d.map((a) => a.country)).size;
      firstHackathonCount = attended_d.filter((a) => a.hackathons_attended === 0).length; // was open text field, probably not correct

      genderCount.male = attended_d.reduce((prev, a) => prev + (a.gender === "Male" ? 1 : 0), 0);
      genderCount.female = attended_d.reduce((prev, a) => prev + (a.gender === "Female" ? 1 : 0), 0);
    });
  } catch(e) {
    return e.toString();
  }

  const result = {
    attendedCount,
    registeredCount,
    schoolCount,
    genderCount,
    countryCount,
    firstHackathonCount
  };

  // clear old cached results
  ( await db.collection("analytics-cache").listDocuments() ).map((d) => d.delete());
  // cache results
  db.collection("analytics-cache").doc(JSON.stringify(new Date(Date.now()).toLocaleDateString())).set(result);

  return result;
});