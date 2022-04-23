import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthContext } from "../providers/AuthContext";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { ScrollToMe } from "./scrollToMe";

/**
 * ChatRoom is the component showing sent and received messages.
 * @component
 * @example
 * return (
 *   <ChatRoom />
 * )
 */
export const ChatRoom = (): JSX.Element => {
  const { app } = useAuthContext();

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

  return (
    <>
      {sortedMessages &&
        sortedMessages.map((msg: DocumentData) => (
          <ChatMessage key={msg.createdAt} message={msg} />
        ))}
      <ChatInput />
      <ScrollToMe />
    </>
  );
};
