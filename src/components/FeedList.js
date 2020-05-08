import React from "react";
import Feed from "./Feed";

const FeedList = ({ feeds }) =>
  feeds.map((feed) => <Feed key={feed.feed.title} feed={feed} />);

export default FeedList;
