import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`
  padding: 8px 15px;
  border-radius: 8px;
  background: ${(props) => props.color};
`;
const Category = ({ children, className, bg }) => {

  return (
    <CategoryStyles
      className={className}
      
    >
      {children}
    </CategoryStyles>
  );
};

export default Category;
