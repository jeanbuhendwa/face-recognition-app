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
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonClick = () => {
    console.log("button clicked");
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
