import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

import "./navigation.styles.scss";

import logo from "../../assets/logo.svg";

const Navigation = ({ tabSelector, tabSelected }) => {
 
  const [checkedIndex, setCheckedIndex] = useState(0);
  
  const location = useLocation();
  const currentPath = location.pathname.substring(1);

  const handleItemClick = (index, tab) => {
    setCheckedIndex(index);
    tabSelector(tab);
  };

  



  return (
    <div id="nav-container">
      <nav className="nav-container flex">
        <div className="heading-left">
          <img className="logo-icon" src={logo} alt="Logo"></img>
        </div>
        <ul className="nav-links flex underline-indicators">
        <NavLink to="/" > 
            <li
              aria-selected={checkedIndex === 0 || currentPath === ''}
              onClick={() => handleItemClick(0, "home")}
              className="numbered-title"
            >
              <span>00</span>home
            </li>
          </NavLink>

          <NavLink to="/destinations" > 
            <li
              aria-selected={checkedIndex === 1 || currentPath === 'destinations'}
              onClick={() => handleItemClick(1, "destinations")}
              className="numbered-title"
            >
              <span>01</span>Destination
            </li>
          </NavLink>

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
