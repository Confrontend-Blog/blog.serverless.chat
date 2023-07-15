import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { Message, app, db } from "..";
import { schema } from "../utils/firestore-data";

export async function getMessages(chatId: string): Promise<Message[] | []> {
  try {
    if (!app) {
      throw new Error("No Firebase App");
    }

    // Get all the messages for this chat
    // TODO pagination
    const messagesQuery = query(
      collection(db, schema.COLLECTIONS.CHATS.NAME, chatId, "members"),
      orderBy(
        schema.COLLECTIONS.CHATS.DOCUMENTS.SUB_COLLECTIONS.MESSAGES.FIELDS
          .TIMESTAMP
      )
    );
    const messageSnapshots = await getDocs(messagesQuery);
    const messages = messageSnapshots.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        text: data.text,
        sender: data.sender,
        timestamp: data.timestamp,
      } as Message;
    });

    console.log(messages);

    return messages;
  } catch (e) {
    console.error("Error getting messages:", e);
    return [];
  }
}
