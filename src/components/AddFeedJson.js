import React, { useContext } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { AddFileIcon, LeftArrow } from "./Icons";
import { FeedContext } from "../context/FeedContext";

const Wrapper = styled.div`
  margin: 1.5rem 0;

  label {
    display: flex;
    cursor: pointer;
  }

  h3 {
    margin: 0 0.6rem;
  }

  input {
    display: none;
  }

  svg {
    fill: ${(props) => props.theme.accent};
  }
`;

export default () => {
  const { setUserFeeds } = useContext(FeedContext);

  const onChange = (e) => {
    const fr = new FileReader();

    fr.addEventListener("load", () => {
      const { userFeeds } = JSON.parse(fr.result);
      setUserFeeds(userFeeds);
    });
    fr.readAsText(e.target.files[0]);
  };

  return (
    <Wrapper>
      <label htmlFor="file-icon">
        <AddFileIcon />
        <h3>Import Json</h3>
      </label>
      <input id="file-icon" type="file" onChange={onChange} required={true} />
    </Wrapper>
  );
};
