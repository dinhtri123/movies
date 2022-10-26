import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className={`skeleton ${props.className}`}
      style={{
        width: props.width || "100%",
        height: props.height,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
