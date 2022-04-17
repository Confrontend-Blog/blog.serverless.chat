import {
  GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { useAuthContext } from "../providers/AuthContext";

export const SignIn = () => {
  const { auth } = useAuthContext();

  let signInWithGoogle: any = () => console.log("sign in click handler");
  try {
    signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider);

      //TODO
      /**
       * enable guest sign in :
       * https://firebase.google.com/docs/auth/web/anonymous-auth?authuser=0&hl=en
       * 1- signInAnonymously(auth)
       * 2- in AuthProvider : onAuthStateChanged(auth, (user) => {...
       */
    };
  } catch (error) {
    console.log(error);
  }

  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};
