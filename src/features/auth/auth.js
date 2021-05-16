import { useState } from "react";
import { auth, provider, fs } from "../../config/firebase";

import React from "react";

function Auth() {
  const [userID, setUser] = useState(auth.currentUser?.uid);

  const login = () => {
    if (!userID) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          // dispatch()
          // state.user = result.user;
          // state.status = true;
          // setUser(result.user);
          fs.collection("user").doc(result.user.uid).set({
            displayName: result.user.displayName,
            email: result.user.email,
            phoneNumber: result.user.phoneNumber,
            photoURL: result.user.photoURL,
            creationTime: result.user.metadata.creationTime,
            lastSignInTime: result.user.metadata.lastSignInTime,
          });
          console.log("Login Success , ");
          setUser(result.user.uid);
          // dispatch(signUser(result.user));
        })
        .catch((err) => {
          // state.status = false;
          // state.user = err;
          console.log("Login Err: " + err);
        });
    }
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("logout ok...!");
        setUser(false);
      })
      .catch((err) => console.log(err));
  };
}


export default Auth;
