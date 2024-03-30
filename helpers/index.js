export function getRandomId(length) {
  let newStringedId = "";
  let count = 0;

  while (count <= length) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const charLength = characters.length;
    const randomId = Math.floor(Math.random() * charLength);
    const randomStringedId = characters.charAt(randomId);
    newStringedId += randomStringedId;

    count++;
  }

  return newStringedId;
}
