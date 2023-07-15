import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { app, db } from "..";
import { Message, schema } from "../utils/firestore-data";
import { getChatIdByMembers } from "../chats/get-chatid-by-members";

type CreateMessageParams = {
  message: Message;
  members: [string, string];
};

export async function createMessage({ message, members }: CreateMessageParams) {
  try {
    if (!app) {
      throw new Error("No Firebase App");
    }

    const chatsRef = collection(db, schema.COLLECTIONS.CHATS.NAME);

    const existingChatId = await getChatIdByMembers({ chatsRef, members });
    console.log(existingChatId);

    if (existingChatId) {
      // Chat already exists, add a new message to it
      await addDoc(
        collection(
          chatsRef,
          existingChatId,
          schema.COLLECTIONS.CHATS.DOCUMENTS.SUB_COLLECTIONS.MESSAGES.NAME
        ),
        message
      );

      // update last message
      // TODO see if having this field is in general really
      // needed for performance or all the chats should be fetch anyway even in
      // overview list.
      await updateDoc(doc(chatsRef, existingChatId), {
        [schema.COLLECTIONS.CHATS.DOCUMENTS.LAST_MESSAGE]: message.text,
      });
    } else {
      // TODO handle non-ideal state
    }
  } catch (e) {
    console.error(
      "Error in createMessage while creating a new chat or getting chat ID:",
      e
    );
    return null;
  }
}
