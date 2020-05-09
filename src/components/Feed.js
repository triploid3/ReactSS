import React from "react";
import { Link } from "react-router-dom";
import { LinkIcon } from "./Icons";
import { slugify } from "../utils";
import FeedCard from "../styles/FeedCard";

const Feed = ({ feed: { items, feed, meta } }) => {
  const slug = slugify(meta.title);

  return (
    <FeedCard>
      <Link
        to={{
          pathname: `/${slug}`,
          items,
        }}
      >
        <h3>{meta.title}</h3>
        <p>
          {feed.description
            ? feed.description.substr(0, 70) + "..."
            : "No Description"}
        </p>
      </Link>
      <a href={feed.link} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </a>
    </FeedCard>
  );
};

export default Feed;
