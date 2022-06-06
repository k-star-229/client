import {Card} from "antd";
import styled from "styled-components";

const ActionFormCard = styled(Card)`
  //min-height: 100%;
  box-shadow: none;
  border: none;
  background-color: #F7E3E4;
  border-radius: 12px;
  padding: 0px;
  h2 {
    text-align: center;
    //font-size: 28px;
    margin-bottom: 0px;
  }
  h3{
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
  }
  @media(max-width: 768px) {
    padding: 0;
  }
`

export default ActionFormCard