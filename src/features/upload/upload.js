import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
// import "./newfile.scss";

import Firebase from "firebase";
import { storage, fs,auth } from "../../config/firebase";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const NewFile = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpdate = () => {
    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);

        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            fs.collection("myFiles").add({
              timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
              caption: file.name,
              fileUrl: url,
              size: snapshot._delegate.bytesTransferred,
              auth: auth.currentUser.uid,
            });
          });
      });
  };

  return (
    <div className="container">
      <>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpdate}>Upload</button>
      </>
    </div>
  );
};

export default NewFile;
