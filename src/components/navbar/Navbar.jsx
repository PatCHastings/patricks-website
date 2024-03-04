import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Patrick Hastings</span>
        <div className="social">
          <a href="https://www.linkedin.com/in/patrick-hastings-4a3a6a1b6/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
