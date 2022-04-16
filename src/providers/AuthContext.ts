import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";
import React from "react";

type AuthProviderValue = {
  app: FirebaseApp;
  auth: Auth;
  user?: User | null;
  loading: boolean;
  error?: Error | null;
};

const AuthContext = React.createContext<AuthProviderValue>(undefined as any);

const useAuthContext = (): AuthProviderValue => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};

export { AuthContext, useAuthContext };
