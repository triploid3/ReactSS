export const slugify = (name) => {
  const nameList = [];

  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    if (ch !== " ") {
      nameList.push(ch.toLowerCase());
    }
  }

  return nameList.join("");
};
