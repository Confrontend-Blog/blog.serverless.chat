import { FirebaseApp, FirebaseOptions } from "firebase/app";
import { Auth } from "firebase/auth";
declare function FirebaseInit(config: FirebaseOptions): {
    auth: Auth;
    app: FirebaseApp;
};
export { FirebaseInit };
