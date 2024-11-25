import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-main">
            <div className="footer-links">
              <a href="">
                <img src="../public/11.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="../public/22.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="../public/33.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="../public/44.png" alt="linkidin" />
              </a>
            </div>
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
