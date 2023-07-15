import { config } from "dotenv";
config();

export * from "./messages/get-messages";
export * from "./messages/create-message";
export * from "./utils/string-utils";

import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { createMessage } from "./messages/create-message";
import { getMessages } from ".";

export let db: Firestore;
export let app: FirebaseApp;

export type Message = {
  id?: string;
  text: string;
  sender: string;
  timestamp: { seconds: number; nanoseconds: number };
};

export function initializeFirebase(
  config: FirebaseOptions,
  firebaseToken: string
) {
  app = initializeApp(config);
  db = getFirestore(app);
  const auth = getAuth();

  signInWithCustomToken(auth, firebaseToken)
    .then(() => {
      const RECEIVER = "receiver";
      const CURRENT_USER = "sender";
      // getMessages(CURRENT_USER, RECEIVER);
      createMessage({
        message: {
          sender: "sender",
          text: "very last  message case, this is from a test",
          timestamp: String(new Date()),
        },
        members: ["senderNew", "receiver"],
      });
    })
    .catch((error) => {
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

initializeFirebase(firebaseConfig, process.env.FIREBASE_TOKEN!);
