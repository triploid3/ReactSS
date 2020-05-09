import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FeedItem from "../components/FeedItem";
import { FeedContext } from "../context/FeedContext";
import { slugify } from "../utils";
import { API_KEY, COUNT } from "../config";
import Header from "../components/Header";

const Feed = () => {
  const [items, setItems] = useState([]);
  const { feed } = useParams();
  const { userFeeds } = useContext(FeedContext);

  const match = userFeeds.filter((userFeed) => {
    const title = slugify(userFeed.title);
    return title === feed;
  });

  const getFeedItems = async () => {
    const {
      data: { items },
    } = await axios.get(
      `http://api.rss2json.com/v1/api.json?rss_url=${match[0].url}&api_key=${API_KEY}&count=${COUNT}`
    );
    setItems(items);
  };

  useEffect(() => {
    if (!match.length) return null;
    getFeedItems();
  }, []);

  return (
    <div>
      <Header />
      <span className="tag">One Tab To Rule Them All 🔥</span>
      {items && items.length
        ? items.map((item) => <FeedItem key={item.title} item={item} />)
        : null}
    </div>
  );
};

export default Feed;
