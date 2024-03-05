import "./navbar.scss";
// https://www.linkedin.com/in/PatCHastings
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Patrick Hastings</span>
        <div className="social">
          <a href="#">
            <img src="/linkedinwhite.png" alt="" />
          </a>
          <a href="#">
            <img src="/Github-Logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
