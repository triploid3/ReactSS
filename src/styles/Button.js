import styled from "styled-components";

export default styled.button`
  padding: 0.4rem 1.2rem;
  font-family: ${(props) => props.theme.font};
  font-size: 1rem;
  background: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.white};
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.bs1};
  cursor: pointer;
`;
