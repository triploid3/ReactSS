import React from "react";
import styled, { keyframes } from "styled-components";
import MonkeySearch from "../assets/no-feed.png";

const hueRotate = keyframes`
	from {
			filter: hue-rotate(0deg);
	}
	to {
			filter: hue-rotate(360deg);
	}
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }

  img:hover {
    animation: ${hueRotate} 1s;
    cursor: pointer;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

const NoFeeds = () => {
  return (
    <Wrapper style={{ marginTop: "1.5rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Add feeds to consume your content
      </h3>
      <img src={MonkeySearch} alt="no-feed" />
    </Wrapper>
  );
};

export default NoFeeds;
