import { DocumentData } from "firebase/firestore";
import { useAuthContext } from "../providers/AuthContext";

export const ChatMessage = ({ message }: { message: DocumentData }) => {
  const { text, uid, photoURL } = message;
  const { auth } = useAuthContext();

  const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          alt="avatar"
          src={photoURL || process.env.PUBLIC_URL + "/avatar.png"}
        />
        <p>{text}</p>
      </div>
    </>
  );
};
