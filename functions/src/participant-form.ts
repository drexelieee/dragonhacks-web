
import * as functions from 'firebase-functions';
import VerifyInput from './verifyInput';
import * as admin from 'firebase-admin';

const refParticipant: IParticipant = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  uid: '',
}

export const saveParticipant = functions.https.onCall(async (participant, context) => {
  if (!VerifyInput<IParticipant>(participant, refParticipant)) {
    throw new functions.https.HttpsError("invalid-argument", "Data recieved failed to validate");
  };

  const db = admin.firestore();
  // add participant to full participant collection
  const participantCollection = db.collection("participants");
  const participantDoc = await participantCollection.add(participant);

  // add participant to registered table
  const eventDoc = db.collection("events").doc("dragonhacks2020");
  eventDoc.update({
    registered: admin.firestore.FieldValue.arrayUnion(participantDoc)
  });

  return true;
});

export type IParticipant = {
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  uid: string,

  age?: number,
  country?: string,
  expected_graduation?: Date,
  gender?: string,
  hackathons_attended?: number,
  level_of_study?: string,
  major?: string,
  race?: string,
  // resume: string,
  school?: string,
  shirt_size?: string,
  // state: string
}