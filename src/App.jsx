import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio</section>
      <section>Testimonials</section>
      <section>Team</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
