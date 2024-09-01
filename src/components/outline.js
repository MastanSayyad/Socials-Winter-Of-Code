import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import "./css/outline.css";
import { navItems } from "./js/navFootData";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./home";
import Project from "./project";
import Team from "./team2023";
import BackToTopButton from "./GoToTop";
import Sponsors from "./sponsors";
import Footer from "./Footer";

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      transform: 0,
      page: '',
    };
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleScroll = () => {
    this.setState({
      transform: window.pageYOffset,
    });
  };

  changeActivePage = () => {
    setTimeout(() => {
      let currentPage = document
        .getElementById("page-name")
        .textContent.toLowerCase();
      this.setState({ page: currentPage });
    }, 100);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    Aos.init({
      duration: 500,
    });
    this.changeActivePage();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <div
          className={
            this.state.width <= 1100 ? "main-nav win-resize" : "main-nav"
          }
        >
          <nav id="nav__nav" style={{ paddingRight: "1.8rem" }}>
            {this.state.width <= 1100 ? (
              <>
                <button
                  className="navbar-toggler toggler-example"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="hamburger-icon">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent1"
                >
                  <ul className="navbar-nav mr-auto">
                    {navItems.map((item, index) => (
                      <li key={index} className="nav-item">
                        <Link to={item.url} className="nav-link">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div id="addNavLogo"></div>
                <div className="nav-comps">
                  <ul>
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.title.toLowerCase() === this.state.page &&
                          "nav-active"
                        }
                      >
                        <Link to={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/sponsors">
            <Sponsors />
          </Route>
        </Switch>

        <Footer /> 
        <BackToTopButton />
      </Router>
    );
  }
}

export default Index;
