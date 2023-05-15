export * from "./chat/get-messages";
export * from "./chat/send-message";
export * from "./utils/string-utils";

import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

export let db: Firestore;
export let app: FirebaseApp;

export function initializeFirebase(config: FirebaseOptions) {
  app = initializeApp(config);
  db = getFirestore(app);
}
