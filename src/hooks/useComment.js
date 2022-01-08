import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../Context/FirebaseContext";

export default function useComment() {
  const [comments, setComments] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.db.collection().onSnapshot((snapshot) => {
      setComments(snapshot.docs.map((doc) => doc.data()));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {comments}
}

