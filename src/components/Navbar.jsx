import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <div className="container head-main">
        <nav>
          <Link to="/">home</Link>
          <Link to="/works">Works</Link>
          <Link to="/Blogs">Blogs</Link>
        </nav>
        <a href="" className="hamburger">
          <img width={30} src="../info-btn.png" alt="" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
