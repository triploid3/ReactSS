import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FeedContext } from "../context/FeedContext";
import FeedList from "../components/FeedList";
import AddFeed from "../components/AddFeed";

const Home = () => {
  const { userFeeds } = useContext(FeedContext);

  const [feeds, setFeeds] = useState([]);

  const urls = userFeeds.map(
    (userFeed) => `http://api.rss2json.com/v1/api.json?rss_url=${userFeed.url}`
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
    <>
      <AddFeed />
      <FeedList feeds={feeds} />
    </>
  );
};

export default Home;
