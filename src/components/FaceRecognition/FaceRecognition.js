import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ IMAGE_URL, box }) => {
  return (
    <>
      <img
        src={IMAGE_URL}
        alt="face"
        id="inputImage"
        width="500px"
        height="auto"
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </>
  );
};

export default FaceRecognition;
