
import * as functions from 'firebase-functions';
import VerifyInput from './verifyInput';
import * as admin from 'firebase-admin';

const refParticipant: IParticipant = {
  age: -1,
  country: '',
  email: '',
  expected_graduation: new Date(),
  first_name: '',
  last_name: '',
  gender: '',
  hackathons_attended: -1,
  level_of_study: '',
  major: '',
  phone_number: '',
  race: '',
  resume: '',
  school: '',
  shirt_size: '',
  state: ''
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
  age: number,
  country: string,
  email: string,
  expected_graduation: Date,
  first_name: string,
  last_name: string,
  gender: string,
  hackathons_attended: number,
  level_of_study: string,
  major: string,
  phone_number: string,
  race: string,
  resume: string,
  school: string,
  shirt_size: string,
  state: string
}