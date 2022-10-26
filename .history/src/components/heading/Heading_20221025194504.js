import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 1;
`;
const Heading = ({ children, className='' }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;


