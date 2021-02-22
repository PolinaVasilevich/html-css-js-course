import styled from "styled-components";
import { Title, SubTitle, Text } from "../Typography/styles";
import { Button } from "../Button/styles";
const setBackgroundColorMainContainer = (backgroundColorMainContainer) => {
  switch (backgroundColorMainContainer) {
    case "dark":
      return `
              background-color: #1F252F;
              ${Title} {
                color: #ffffff ;
              }
              ${SubTitle} {
                color: #b9b9b9;
              }
              ${Text} {
                color: #cccccc;
              } 
            `;

    case "green":
      return `background-color:#82b440;
              ${Button} {
                background-color:#82b440;
                border: 1px solid #fff;
              }
      `;
    case "blue":
      return `background-color:#37ceff;
              ${Button} {
                background-color:#37ceff;
                border: 1px solid #fff;
              }
          `;

    case "lightBlue":
      return `background-color:#49b0f1;
              ${Button} {
                background-color:#49b0f1;
                border: 1px solid #fff;
              }
          `;

    case "grey":
      return `background-color:#f6f7f8;
              // ${Title} {
              //   color: #ffffff ;
              // }
              // ${SubTitle} {
              //   color: #b9b9b9;
              // }
              // ${Text} {
              //   color: #cccccc;
              // } 
              // ${Button} {
              //   background-color:#37ceff;
              //   border: 1px solid #fff;
              // }
                `;

    case "footer":
      return `background-color: #242427;`;

    case "copyRight":
      return `background-color:#1A1A1D;`;

    case "logos":
      return `background-color: #373c46;`;

    case "blog":
      return `background-color: #4285F4;
              ${Button} {
                background-color: #4285F4;
                border: 1px solid #fff;
              }
          `;
    case "aside":
      return `
      background-color: #f7f7f7;
      `;

    default:
      break;
  }
};

const setHeightMainContainer = (heightMainContainer) => {
  switch (heightMainContainer) {
    case "header":
      return `height: 92px;`;
    case "intro":
      return `height: 757px;`;
    case "callTo":
      return `height: 180px;`;

    case "numbers":
      return `height: 280px;`;

    case "logos":
      return `height: 1277px;`;

    case "tweets":
      return `height: fit-content;`;

    case "slider1":
      return `height: 994px;`;

    case "slider2":
      return `height: 800px;`;

    default:
      return `height: 100%;`;
  }
};

const setPaddingBlock = (padding) => {
  switch (padding) {
    case "posts":
      return `  
        padding-left:32%;
        padding-right:0;
        padding-top: 0;
      }`;

    case "aside":
      return `
      padding-top: 0;
        padding-left:0;  
        // padding-right:27%; 
        
      `;

    case "asideIconsList":
      return `
    
        padding-left:0;
        padding-right:0;
        padding-top:0 !important;
        padding-bottom:0 !important;
      `;

    case "photos":
      return `
      
          padding-left:0;
          padding-right:0;
         
          padding-bottom:0;
        }`;

    default:
      return `
           
           `;
  }
};

const setStylesBlock = (stylesBlock) => {
  switch (stylesBlock) {
    case "posts":
      return `  
        padding-left:26%;
        padding-right:0;
      }`;

    case "aside":
      return `
      width: 40%;
  
        padding-left:0;   
      `;

    case "asideIconsList":
      return `
    
        padding-left:0;
        padding-right:0;
        padding-top:0 !important;
        padding-bottom:0 !important;
      `;

    case "photos":
      return `
      
          padding-left:0;
          padding-right:0;
          padding-top:0;
          padding-bottom:0;
        }`;

    default:
      return `
           
           `;
  }
};

const setMediaBlock = (mediaBlock) => {
  switch (mediaBlock) {
    case "numbers":
      return `@media(max-width: 900px) {
        display:none;
      }`;

    default:
      break;
  }
};

export const MainContainer = styled.div`
  position: relative;
  ${(props) => props.isVerticalCenter && `display: flex; align-items: center; `}
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-size: cover;
  background-position: center center;

  ${(props) =>
    setBackgroundColorMainContainer(props.backgroundColorMainContainer)}

  ${(props) => setHeightMainContainer(props.heightMainContainer)};
  ${(props) => setMediaBlock(props.mediaBlock)};
`;

const setPaddingLeftRight = (paddingLeftRight) => {
  switch (paddingLeftRight) {
    case "small":
      return `
                padding-right: 10%;
                padding-left: 10%;
            `;
    case "none":
      return `
                padding-right: 0;
                padding-left: 0;
                `;

    case "deletePadding":
      return `
                padding:0;
                `;

    case "iconsList":
      return `
        padding-top: 88px;
        padding-bottom: 105px;
      `;
    default:
      return `
            padding-right: 19%;
            padding-left: 19%;
           `;
  }
};

export const Wrapper = styled.div`
  ${(props) => setPaddingLeftRight(props.paddingLeftRight)};

  ${(props) => props.deletePadding && ``}
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "88px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "105px"};

  ${(props) => props.deletePadding && `padding 0 !important;`}

  ${(props) => setPaddingBlock(props.padding)};
`;
