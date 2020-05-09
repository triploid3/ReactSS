import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
