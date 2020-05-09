import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;

  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.dark};
    font-weight: 500;
  }

  .content {
    img {
      margin: 2rem 0;
      display: block;
      width: 340px;
      height: 250px;
      object-fit: cover;
    }

    strong {
      font-weight: normal;
    }

    center {
      text-align: left;
    }

    h2 {
      margin: 0.8rem 0;
      font-size: 1.3rem;
      color: ${(props) => props.theme.dark};
      font-weight: 500;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
      margin: 0.8rem 0;
      letter-spacing: 0.7px;
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

  @media screen and (max-width: 1100px) {
    width: 98%;
  }

  @media screen and (max-width: 769px) {
    width: 93%;
  }
`;

export default ({ location: { item } }) => {
  return (
    <Wrapper>
      <h3>{item && item.title.replace("&amp;", "&amp")}</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: item && item.description }}
      />
    </Wrapper>
  );
};
