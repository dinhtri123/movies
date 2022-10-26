import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div``;
const Category = ({ children, className }) => {
  return (
    <CategoryStyles className={className}>
      <span>{children}</span>
    </CategoryStyles>
  );
};

export default Category;
