import { CollectionReference, DocumentData, getDocs } from "firebase/firestore";
import { extractIds } from "../utils/string-utils";
import { chatExists } from "../utils/chat-utils";

type GetChatIdByMembersParams = {
  chatsRef: CollectionReference<DocumentData>;
  members: [string, string];
};

export const getChatIdByMembers = async ({
  chatsRef,
  members,
}: GetChatIdByMembersParams) => {
  const chatSnapshot = await getDocs(chatsRef);

  const allChatIdPairs = chatSnapshot.docs.map((doc) => doc.id);
  console.log(allChatIdPairs);

  return allChatIdPairs.find((chatIdPairs) => {
    const [id1, id2] = extractIds(chatIdPairs);
    return chatExists({ idPairs: [id1, id2], members });
  });
};
