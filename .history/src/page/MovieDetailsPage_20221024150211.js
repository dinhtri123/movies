import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../apiConfig";

const MovieDetailsPageStyles = styled.div`
  .background {
    position: relative;
    width: 100%;
    height: 500px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .overlay {
      position: absolute;
      
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), #0f0f0f);
    }
  }
`;
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  if (!data) return;
  const { backdrop_path } = data;
  console.log(data);

  return (
    <MovieDetailsPageStyles>
      <div className="background">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
        />
        <div className="overlay"></div>
      </div>
    </MovieDetailsPageStyles>
  );
};

export default MovieDetailsPage;
