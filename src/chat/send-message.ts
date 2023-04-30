import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Store } from "..";
import { generateId } from "../utils/string-utils";

export async function sendMessage(
  sender: string,
  receiver: string,
  message: string
) {
  try {
    if (!Store.app) {
      throw new Error("No Firebase App");
    }
    const db = getFirestore(Store.app);
    // Create a unique chat ID based on the sender and receiver
    const chatId = generateId(sender, receiver);

    // Add the message to the chat collection
    await addDoc(collection(db, "chats", chatId, "messages"), {
      sender,
      message,
      timestamp: new Date(),
    });
  } catch (e) {
    console.error("Error sending message:", e);
  }
}
