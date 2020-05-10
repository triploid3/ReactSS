import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FeedContext } from "../context/FeedContext";
import FeedList from "../components/FeedList";
import AddFeed from "../components/AddFeed";
import { API_KEY, COUNT } from "../config";
import Header from "../components/Header";
import NoFeeds from "../components/NoFeeds";

export default () => {
  const { tag } = useParams();
  const { userFeeds } = useContext(FeedContext);

  const [feeds, setFeeds] = useState([]);

  const matchedFeeds = userFeeds.filter((userFeed) =>
    userFeed.tags.includes(tag)
  );
  const urls = matchedFeeds.map((matchedFeed) => {
    return `http://api.rss2json.com/v1/api.json?rss_url=${matchedFeed.url}&api_key=${API_KEY}&count=${COUNT}`;
  });

  const getFeeds = async (url, index) => {
    const { data } = await axios.get(url);
    data.meta = matchedFeeds[index];
    setFeeds((feeds) => [...feeds, data]);
  };

  useEffect(() => {
    setFeeds([]);
    urls.forEach((url, index) => getFeeds(url, index));
  }, [userFeeds]);

  return (
    <div>
      <Header />
      <span className="tag">One Tab To Rule Them All 🔥</span>
      {!urls.length ? <NoFeeds /> : <FeedList feeds={feeds} />}
    </div>
  );
};
