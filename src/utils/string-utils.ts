export const toLowerCaseNoSpaces = (str: string) => {
  return str.replace(/\s/g, "").toLowerCase();
};

const SEPARATOR = "___|___";

export const generateId = (sender: string, receiver: string) => {
  const senderFormatted = toLowerCaseNoSpaces(sender);
  const receiverFormatted = toLowerCaseNoSpaces(receiver);
  return [senderFormatted, receiverFormatted].sort().join(SEPARATOR);
};

export const extractIds = (chatId: string): string[] => {
  return chatId.split(SEPARATOR);
};
