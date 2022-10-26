import React from 'react';
import styled from "styled-components"
const MovieCardStyles = s

const MovieCard = () => {
    return (
        <div>
            <div className="image">
                <div className="overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1666350773137-cbc310aaf909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div className="card-item">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </span>
                <div className="item">
                  <span className="item-title">Black Panther 2</span>
                  <span className="item-since">2017</span>
                </div>
                <div className="star">
                  <span className="number">5</span>
                  <img src="/star.png" alt="" className="icon-star" />
                </div>
              </div>
        </div>
    );
};

export default MovieCard;