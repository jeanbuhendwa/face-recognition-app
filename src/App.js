import React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import ImgLinkForm from "./components/ImgLinkForm/ImgLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      IMAGE_URL: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: faceBox.left_col * width,
      topRow: faceBox.top_row * height,
      rightCol: width - faceBox.right_col * width,
      bottomRow: height - faceBox.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ IMAGE_URL: this.state.input });
    console.log("button clicked");

    const PAT = "f447eee4fd174578bfce293b901e2fe7";
    const USER_ID = "john23";
    const APP_ID = "testFace";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch((error) => console.log("API error:", error));
  };

  render() {
    return (
      <>
        <section className="mainNav">
          <Logo />
          <Navigation />
        </section>
        <section className="mainSection">
          <Rank />
          <ImgLinkForm
            onInputChange={this.onInputChange}
            onButtonClick={this.onButtonClick}
          />
          <FaceRecognition
            box={this.state.box}
            IMAGE_URL={this.state.IMAGE_URL}
          />
        </section>
      </>
    );
  }
}

export default App;
