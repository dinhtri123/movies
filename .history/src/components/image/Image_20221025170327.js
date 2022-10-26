import React from 'react';
import styled from 'styled-components';

const ImageStyles = styled.img``
const Image = () => {
    return (
        <div>
            <img
                  src= {tmdbAPI.image(item.backdrop_path)}
                  alt="banner-slice"
                />
        </div>
    );
};

export default Image;