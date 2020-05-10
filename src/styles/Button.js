import styled from "styled-components";

export default styled.button`
  padding: 0.4rem 1.2rem;
  font-family: ${(props) => props.theme.font};
  background: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.white};
  border-radius: 50px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.bs1};

  svg {
    position: relative;
    top: 3px;
    height: 18px;
    width: 18px;
    fill: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 530px) {
    font-size: 0.9rem;

    svg {
      top: 2px;
      height: 14px;
      width: 14px;
    }
  }
`;
