import { useAuthContext } from "../providers/AuthContext";

export const SignOut = (): JSX.Element | null => {
  const { auth } = useAuthContext();
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};
