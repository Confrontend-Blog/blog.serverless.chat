import { FirebaseInit as bootstrap } from "./config/firebase";
import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";

export interface IStore {
  auth: Auth | null;
  app: FirebaseApp | null;
}

/**
 * Initialize Firebase App and assigns auth data (see IStore)
 * to a global Store.
 */
export const Store: IStore = bootstrap();
