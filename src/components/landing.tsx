import { useAuthContext } from "../providers/AuthContext";
import { ChatRoom } from "./chat-room";
import { ScrollToMe } from "./scrollToMe";
import { SignIn } from "./signin";

export const Landing = () => {
  const { user, loading, error } = useAuthContext();

  return (
    <>
      {!error && !loading && user ? <ChatRoom /> : <SignIn />}
    </>
  );
};
