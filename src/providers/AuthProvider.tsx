import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "./AuthContext";

function AuthProvider(props: { children?: React.ReactNode }): JSX.Element {
  const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyCsQ2YbBj9MxNQ6P-qyeCDU_u8HZ4OgCJw",
    authDomain: "chatly-c9a51.firebaseapp.com",
    projectId: "chatly-c9a51",
    storageBucket: "chatly-c9a51.appspot.com",
    messagingSenderId: "214812458830",
    appId: "1:214812458830:web:94d4ac8acc4ff21fdd281f",
  });

  const auth: Auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const memoedValue = useMemo(
    () => ({
      auth,
      app,
      user,
      loading,
      error,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {loading ? (
        <span>Loading, please wait ...</span>
      ) : error ? (
        <span>Something went wrong. {JSON.stringify(error)}</span>
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
