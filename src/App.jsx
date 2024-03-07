import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section id="Portfolio">Services</section>
      <section id="Contact">Portfolio</section>
      <section id="Testimonials">Testimonials</section>
      <section>Team</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
