import React from "react";
import styled from "styled-components";
import { LinkIcon } from "./Icons";

const StyledFeed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  background: ${(props) => props.theme.black};
  padding: 1rem;
  box-shadow: ${(props) => props.theme.bs1};
  border-radius: 4px;
  width: 74%;

  p {
    color: ${(props) => props.theme.light};
  }

  svg {
    fill: ${(props) => props.theme.accent};
  }

  @media screen and (max-width: 1100px) {
    width: 98%;
  }

  @media screen and (max-width: 769px) {
    width: 93%;
  }
`;

const Feed = ({ feed: { feed, meta } }) => {
  return (
    <StyledFeed>
      <div>
        <h3>{meta.title}</h3>
        <p>
          {feed.description
            ? feed.description.substr(0, 70) + "..."
            : "No Description"}
        </p>
      </div>
      <a href={feed.link} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </a>
    </StyledFeed>
  );
};

export default Feed;
