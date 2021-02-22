import React from "react";
import MainContainer from "../MainContainer";
import { GridContainer, FlexContainer, GridItem } from "../../mainStyles";
import { Icon, Img, IconContainer } from "../Icon copy/styles";
import Typography from "../Typography";

class FooterComponent extends React.Component {
  render() {
    const { logo, contacts, copyRight } = this.props.items;

    const firstContentContainer = (
      <GridContainer mediaGridBlock="footer">
        <GridItem
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconContainer>
            <Img
              backgroundImg={logo.imgLogo}
              heightImg="38px"
              widthImg="80px"
            />
          </IconContainer>

          <Typography items={logo} settings={{ stylesText: "footerLogo" }} />
        </GridItem>
        {contacts.map((item) => {
          return (
            <Typography
              items={item}
              settings={{
                sizeTitle: "s",
                colorTitle: "white",
                colorText: "grey",
                positionText: "left",
                stylesText: "footer",
                gridGap: "1.3vw",
              }}
            />
          );
        })}
      </GridContainer>
    );

    const secondContentContainer = (
      <FlexContainer heightFlexContainer="header">
        <Typography items={copyRight} />
        <div>
          {copyRight.icons.map((icon) => {
            return (
              <a
                href="https://qna.habr.com/q/600318"
                style={{ textDecoration: "none" }}
              >
                <Icon
                  className={icon}
                  fontSizeIcon="s"
                  style={{
                    padding: "0 1.3vw",
                    opacity: "0.5",
                    cursor: "pointer",
                  }}
                ></Icon>
              </a>

              // <Button buttonIcon={icon} settings={{ typeButton: "link" }} />
            );
          })}
        </div>
      </FlexContainer>
    );
    return (
      <footer id="footer">
        <MainContainer
          contentContainer={firstContentContainer}
          settings={{
            backgroundColorMainContainer: "footer",
            heightMainContainer: "100%",
          }}
        />

        <MainContainer
          contentContainer={secondContentContainer}
          settings={{
            backgroundColorMainContainer: "copyRight",
            paddingBottom: "0",
            paddingTop: "0",
          }}
        />
      </footer>
    );
  }
}

export default FooterComponent;
