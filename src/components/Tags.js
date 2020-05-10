import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FeedContext } from "../context/FeedContext";
import { LightningIcon } from "./Icons";

const Wrapper = styled.div`
  margin: 1rem 0;

  h3 {
    margin-bottom: 1rem;
  }

  svg {
    fill: ${(props) => props.theme.accent};
    position: relative;
    top: 5px;
    margin-right: 0.5rem;
  }
`;

const Tags = () => {
  const { userFeeds } = useContext(FeedContext);

  const tagList = userFeeds.map((userFeed) => userFeed.tags);
  let tags = [].concat.apply([], tagList);
  tags = [...new Set(tags)];

  return (
    <Wrapper>
      {tags.length
        ? tags.map((tag) => (
            <Link key={tag} to={`/tags/${tag}`}>
              <h3>
                <LightningIcon />
                {tag}
              </h3>
            </Link>
          ))
        : null}
    </Wrapper>
  );
};

export default Tags;
