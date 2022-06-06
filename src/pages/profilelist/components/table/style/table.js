import styled from "styled-components";

const TableContent = styled.div`
  border-right: 1px solid #bfbfbf;
  border-top: 1px solid #bfbfbf;
  &>div {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 6fr;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
    }
    &:nth-child(even) {
      background-color: #f7f3f3;
    }
    &>div {
      border-left: 1px solid #bfbfbf;
      border-bottom: 1px solid #bfbfbf;
      padding: 2px 6px;
      color: #000;
      font-size: 13px;
      line-height: 1.5;
      min-height: 32px;
    }
  }
`

export default TableContent