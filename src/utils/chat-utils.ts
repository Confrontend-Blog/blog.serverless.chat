type ChatExistsParams = {
  idPairs: [string, string];
  members: [string, string];
};
export function chatExists({ idPairs, members }: ChatExistsParams) {
  const mappedMembers = members.map((member) => member.toLowerCase());
  return (
    idPairs.length === idPairs.length &&
    idPairs.every((id) => mappedMembers.includes(id))
  );
}
