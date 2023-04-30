import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

function FirebaseInit() {
  const app: FirebaseApp = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "blog-chat-firebase.firebaseapp.com",
    projectId: "blog-chat-firebase",
    storageBucket: "blog-chat-firebase.appspot.com",
    messagingSenderId: "381881514314",
    appId: "1:381881514314:web:0c3bbde0e7d838577a69b3",
  });

  const auth: Auth = getAuth(app);

  return {
    auth,
    app,
  };
}

export { FirebaseInit };
