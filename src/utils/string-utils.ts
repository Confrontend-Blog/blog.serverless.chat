export const toLowerCaseNoSpaces = (str: string) => {
  return str.replace(/\s/g, "").toLowerCase();
};

export const generateId = (sender: string, receiver: string) => {
    const senderFormatted = toLowerCaseNoSpaces(sender);
    const receiverFormatted = toLowerCaseNoSpaces(receiver);
    return [senderFormatted, receiverFormatted].sort().join("-");
};
