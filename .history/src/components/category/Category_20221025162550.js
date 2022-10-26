import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`
  padding: 8px 15px;
  border-radius: 8px;
  background
`;
const Category = ({ children, className, color }) => {
  return (
    <CategoryStyles className={className} color={color}>
      {children}
    </CategoryStyles>
  );
};

export default Category;
