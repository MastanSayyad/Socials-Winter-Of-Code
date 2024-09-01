import React from "react";
import { Link } from "react-router-dom";
import { socialMedia } from "./js/navFootData";
import "./css/footer.css"; 

const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section id="contact">
        <div className="footer-content">

          <div className="footer-mid">
            <div className="f-content">
              <div className="f-contact">
                <div className="f-nav">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/#about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/sponsors">Sponsors</Link>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1OxvwTBWIifLF_xQAcrOPz10_w0zc7KUy?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SWOC Brandings
                      </a>
                    </li>
                  </ul>

                  <ul className="f-nav-ul">
                    <li>
                      <Link to="/project">Projects</Link>
                    </li>
                    <li>
                      <Link to="/#timeline">Timeline</Link>
                    </li>
                    <li>
                      <a href="mailto:socialwinterofcodee@gmail.com">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.google.com/document/d/1JQdzFbdIlRNjeBZiyZS-9oXE29n6ps-c4SeehPrud_U/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code of Conduct
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-copyright-info">
                <div className="footer-copyright-right">
                    Copyright © {currentYear} Social under the GPL3 license. All rights reserved.
                  </div>
                </div>
              </div>

              <div className="f-logo">
                <img
                  src={"./img/logos/74243_Social_flat_DT_08.png"}
                  alt="logo"
                  className="logo-footer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="f-bottom-row">
            <div className="f-bottom">
              <div className="f-bottom-left">
                <p>SWOC</p>
              </div>
              <div className="f-bottom-right">
                <p>
                  Made with ❤️ by
                  <a
                    className="yellow-text underline"
                    href="https://www.linkedin.com/company/69075094/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    SWOC{" "}
                  </a>
                  Team
                </p>
              </div>
            </div>

            <div className="f-media">
              {socialMedia.map((item, index) => (
                <a href={item.socialLink} target="_blank" rel="noopener noreferrer" key={index}>
                  <i className={item.socialIcon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
