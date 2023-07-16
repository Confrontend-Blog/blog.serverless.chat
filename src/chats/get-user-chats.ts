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
import { schema } from "../utils/firestore-data";

type ChatOverview = {
  receiverGoogleId: string;
  lastMessage: string;
  timestamp: string;
};

export async function getUserChats({
  googleId,
}: {
  googleId: string;
}): Promise<any> {
  try {
    if (!app) {
      throw new Error("No Firebase App getUserChats");
    }

    const chatsRef = collection(db, schema.COLLECTIONS.CHATS.NAME);
    const querySnapshot = await getDocs(chatsRef);

    const chatOverviews: ChatOverview[] = querySnapshot.docs
      .filter((doc) => doc.id.includes(googleId))
      .map((doc) => {
        return {
          receiverGoogleId: doc.id,
          lastMessage:
            doc.data()[schema.COLLECTIONS.CHATS.DOCUMENTS.LAST_MESSAGE],
          timestamp:
            doc.data()[
              schema.COLLECTIONS.CHATS.DOCUMENTS.LAST_MESSAGE_TIMESTAMP
            ],
        };
      });

    return chatOverviews;
  } catch (e) {
    console.error(
      "Error in getChatOverviews while fetching chat overviews:",
      e
    );
    return [];
  }
}
