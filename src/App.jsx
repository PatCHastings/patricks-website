import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
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
