import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { app, db } from "..";
import { generateId } from "../utils/string-utils";

export async function getMessages(sender: string, receiver: string) {
  try {
    if (!app) {
      throw new Error("No Firebase App");
    }

    // Create a unique chat ID based on the sender and receiver
    const chatId = generateId(sender, receiver);

    // Get all the messages for this chat
    const messagesQuery = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp")
    );
    const messageSnapshots = await getDocs(messagesQuery);
    const messages = messageSnapshots.docs.map((doc) => doc.data());

    return messages;
  } catch (e) {
    console.error("Error getting messages:", e);
    return [];
  }
}
