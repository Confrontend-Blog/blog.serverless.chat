import { DocumentData } from "firebase/firestore";
import { useAuthContext } from "../providers/AuthContext";

export const ChatMessage = ({ message }: { message: DocumentData }) => {
  const { text, uid } = message;
  const { auth } = useAuthContext();

  const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};
