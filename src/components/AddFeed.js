import React, { useContext } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { AddIcon } from "./Icons";
import { FeedContext } from "../context/FeedContext";

const Wrapper = styled.div`
  padding: 1rem;
  box-shadow: ${(props) => props.theme.bs1};
  background: ${(props) => props.theme.black};
  width: 400px;
  margin: 2rem 0;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    display: block;
    margin-bottom: 0.4rem;
    padding: 0.2rem;
    background: inherit;
    border: none;
    font-family: ${(props) => props.theme.font};
    font-size: 1rem;
    color: ${(props) => props.theme.color};
  }

  input::placeholder {
    color: ${(props) => props.theme.light};
    letter-spacing: 0.6px;
  }

  button {
    background: none;
    border: none;
  }

  svg {
    fill: ${(props) => props.theme.accent};
  }
`;

const AddFeed = () => {
  const title = useInput("");
  const url = useInput("");
  const { userFeeds, setUserFeeds } = useContext(FeedContext);

  const handleAddFeed = (e) => {
    e.preventDefault();

    setUserFeeds((userFeeds) => [
      ...userFeeds,
      { title: title.value, url: url.value },
    ]);

    title.setValue("");
    url.setValue("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleAddFeed}>
        <div>
          <input
            type="text"
            placeholder="Wes Bos YT"
            value={title.value}
            onChange={title.onChange}
            required={true}
          />
          <input
            type="url"
            placeholder="https://youtube.com/id=879821"
            value={url.value}
            onChange={url.onChange}
            required={true}
          />
        </div>
        <button>
          <AddIcon type="submit" />
        </button>
      </form>
    </Wrapper>
  );
};

export default AddFeed;
