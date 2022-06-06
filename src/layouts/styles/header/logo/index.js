import styled from "styled-components";

const LogoText = styled.h1`
  margin: 0;
  line-height: 1;
  font-family: 'Kaushan Script', cursive;
  font-size: 32px;
  a {
    color: #ffffff;
    font-family: 'Kaushan Script', cursive;
    font-size: 32px;
    :focus, :hover {
      color: #ffffff;
      text-decoration: none;
    }
  }
`

export const LogoTextLight = styled.h1`
  margin: 0;
  line-height: 1;
  text-align: center;
  a {
    color: #CE3DAF;
    font-family: 'Kaushan Script', cursive;
    font-size: 32px;
    :focus, :hover {
      text-decoration: none;
    }
  }
`

export default LogoText