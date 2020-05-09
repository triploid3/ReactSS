import React, { createContext, useState } from "react";

export const FeedContext = createContext(null);

export const FeedProvider = ({ children }) => {
  const localSt = JSON.parse(localStorage.getItem("userFeeds"));
  const [userFeeds, setUserFeeds] = useState(localSt ? localSt : []);

  return (
    <FeedContext.Provider value={{ userFeeds, setUserFeeds }}>
      {children}
    </FeedContext.Provider>
  );
};
