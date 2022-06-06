import styled from "styled-components";

const ActionItemWrap = styled.div`
  display: flex;
  grid-template-columns: 110px auto;
  grid-gap: 12px;
  @media(max-width: 768px) {
    grid-template-columns: 70px auto;
    display: grid;
  }
`

export default ActionItemWrap