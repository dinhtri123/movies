import React from 'react';
import styled from "styled-components";

const HeadingStyles = styled.h3``
const Heading = ({children}) => {
    return (
        <HeadingStyles>
            <{children}
        </HeadingStyles>
    );
};

export default Heading;