import React from "react";
import styled from "styled-components";
import LoadingSkeleton from "../loading/LoadingSkeleton";

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

export const HeadingSkeleton = () => {
  return(
    <div className="w-full h-50px ">
      <LoadingSkeleton width="100%" height = "100%" ></LoadingSkeleton>
    </div>
  )
}
