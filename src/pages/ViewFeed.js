import React from "react";
import styled from "styled-components";
import Player from "../components/Player";
import { getTwitterImg, getRedditImg, getYtId } from "../utils";
import Header from "../components/Header";
import Content from "../styles/Content";
import Button from "../styles/Button";
import { LeftArrow } from "../components/Icons";

const Wrapper = styled.div`
  margin: 1rem 0;
  width: 95%;

  h3 {
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.dark};
    font-weight: 500;
  }

  img.reddit-img,
  img.twitter-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin: 1rem 0;
    box-shadow: ${(props) => props.theme.bs1};
  }

  iframe {
    margin: 1rem 0;
    box-shadow: ${(props) => props.theme.bs1};
  }
`;

export default ({ location: { item } }) => {
  const redditFeed = item.link.includes("www.reddit.com");
  let redditImg = "";
  if (redditFeed) {
    redditImg = getRedditImg(item.description);
  }

  const ytFeed = item.link.includes("youtube.com");
  let ytId = "";
  if (ytFeed) {
    ytId = getYtId(item.guid);
  }

  const twitterFeed = item.guid && item.guid.includes("twitter.com");
  let twitterImg = "";
  if (twitterFeed) {
    twitterImg = getTwitterImg(item.description);
  }

  return (
    <div>
      <Header />
      <span className="tag">One Tab To Rule Them All 🔥</span>
      <Wrapper>
        {!twitterFeed && <h3>{item.title.replace(/&amp;?/, "&")}</h3>}

        {redditImg && (
          <img className="reddit-img" src={redditImg} alt="reddit" />
        )}

        {twitterImg && (
          <img className="twitter-img" src={twitterImg} alt="twitter" />
        )}

        {item.enclosure &&
          item.enclosure.type &&
          item.enclosure.type === "audio/mpeg" && (
            <Player url={item.enclosure.link} />
          )}

        <Content
          className="content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />

        {ytId && (
          <iframe
            src={`https://www.youtube.com/embed/${ytId}`}
            frameBorder="0"
            width="100%"
            height="400px"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        )}
        {ytId && (
          <Button>
            <a href={item.link}>
              View on YouTube <LeftArrow />
            </a>
          </Button>
        )}
      </Wrapper>
    </div>
  );
};
