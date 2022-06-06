import styled from "styled-components";
import {Button} from "antd";

const HamburgerButton = styled(Button)`
  display: flex;
  padding: 0;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: transparent!important;
  border-color: transparent!important;
  box-shadow: none;
  span {
    font-size: 24px;
    color: #ffffff;
    transition: all 0.3s;
  }
  :hover {
    span {
      color: #e9a4ed;
      transition: all 0.3s;
    }
  }
`

export default HamburgerButton