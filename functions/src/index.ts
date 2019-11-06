import * as admin from "firebase-admin";
import * as SponsorForm from './sponsor-form';
import * as Analytics from "./analytics";

admin.initializeApp();

// ONLY ENABLE FOR LOCAL TESTING
// admin.initializeApp({ credential: admin.credential.applicationDefault() });

export const submitSponsorForm = SponsorForm.submitSponsorForm;
export const getAnalytics = Analytics.getAnalytics;
