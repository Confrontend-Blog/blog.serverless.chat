import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { FormEvent, useState } from "react";
import { useAuthContext } from "../providers/AuthContext";

export const ChatInput = () => {
  const { auth, app } = useAuthContext();
  const [formValue, setFormValue] = useState("");

  const db: Firestore = getFirestore(app);
  const messagesRef: CollectionReference<DocumentData> = collection(
    db,
    "messages"
  );

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser || {};

    try {
      await addDoc(collection(db, messagesRef.id), {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
    } catch (error) {
      console.log(error);
    }

    setFormValue("");
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}></button>
      </form>
    </>
  );
};
