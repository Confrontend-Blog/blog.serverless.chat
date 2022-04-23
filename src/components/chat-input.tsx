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
import { SvgIcon } from "./svg-icon";

/**
 * ChatInput is input component for typing and sending a message.
 * @component
 * @example
 * return (
 *   <ChatInput />
 * )
 */
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
        <SvgIcon type={"EmojiEmotionsWhite24Dp"} />
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          <SvgIcon className="send-svg" type={"Send"} />
        </button>
      </form>
    </>
  );
};
