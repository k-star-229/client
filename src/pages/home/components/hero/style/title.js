import styled from "styled-components";

const HeroTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 48px;
  max-width: 1200px;
  margin: auto;
  font-style: italic;
  font-family: 'PT Serif', serif;
  margin-bottom: 32px;
  @media(max-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`

export const HeroSubtitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 14px;
  }
`

export default HeroTitle