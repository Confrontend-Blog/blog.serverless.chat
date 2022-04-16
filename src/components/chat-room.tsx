import { FirebaseApp } from "firebase/app";
import {
  query,
  orderBy,
  limit,
  setDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
} from "firebase/firestore";
import { FormEvent, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthContext } from "../providers/AuthContext";
import { ChatMessage } from "./chat-message";

export const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");
  const { app, auth } = useAuthContext();

  const viewBottom = useRef<HTMLSpanElement>(null);

  const db: Firestore = getFirestore(app);
  const messagesRef: CollectionReference<DocumentData> = collection(
    db,
    "messages"
  );
  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
  const [messages] = useCollectionData(q) as DocumentData[];

  const sortedMessages = messages?.sort((a: any, b: any) =>
    a.createdAt > b.createdAt ? 1 : -1
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

    viewBottom?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {sortedMessages &&
          sortedMessages.map((msg: DocumentData) => (
            <ChatMessage key={msg.createdAt} message={msg} />
          ))}

        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />

          <button type="submit" disabled={!formValue}>
            {">"}
          </button>
        </form>
      </main>
      <span ref={viewBottom}></span>
    </>
  );
};
