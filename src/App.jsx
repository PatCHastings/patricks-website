import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Technologies from "./components/technologies/Technologies";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="">
        <Parallax type="technologies" />
      </section>
      <section id="Technologies">
        <Technologies />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio</section>
      <section id="Testimonials">Testimonials</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
