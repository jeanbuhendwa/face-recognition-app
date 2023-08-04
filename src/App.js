import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <section className="mainNav">
        <Logo />
        <Navigation />
      </section>
    </>
  );
}

export default App;
