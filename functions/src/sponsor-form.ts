import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import VerifyInput from './verifyInput';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: functions.config().nodemailer.auth
});

const refSponsorForm: ISponsorForm = {
  contactEmail: '',
  contactName: '',
  donation: -1,
  message: '',
  organization: '',
  package: ''
}

/**
 * Generates an email for a sponsorship request.
 * @returns {boolean} indicates success
 */
export const submitSponsorForm = functions.https.onCall(async (data: ISponsorForm, context) => {
  if (!VerifyInput<ISponsorForm>(data, refSponsorForm)) {
    throw new functions.https.HttpsError("invalid-argument", "Data recieved failed to validate");
  };

  let text  = data.contactName && `Contact Name: ${data.contactName}\n` || '';
      text += data.contactEmail && `Contact Email: ${data.contactEmail}\n` || '';
      text += data.organization && `Organization: ${data.organization}\n` || '';
      text += data.package && `Package: ${data.package}\n` || '';
      text += data.donation > 0 ? `Donation: ${data.donation}\n`: '';
      text += data.message && `\nMessage:\n${data.message}\n` || '';

  const mailOptions: MailOptions = {
    from: `${functions.config().nodemailer.auth.user}@gmail.com`,
    to: `${functions.config().nodemailer.auth.user}@gmail.com`,
    subject: `Sponsorship request from ${data.organization}`,
    text: text
  };

  try {
    const db = admin.firestore();
    const eventDoc = db.collection("events").doc(functions.config().current.event_name);

    db.runTransaction(async (t) => {
      const doc = await t.get(eventDoc);
      const sponsors = doc.get("sponsors");
      sponsors[data.organization] = data;

      t.set(eventDoc, {sponsors});

      return;
    });
  } catch (e) {
    return false;
  }

  try {
    await transporter.sendMail(mailOptions);
    return true;
  }
  catch (err) {
    return false;
  }
});

interface ISponsorForm {
  contactName: string,
  contactEmail: string,
  organization: string,
  message: string,
  donation: number,
  package: string
}
