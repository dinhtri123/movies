import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`
  padding: 8px 15px;
  border-radius: 8px;
  background:${props => props.color};
`;
const Category = ({ children, className, color }) => {
    let color = ["#FF5858", "#6a5af9", "#D58BDD","#31c6d4", "#ff74b1"];
    
  return (
    <CategoryStyles className={className} color={color}>
      {children}
    </CategoryStyles>
  );
};

export default Category;
