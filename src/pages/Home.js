import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FeedContext } from "../context/FeedContext";
import FeedList from "../components/FeedList";
import { API_KEY, COUNT } from "../config";
import Header from "../components/Header";
import NoFeeds from "../components/NoFeeds";

const Home = () => {
  const { userFeeds } = useContext(FeedContext);

  const [feeds, setFeeds] = useState([]);

  const urls = userFeeds.map(
    (userFeed) =>
      `http://api.rss2json.com/v1/api.json?rss_url=${userFeed.url}&api_key=${API_KEY}&count=${COUNT}`
  );

  const getFeeds = async (url, index) => {
    const { data } = await axios.get(url);
    data.meta = userFeeds[index];
    setFeeds((feeds) => [...feeds, data]);
  };

  useEffect(() => {
    setFeeds([]);
    urls.forEach((url, index) => getFeeds(url, index));
    localStorage.setItem("userFeeds", JSON.stringify(userFeeds));
  }, [userFeeds]);

  return (
    <div>
      <Header />
      {!urls.length ? <NoFeeds /> : <FeedList feeds={feeds} />}
    </div>
  );
};

export default Home;
