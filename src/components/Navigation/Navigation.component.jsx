import { useState } from "react";

import "./navigation.styles.scss";

import logo from "../../assets/logo.svg";

const Navigation = () => {
  const [checkedIndex, setCheckedIndex] = useState(0);

  const handleItemClick = (index) => {
    setCheckedIndex(index);
  };

  return (
    <div id="app-background">
      <nav className="nav-container flex">
        <div className="heading-left">
          <img className="logo-icon" src={logo} alt="Logo"></img>
        </div>
        <ul
          className="nav-links flex underline-indicators"
          style={{ "--gap": "3rem" }}
        >
          <li
            aria-selected={checkedIndex === 0}
            onClick={() => handleItemClick(0)}
            className="numbered-title"
          >
            <span>01</span>Destinations
          </li>
          <li
            aria-selected={checkedIndex === 1}
            onClick={() => handleItemClick(1)}
            className="numbered-title"
          >
            <span>02</span>Crew
          </li>
          <li
            aria-selected={checkedIndex === 2}
            onClick={() => handleItemClick(2)}
            className="numbered-title"
          >
            <span>03</span>Technology
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
