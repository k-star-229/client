import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  h1, h2,h3, h4, h5, h6, a, p, div, li, button {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
  
  a {
    color: #CE3DAF;
    font-weight: 500;
    :hover {
      color: #CE3DAF;
      text-decoration: underline;
    }
  }
  .ant-layout {
    background-color: #ffffff;

    .ant-layout-header {
      background-color: #CE3DAF;
      display: flex;
      align-items: center;
      padding: 0;
      height: 72px;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .ant-layout-footer {
      padding: 21px 0;
      display: flex;
      align-items: center;
    }
  }

  .ant-btn {
    &.ant-btn-primary {
      background-color: #f7ce07;
      border-color: #f7ce07;
      color: #CE3DAF;
      font-weight: bold;
      :hover {
        background-color: #ffffff;
        border-color: #ffffff;
      }
    }
    &.ant-btn-link {
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 14px;
      padding: 0 8px;
      :hover, &.active {
        color: #f7ce07;
      }
    }
    &.ant-btn-text {
      color: #CE3DAF;
      font-weight: 500;
      font-size: 14px;
      padding: 0;
      :hover {
        color: #f7ce07;
        background: none;
      }
    }
    &.ant-btn-lg {
      height: 52px;
      font-size: 22px;
      letter-spacing: 1px;
      border-radius: 4px;
    }
  }
  
  .ant-input {
    &.ant-input-lg {
      height: 44px;
      border-radius: 4px;
      border-color: #eeeeee;
    }
  }
  
  .ant-menu{
    border-right: none;
    .ant-menu-item {
      font-size: 22px;
      height: 52px;
      display: flex;
      align-items: center;
      color: #CE3DAF;
      line-height: 1;
      margin-top: 0!important;
      :hover {
        color: #f7ce07;
      }
      a {
        color: #CE3DAF;
      }
      &.ant-menu-item-selected {
        background-color: #CE3DAF;
        color: #ffffff!important;
        a {
          color: #ffffff;
        }
      }
      &.btn {
        background-color: #f7ce07;
        border-radius: 40px;
        text-align: center;
        justify-content: center;
        font-weight: 600;
        margin-top: 32px!important;
        color: #000000;
        &.ant-menu-item-selected {
          background-color: #e3ba03;
          color: #000000;
        }
      }
    }
  }
  
  .ant-drawer {
    .ant-drawer-header{
      border-bottom: 0;
      box-shadow: 1px 1px 4px gray;
    }
  }
  
  .ant-card {
    &.criminal-card {
      padding: 30;
      border: none;
      text-align: center;
      .ant-card-body {
        padding: 50;
        border: none;
        box-shadow: none;
        img {
          width: 150px;
          height: 150px;
          //border-bottom-left-radius: 32px;
          //border-top-right-radius: 32px;
          //border-top-left-radius: 32px;
          border-radius: 150px;
          max-width: 100%;
          margin-bottom: 12px;
          //box-shadow: rgba(255, 0, 0, 0.4) 2px 2px, rgba(255, 0, 0, 0.3) 4px 4px, rgba(255, 0, 0, 0.2) 6px 6px, rgba(255, 0, 0, 0.1) 8px 8px, rgba(255, 0, 0, 0.05) 10px 10px;
        }
        h3 {
          font-size: 24px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        p {
          font-size: 16px;
          color: #000000;
          line-height: 1.4;
        }
      }
    }
    &.pdf-card {
      background: none;
      border: none;
      .ant-card-body{
        padding: 32px 0;
        p {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
        }
      }
      .ant-card-cover{
        border: 1px solid #333;
        outline: 3px solid #333;
        outline-offset: 2px;
        cursor: alias;
        a {
          img {
            max-width: 100%;
          }
        }
      }
    }
    .ant-card-body {
      padding: 21px 12px;
    }
    .us-state-map{
      width:100%;
      height:100%;
    }
  }
`

export default GlobalStyles