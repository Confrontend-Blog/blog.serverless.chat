import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "./AuthContext";

function AuthProvider(props: { children?: React.ReactNode }): JSX.Element {
  const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyDNngK5b3zlQjACrJwBdBEZgkPSktpsHXA",
    authDomain: "blog-chat-firebase.firebaseapp.com",
    projectId: "blog-chat-firebase",
    storageBucket: "blog-chat-firebase.appspot.com",
    messagingSenderId: "381881514314",
    appId: "1:381881514314:web:0c3bbde0e7d838577a69b3",
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
