import React, { useEffect } from "react";
import { fs } from "../../config/firebase";

function View() {
  const [post, setPost] = useState();
  useEffect(() => {
    fs.collection("post")
      .get()
      .then((querySnapshot) => {
        setPost(querySnapshot.docs);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}

export default View;
