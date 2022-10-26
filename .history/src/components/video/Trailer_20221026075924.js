import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";

const TrailerStyles = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  transform: scale(1);
  animation: show 0.1s linear;
  @keyframes show {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .show_trailer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      position: absolute;
      top: 50px;
      right: 50px;
      font-size: 50px;
      &:hover {
        color: ${(props) => props.theme.redLight};
      }
    }
  }
  .error {
    font-size: 50px;
    font-weight: 600;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.redLight},
      #6a5af9
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Trailer = ({ clickHandleHide,  }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  if (!data) return;
  const trailer = data?.results || [];
  return (
    <TrailerStyles onClick={onClick}>
      {trailer.length > 0 &&
        trailer.slice(0, 1).map((item) => (
          <div className="show_trailer" key={item.id}>
            <button onClick={onClick}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <iframe
              width="80%"
              height="75%"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      {trailer.length <= 0 && (
        <div className="show_trailer">
          <button onClick={onClick}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <span className="error">Video Trailer Not Found</span>
        </div>
      )}
    </TrailerStyles>
  );
};

export default Trailer;
