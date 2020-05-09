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
  width: 90%;

  p,
  span {
    color: ${(props) => props.theme.light};
  }

  svg {
    fill: ${(props) => props.theme.accent};
  }

  div.title-trash {
    display: flex;

    svg {
      height: 18px;
      width: 18px;
      margin-left: 0.5rem;
      position: relative;
      top: 6px;
      fill: ${(props) => props.theme.light};
    }

    svg:hover {
      fill: ${(props) => props.theme.red};
    }
  }

  div.feed-info {
    display: flex;

    span {
      padding-right: 0.5rem;
    }
  }

  @media screen and (max-width: 530px) {
    width: 98%;
  }
`;
