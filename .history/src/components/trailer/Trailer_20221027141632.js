import React from "react";
import styled from "styled-components";
import Heading from "../heading/Heading";
import MovieList from "../movie/MovieList";
const genres = [
  {
    id: 1,
    title: "Action",
  },
  {
    id: 2,
    title: "Western",
  },
  {
    id: 3,
    title: "Thrille",
  },
  {
    id: 4,
    title: "Adventures",
  },
  {
    id: 5,
    title: "Drama",
  },
];
const TrailerStyles = styled.div`
  max-width: 300px;
  width: 100%;
`;
const Trailer = ({ className }) => {
  return (
    <TrailerStyles className={className}>
      <Heading className="heading">Coming soon</Heading>
      <div className="card">
        <MovieList type={"upcoming"}></MovieList>
      </div>
      <div className="favourite">
        <Heading className="heading">Favourite genres</Heading>
        <div className="genres">
          {genres.length > 0 &&
            genres.map((item) => <span key={item.id}>{item.title}</span>)}
        </div>
      </div>
    </TrailerStyles>
  );
};

export default Trailer;
