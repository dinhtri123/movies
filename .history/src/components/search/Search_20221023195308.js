import React from 'react';
import styled from 'styled-components';

const SearchStyles = styled.div`
.background{
    width: 100%;
    height:200px;
    img{
        width: 100%;
        height:100%;
        object-fit:cover;
        
    }
}`
const Search = () => {
    return (
        <SearchStyles>
        <div className="background">
            <img src="https://cdnmedia.baotintuc.vn/Upload/ggrZaB6nUMyF1EMJeBk2Q/files/2019/06/advengers.jpg" alt="" />
            <div className="overlay"></div>
        </div>
        </SearchStyles>
    );
};

export default Search;