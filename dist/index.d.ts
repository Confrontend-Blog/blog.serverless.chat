export * from "./chat/get-messages";
export * from "./chat/send-message";
export * from "./utils/string-utils";
import { FirebaseApp, FirebaseOptions } from "firebase/app";
import { Firestore } from "firebase/firestore";
export declare let db: Firestore;
export declare let app: FirebaseApp;
export declare function initializeFirebase(config: FirebaseOptions): void;
