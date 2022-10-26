import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '../../apiConfig';

const TrailerStyles = styled.div``
const Trailer = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bee9d365514775f0a6d69d0ecb510c45`,
        fetcher
      );
      if (!data) return;
  const trailer = data?.results || [];
    return (
        <TrailerStyles>
            <div className="trailer" onClick={handleHide}>
          {trailer.length > 0 &&
            trailer.slice(0, 1).map((item) => (
              <div className="show_trailer" key={item.id}>
                <button onClick={() => setShow(false)}>
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
              <button onClick={() => setShow(false)}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
              <span className="error">Video Trailer Not Found</span>
            </div>
          )}
        </div>
        </TrailerStyles>
    );
};

export default Trailer;