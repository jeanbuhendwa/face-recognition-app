import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import ImgLinkForm from "./components/ImgLinkForm/ImgLinkForm";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <>
      <section className="mainNav">
        <Logo />
        <Navigation />
      </section>
      <section className="mainSection">
        <Rank />
        <ImgLinkForm />
      </section>
    </>
  );
}

export default App;
