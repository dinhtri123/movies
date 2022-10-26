import React from 'react';
import styled from 'styled-components';

const CategoryStyles = styled.div``
const Category = ({children, className}) => {
    return (
        <CategoryStyles>
            <span className="category-item">{children}</span>
        </CategoryStyles>
    );
};

export default Category;