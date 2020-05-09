import React from "react";
import MonkeySearch from "../assets/no-feed.png";

const NoFeeds = () => {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Add feeds to consume your content
      </h3>
      <img src={MonkeySearch} alt="no-feed" />
    </div>
  );
};

export default NoFeeds;
