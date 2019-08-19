import * as admin from "firebase-admin";
import * as SponsorForm from './sponsor-form';

admin.initializeApp();

export const submitSponsorForm = SponsorForm.submitSponsorForm;