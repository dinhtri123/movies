import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  background: #3c4048;
  .footer {
    &-main {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-main">
          <div className="footer-left">
            <span>
              @2022 <strong>DEVDT</strong>
            </span>
          </div>
          <div className="footer-right">
            <p>Follow us</p>
            <div className="icon">
              <a href="https://www.facebook.com/dinhtri.1062001">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://github.com/dinhtri123">
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
