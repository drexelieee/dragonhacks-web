import * as functions from 'firebase-functions';
import * as nodemailer from "nodemailer";
import { MailOptions } from 'nodemailer/lib/json-transport';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: functions.config().nodemailer.auth
});

/**
 * Generates an email for a sponsorship request.
 * @returns {boolean} indicates success
 */
export const submitSponsorForm = functions.https.onCall((data: ISponsorForm, context) => {
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

  return transporter.sendMail(mailOptions).then(() => {
    return true;
  }).catch((err) => {
    console.log(err);
    return false;
  });
});

interface ISponsorForm {
  contactName: string,
  contactEmail: string,
  organization: string,
  message: string,
  donation: number,
  package: string
}