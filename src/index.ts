import { FirebaseInit as bootstrap } from "./config/firebase";
import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";

export interface IStore {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
  auth: Auth | null;
  app: FirebaseApp | null;
}

/**
 * Initialize Firebase App and assigns auth data (see IStore)
 * to a global Store.
 */
export const Store = bootstrap();
