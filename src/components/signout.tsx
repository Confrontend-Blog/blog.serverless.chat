import { useAuthContext } from "../providers/AuthContext";

export const SignOut = () => {
  const { auth } = useAuthContext();
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};
