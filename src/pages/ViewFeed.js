import React from "react";
import styled from "styled-components";
import Player from "../components/Player";
import { getRedditImg, getYtId } from "../utils";
import Header from "../components/Header";

const Wrapper = styled.div`
  margin: 1rem 0;
  width: 95%;

  h3 {
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.dark};
    font-weight: 500;
  }

  img.reddit-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin: 1rem 0;
    box-shadow: ${(props) => props.theme.bs1};
  }

  .content {
    img {
      margin: 1.5rem 0;
      display: block;
      width: 340px;
      height: 250px;
      object-fit: cover;
      display: none;
    }
    td {
      display: block;
    }

    strong {
      font-weight: normal;
    }

    center {
      text-align: left;
    }

    h2 {
      margin: 0.8rem 0;
      color: ${(props) => props.theme.dark};
      font-weight: 500;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
      margin: 0.8rem 0;
      letter-spacing: 0.4px;
    }

    code {
      display: none;
    }

    a {
      margin-bottom: 0.3rem;
      text-decoration: underline;
      color: ${(props) => props.theme.light};
    }

    li {
      margin-bottom: 0.5rem;
    }
  }

  iframe {
    margin: 1rem 0;
    box-shadow: ${(props) => props.theme.bs1};
  }

  button {
    padding: 0.4rem 1.2rem;
    font-family: ${(props) => props.theme.font};
    background: ${(props) => props.theme.accent};
    border: 1px solid ${(props) => props.theme.accent};
    color: ${(props) => props.theme.white};
    border-radius: 50px;
  }
`;

export default ({ location: { item } }) => {
  // for reddit
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

  return (
    <div>
      <Header />
      <span className="tag">One Tab To Rule Them All 🔥</span>
      <Wrapper>
        <h3>{item.title.replace(/&amp;?/, "&")}</h3>

        {redditImg && (
          <img className="reddit-img" src={redditImg} alt="reddit" />
        )}

        {item.enclosure &&
          item.enclosure.type &&
          item.enclosure.type === "audio/mpeg" && (
            <Player url={item.enclosure.link} />
          )}

        <div
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
          <button>
            <a href={item.link}>View on YouTube</a>
          </button>
        )}
      </Wrapper>
    </div>
  );
};
