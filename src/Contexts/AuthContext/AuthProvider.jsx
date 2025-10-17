import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //* Creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* SignIn user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //* SignOut user
  const signOutUser = () => {
    return signOut(auth);
  };

  //* Get current user info
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("IF", currentUser);
  //   } else {
  //     console.log("ELSE", currentUser);
  //   }
  // })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
