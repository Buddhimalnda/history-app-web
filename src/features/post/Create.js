import React from "react";

import { fs, auth } from "../../config/firebase";
import firebase from 'firebase'

function Create() {
  const [postData, setPostData] = useState({});

  const setPost = () => {
    fs.collection("post")
      .doc()
      .set({postData, auth: auth.currentUser.uid, time: firebase.firestore.FieldValue.serverTimestamp(),})
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  };

  return <div></div>;
}

export default Create;
