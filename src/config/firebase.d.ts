import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
declare function FirebaseInit(): {
    auth: Auth;
    app: FirebaseApp;
};
export { FirebaseInit };
