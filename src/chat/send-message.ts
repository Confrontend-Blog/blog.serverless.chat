import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app, db } from "..";
import { generateId } from "../utils/string-utils";

export async function sendMessage(
  sender: string,
  receiver: string,
  text: string
) {
  try {
    if (!app) {
      throw new Error("No Firebase App");
    }
    // Create a unique chat ID based on the sender and receiver
    const chatId = generateId(sender, receiver);

    // Add the message to the chat collection
    await addDoc(collection(db, "chats", chatId, "messages"), {
      sender,
      text,
      timestamp: new Date(),
    });
  } catch (e) {
    console.error("Error sending message:", e);
  }
}
