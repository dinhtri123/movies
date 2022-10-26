import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  line-heig
`;
const Heading = ({ children }) => {
  return <HeadingStyles>{children}</HeadingStyles>;
};

export default Heading;
