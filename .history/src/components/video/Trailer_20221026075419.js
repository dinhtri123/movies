import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const TrailerStyles = styled.div``
const Trailer = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bee9d365514775f0a6d69d0ecb510c45`,
        fetcher
      );
    return (
        <TrailerStyles>
            
        </TrailerStyles>
    );
};

export default Trailer;