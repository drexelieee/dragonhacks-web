import * as admin from "firebase-admin";
import * as SponsorForm from './sponsor-form';
import * as Analytics from "./analytics";
import * as Participant from "./participant";

admin.initializeApp();

// ONLY ENABLE FOR LOCAL TESTING
// admin.initializeApp({ credential: admin.credential.applicationDefault() });

export const submitSponsorForm = SponsorForm.submitSponsorForm;
export const getAnalytics = Analytics.getAnalytics;

export const saveParticipant = Participant.saveParticipant;