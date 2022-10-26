import React from 'react';
import styled from 'styled-components';
import Heading from '../heading/Heading';
import MovieList from '../movie/MovieList';

const TrailerStyles = styled.div``
const Trailer = () => {
    return (
        <TrailerStyles>
            <Heading>Coming soon</Heading>
            <div className="card">
              <MovieList type={"upcoming"}></MovieList>
            </div>
            <div className="favourite">
              <Heading>Favourite genres</Heading>
              <div className="genres">
                {genres.length > 0 &&
                  genres.map((item) => <span key={item.id}>{item.title}</span>)}
              </div>
            </div>
        </TrailerStyles>
    );
};

export default Trailer;