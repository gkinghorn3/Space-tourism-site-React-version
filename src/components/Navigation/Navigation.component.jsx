import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

import logo from "../../assets/logo.svg";

const Navigation = ({ tabSelector, tabSelected, location }) => {
  // persist aria select
  const [checkedIndex, setCheckedIndex] = useState(0);



  const handleItemClick = (index, tab) => {
    setCheckedIndex(index);
    tabSelector(tab);
  };

  useEffect(() => {
    if (location.pathname.substring(1) === "home") {
      setCheckedIndex(0);
    } else if (location.pathname.substring(1) === "destination") {
      setCheckedIndex(1);
    }
    
  }, [location.pathname]);

console.log(location.pathname.substring(1)) 
  return (
    <div id="nav-container">
      <nav className="nav-container flex">
        <div className="heading-left">
          <img className="logo-icon" src={logo} alt="Logo"></img>
        </div>
        <ul className="nav-links flex underline-indicators">
          <Link to="/">
            <li
              aria-selected={checkedIndex === 0}
              onClick={() => handleItemClick(0, "home")}
              className="numbered-title"
            >
              <span>00</span>home
            </li>
          </Link>

          <Link to="/destinations" className="is-underlined">
            <li
              aria-selected={checkedIndex === 1}
              onClick={() => handleItemClick(1, "destination")}
              className="numbered-title"
            >
              <span>01</span>Destination
            </li>
          </Link>

          <li
            aria-selected={checkedIndex === 2}
            onClick={() => handleItemClick(2, "crew")}
            className="numbered-title"
          >
            <span>02</span>Crew
          </li>
          <li
            aria-selected={checkedIndex === 3}
            onClick={() => handleItemClick(3, "technology")}
            className="numbered-title"
          >
            <span>03</span>Technology
          </li>
        </ul>
      </nav>
      {tabSelected === 'home' ? (
        <section className="home-content-container">
          <div className="flex home-content-inner">
            <div className="flex inner-text">
              <h1 className="uppercase ">So you want to travel to</h1>
              <span className="fs-900 uppercase ff-serif">Space</span>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

   
              <button className="large-btn uppercase ff-serif fs-600 text-dark bg-white">
                Explore
              </button>
           
          </div>
        </section>
      ) : null}
      <Outlet />
    </div>
  );
};

export default Navigation;
