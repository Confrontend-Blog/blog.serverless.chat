export * from "./chat/get-messages";
export * from "./chat/send-message";
export * from "./config/firebase";
export * from "./utils/string-utils";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
export interface IStore {
    auth: Auth | null;
    app: FirebaseApp | null;
}
/**
 * Initialize Firebase App and assigns auth data (see IStore)
 * to a global Store.
 */
export declare const Store: IStore;
