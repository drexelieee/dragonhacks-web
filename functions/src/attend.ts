
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const attend = functions.https.onCall((userID, context) => {
  // check user is authenticated and is teamdragonhacks
  if (context.auth && context.auth.token.email === "teamdragonhacks@gmail.com") {
    const db = admin.firestore();
    // add participant to attended list
    const eventDoc = db.collection("events").doc("dragonhacks2020");
    eventDoc.update({
      attended: admin.firestore.FieldValue.arrayUnion(userID)
    });
    return true;
  }
  return false;
})