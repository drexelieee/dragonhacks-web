
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const attend = functions.https.onCall(async (userID, context) => {
  // check user is authenticated and is teamdragonhacks
  if (context.auth && context.auth.token.email === "teamdragonhacks@gmail.com") {
    const db = admin.firestore();
    // add participant to attended list
    const eventDoc = db.collection("events").doc("dragonhacks2020");
    const waitlistEnabled = ( await eventDoc.get() ).get("waitlistEnabled");
    // if waitlist is enabled, put participant into the waitlist doc instead of attended
    if (waitlistEnabled) {
      eventDoc.update({
        waitlisted: admin.firestore.FieldValue.arrayUnion(userID)
      });
    } else {
      eventDoc.update({
        attended: admin.firestore.FieldValue.arrayUnion(userID)
      });
      // remove from waitlist
      eventDoc.update({
        waitlisted: admin.firestore.FieldValue.arrayRemove(userID)
      });
    }
    return {
      success: true,
      waitlisted: waitlistEnabled
    };
  }
  return {
    success: false,
    waitlisted: false
  };
})