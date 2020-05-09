import React from "react";
import { useParams, Link } from "react-router-dom";
import FeedCard from "../styles/FeedCard";
import { slugifyTitle, timeSince } from "../utils";
import { LinkIcon } from "../components/Icons";

const FeedItem = ({ item }) => {
  const { feed } = useParams();
  const titleSlug = slugifyTitle(item.title);

  const reg = /&amp;?/;
  const title = item.title && item.title.replace(reg, "&");
  const [author, _] = item.author && item.author.replace(reg, "&").split("-");

  return (
    <FeedCard>
      <Link
        to={{
          pathname: `${feed}/${titleSlug}`,
          item,
        }}
      >
        <h3>{title}</h3>
        <div className="feed-info">
          {item.author && <span>{author}</span>}
          {item.author && <span>·</span>}
          <span>{timeSince(item.pubDate)} ago</span>
        </div>
      </Link>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </a>
    </FeedCard>
  );
};

export default FeedItem;
