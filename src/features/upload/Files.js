import React, { useState } from 'react'
import { fs } from '../../config/firebase';

function Files() {

    const [file, setFile] = useState([]);

  useEffect(() => {
    fs.collection("myFiles").onSnapshot((snapshot) => {
      setFile(snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() })));
      console.log(snapshot);
    });
  }, []);


    return (
        <div>
            
        </div>
    )
}

export default Files
