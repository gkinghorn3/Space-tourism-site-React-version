import { bool } from "prop-types";
import { Link } from "react-router-dom";

import "./BurgerMenu.styles.scss";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className={`burger-menu ${open === true ? "open" : ""}`}>
   
     
    </div>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
};
export default BurgerMenu;
