import React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import ImgLinkForm from "./components/ImgLinkForm/ImgLinkForm";
import Rank from "./components/Rank/Rank";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      // IMAGE_URL: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonClick = () => {
    // this.setState({ input: this.state.input });
    console.log("button clicked");
    // const inputValue = this.state.input;
    // this.setState({
    //   IMAGE_URL: inputValue,
    // });

    // console.log(this.state.IMAGE_URL);
    const PAT = "f447eee4fd174578bfce293b901e2fe7";
    const USER_ID = "john23";
    const APP_ID = "testFace";
    const MODEL_ID = "face-detection";
    const IMAGE_URL =
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Baloch_people_%284%29.jpg";

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
      .then((result) => console.log(result))
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
        </section>
      </>
    );
  }
}

export default App;
