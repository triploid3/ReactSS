import styled from "styled-components";

export default styled.div`
  td {
    display: block;
  }

  button,
  img {
    display: none;
  }

  video {
    margin: 1rem 0;
    object-fill: cover;
    width: 100% !important;
    height: auto !important;
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
`;
