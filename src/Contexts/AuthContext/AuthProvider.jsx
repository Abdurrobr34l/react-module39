import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  //* Creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* SignIn user
  const signInUser = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  //* Get current user info
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("IF", currentUser);
    } else {
      console.log("ELSE", currentUser);
    }
  })

  const authInfo = {
    createUser,
    signInUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
