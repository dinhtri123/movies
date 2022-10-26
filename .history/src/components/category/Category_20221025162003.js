import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 15px;
    span {
      padding: 8px 15px;
      border-radius: 10px;
      &:nth-child(1) {
        background: #937dc2;
      }
      &:nth-child(2) {
        background: #f96666;
      }
      &:nth-child(3) {
        background: #D58BDD;
      }
      &:nth-child(4) {
        background: #31c6d4;
      }
      &:nth-child(5) {
        background: #ff74b1;
      }
    }`;
const Category = ({ children, className }) => {
  return (
    <CategoryStyles className={className}>
      <span>{children}</span>
    </CategoryStyles>
  );
};

export default Category;
