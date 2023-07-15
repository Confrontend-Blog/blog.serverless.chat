import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  where,
  collectionGroup,
} from "firebase/firestore";
import { Message, app, db } from "..";

type GetUserChatsParams = {
  googleId: string;
};

export async function getUserChats({
  googleId,
}: GetUserChatsParams): Promise<any> {
  try {
    console.log(1);

    if (!app) {
      throw new Error("No Firebase App");
    }

    console.log(2);

    // Placeholder for all chat messages
    // const allChats: { [chatId: string]: Message | null } = {};

    // const messagesQuery = query(
    //   collectionGroup(db, "messages"),
    //   orderBy("timestamp")
    // );
    // const messagesSnap = await getDocs(messagesQuery);
    // const messages = messagesSnap.docs.map((doc) => doc.data());

    // console.log(messages);

    // return allChats;

    const chatsSnapshot = await getDocs(collection(db, "chats"));

    const chats = await Promise.all(
      chatsSnapshot.docs.map(async (chatDoc) => {
        const chatId = chatDoc.id;
        const participants = chatDoc.data().participants;
        const messagesSnapshot = await getDocs(
          query(
            collection(db, `chats/${chatId}/messages`),
            orderBy("timestamp", "desc"),
            limit(1)
          )
        );
        const lastMessage = messagesSnapshot.docs[0].data();
        console.log(lastMessage);

        return {
          id: chatId,
          participants,
          lastMessage,
        };
      })
    );

    console.log(chats);
  } catch (e) {
    console.error("Error in getAllChats while getting chats:", e);
    return {};
  }
}
