import React, { createContext, useState } from "react";
import { userfeeds } from "../data";
import { slugify } from "../utils";

export const FeedContext = createContext(null);

export const FeedProvider = ({ children }) => {
  const [userFeeds, setUserFeeds] = useState(userfeeds);

  return (
    <FeedContext.Provider value={{ userFeeds, setUserFeeds }}>
      {children}
    </FeedContext.Provider>
  );
};
