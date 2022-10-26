import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div``;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-left">
        <span>
          @2022 <strong>DEVDT</strong>
        </span>
      </div>
      <div className="footer-right">
        <p>Follow us</p>
        <div className="icon">
        <a href=""></a>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
