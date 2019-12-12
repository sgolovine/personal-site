import styled from "styled-components";

export default styled.div`
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 1.5em;
  width: 1000px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    max-width: 600px;
  }
`;
