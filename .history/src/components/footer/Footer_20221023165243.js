import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  background: #2f2f2f29;
  .footer {
    &-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0px;
    }
    &-left {
      span {
        font-size: 14px;
        strong{
            ${props => props.theme.};
        }
      }
    }
    &-right {
      display: flex;
      gap: 0px 20px;

      .icon {
        display: flex;
        gap: 10px;
        font-size: 20px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-main">
          <div className="footer-left">
            <span className="title">
              @2022 <strong>DEVDT</strong>
            </span>
          </div>
          <div className="footer-right">
            <p>Follow us</p>
            <div className="icon">
              <a
                href="https://www.facebook.com/dinhtri.1062001"
                target={"blank"}
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://github.com/dinhtri123" target={"blank"}>
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
