import React, { useContext } from "react";
import { TrashIcon } from "./Icons";
import { FeedContext } from "../context/FeedContext";

const RemoveFeed = ({ title }) => {
  const { setUserFeeds } = useContext(FeedContext);

  const removeFeed = () => {
    setUserFeeds((userFeeds) =>
      userFeeds.filter((userFeed) => userFeed.title !== title)
    );
  };

  return <TrashIcon onClick={removeFeed} />;
};

export default RemoveFeed;
