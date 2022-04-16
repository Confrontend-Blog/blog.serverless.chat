import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "../providers/AuthContext";

export const SignIn = () => {
  const { auth } = useAuthContext();
  let signInWithGoogle: any = () => console.log("sign in click handler");
  try {
    signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider);
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
