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

export const slugifyTitle = (name) => {
  const nameList = [];

  for (let i = 0; i < name.length; i++) {
    let ch = name[i];

    if (
      ch !== " " &&
      ch !== ")" &&
      ch !== "(" &&
      ch !== "!" &&
      ch !== "/" &&
      ch !== "]" &&
      ch !== "|" &&
      ch !== "+" &&
      ch !== "?" &&
      ch !== "," &&
      ch !== "["
    ) {
      nameList.push(ch.toLowerCase());
    } else if (ch === " ") {
      nameList.push("_");
    }
  }

  return nameList.join("").replace("&amp;", "");
};

export const timeSince = (timestamp) => {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }

  return Math.floor(seconds) + " seconds";
};

export const getRedditImg = (description) => {
  const imgRegex = /(https?:\/\/i\.redd\.it.*\.(?:png|jpg|gif))/;
  const match = description.match(imgRegex);
  const redditImg = match && match.length && match[0];

  return redditImg;
};

export const getTwitterImg = (description) => {
  const imgRegex = /(https?:\/\/pbs\.twimg\.com.*\.(?:png|jpg|gif))/;
  const match = description.match(imgRegex);
  const twitterImg = match && match.length && match[0];

  return twitterImg;
};

export const getYtId = (guid) => guid.split(":")[2];
