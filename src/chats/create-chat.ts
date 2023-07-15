import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Message, app, db, generateId } from "..";
import { schema } from "../utils/firestore-data";
import { getChatIdByMembers } from "./get-chatid-by-members";

type CreateChatParams = {
  message: Message;
  members: [string, string];
};

export async function createChat({ message, members }: CreateChatParams) {
  try {
    if (!app) {
      throw new Error("No Firebase App");
    }

    const chatsRef = collection(db, schema.COLLECTIONS.CHATS.NAME);

    const existingChatId = await getChatIdByMembers({ chatsRef, members });
    console.log(existingChatId);

    if (existingChatId) {
      return existingChatId;
    } else {
      // Chat does not exist, create a new one
      const chatId = generateId(members[0], members[1]);
      await setDoc(doc(chatsRef, chatId), {
        [schema.COLLECTIONS.CHATS.DOCUMENTS.LAST_MESSAGE]: message.text,
      });
      // Add a new message to the messages sub-collection
      await addDoc(
        collection(
          chatsRef,
          chatId,
          schema.COLLECTIONS.CHATS.DOCUMENTS.SUB_COLLECTIONS.MESSAGES.NAME
        ),
        message
      );
    }
  } catch (e) {
    console.error(
      "Error in createMessage while creating a new chat or getting chat ID:",
      e
    );
    return null;
  }
}
