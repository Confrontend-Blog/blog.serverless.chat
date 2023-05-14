import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

function FirebaseInit(config: FirebaseOptions) {
  const app: FirebaseApp = initializeApp(config);

  const auth: Auth = getAuth(app);

  return {
    auth,
    app,
  };
}

export { FirebaseInit };
