import React, { useContext } from "react";

import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const navbar = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    // https://github.com/Md-Saif-Ryen/portfolios.git
 <div className="toggle-mains" >
  <div className="toggle-main" >
  <Toggle />
  </div>
 

 </div>
  );
};

export default navbar;