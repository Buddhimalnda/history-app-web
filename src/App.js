import React, { useEffect, useState } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.scss";

import { auth, provider, fs } from "./config/firebase";

import Upload from "./features/upload/upload";
// import { userID } from "./features/auth/auth";
// import { useSelector, useDispatch } from "react-redux";
function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  const userID = auth.currentUser?.uid;

  useEffect(() => {
    // setUser(auth.currentUser?.uid)
    if (!userID) {
      console.log("user is not defiend");
    } else {
      console.log("user, ", userID);
    }
  }, [userID]);
  // console.log(fs.FieldValue.serverTimestamp());
  return (
    <div className="App">
      <Upload />
    </div>
  );
}

export default App;
