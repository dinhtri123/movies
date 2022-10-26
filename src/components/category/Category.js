import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`
  padding: 8px 15px;
  border-radius: 8px;
`;
const Category = ({ children, className }) => {
  return <CategoryStyles className={className}>{children}</CategoryStyles>;
};

export default Category;
