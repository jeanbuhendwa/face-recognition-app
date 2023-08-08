import React from "react";

const ImgLinkForm = ({ onInputChange, onButtonClick }) => {
  return (
    <>
      <p>{"Enter the URL of an image in the box below"}</p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonClick}>Submit</button>
      </div>
    </>
  );
};

export default ImgLinkForm;
