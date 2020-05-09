import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  background: ${(props) => props.theme.black};
  padding: 1rem;
  box-shadow: ${(props) => props.theme.bs1};
  border-radius: 4px;
  width: 74%;

  p,
  span {
    color: ${(props) => props.theme.light};
  }

  svg {
    fill: ${(props) => props.theme.accent};
  }

  div.feed-info {
    display: flex;

    span {
      padding-right: 0.5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 98%;
  }

  @media screen and (max-width: 769px) {
    width: 93%;
  }
`;
