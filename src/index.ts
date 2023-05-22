export * from "./chat/get-messages";
export * from "./chat/send-message";
export * from "./utils/string-utils";

import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from "firebase/auth";

export let db: Firestore;
export let app: FirebaseApp;

export function initializeFirebase(
  config: FirebaseOptions,
  firebaseToken: string
) {
  app = initializeApp(config);
  db = getFirestore(app);
  const auth = getAuth();

  signInWithCustomToken(auth, firebaseToken).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(
      "Error signing in with custom token:",
      errorCode,
      errorMessage
    );
  });
}
