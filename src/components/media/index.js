import styled from "styled-components";

const Media = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 20px;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }
`

export default Media