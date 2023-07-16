export const schema = {
  COLLECTIONS: {
    CHATS: {
      NAME: "chats",
      DOCUMENTS: {
        LAST_MESSAGE: "last_message",
        LAST_MESSAGE_TIMESTAMP: "last_message_timestamp",
        SUB_COLLECTIONS: {
          MESSAGES: {
            NAME: "messages",
            FIELDS: {
              SENDER: "sender",
              TEXT: "text",
              TIMESTAMP: "timestamp",
            },
          },
        },
      },
    },
  },
};

export type Message = {
  sender: string;
  text: string;
  timestamp: string;
};
