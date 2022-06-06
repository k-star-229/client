import styled from "styled-components";

export const AriannaMainWrap = styled.div`
  padding: 52px 0;
  path {
    pointer-events: all;
  };
  path:hover {
    opacity: 0.5;
    cursor: pointer;
  };
  
`
export const UserList = styled.div`
  width:100%;
  height:200px;
  display:flex;
  text-align: left;
  margin-bottom: 4px;
  gap:13px;
`
export const PersonName = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 4px;
    text-align: left;
  
`
export const PersonFullName = styled.div`
    font-size: 16px;
    font-weight: 700;
    padding-left: 4px;
    text-align: left;
  
`
export const LicenseString = styled.div`
  font-size: 16px;
  text-align: left;
  
`

export const ActionContent = styled.div`
  font-size: 14px;
`