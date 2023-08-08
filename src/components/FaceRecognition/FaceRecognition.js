import React from "react";

const FaceRecognition = ({ IMAGE_URL }) => {
  return (
    <>
      <img src={IMAGE_URL} alt="face" id="face" width="400px" height="auto" />
    </>
  );
};

export default FaceRecognition;
