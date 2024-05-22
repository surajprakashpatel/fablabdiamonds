import React, { useState } from "react";
import "./NavBarSubCat.css";
import icon from "../images/menu_icon.svg"
import { NavLink,Switch} from "react-router-dom";
import Shop from "./Shop";
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";


const NavBarSubCat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav>
      <div
        className="menu"
        icon={menuOpen ? faXmark : faBars}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />
      <ul
        className={menuOpen ? "open" : ""}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/rings">Rings</NavLink>
        </li>
        <li>
          <NavLink to="/bracelets">Bracelets</NavLink>
        </li>
        <li>
          <NavLink to="/earrings">Earrings</NavLink>
        </li>
        <li>
          <NavLink to="/necklace">Necklace</NavLink>
        </li>
        <li>
          <NavLink to="/hoiya">Bangles</NavLink>
        </li>
        <li>
          <NavLink to="/xyz">Pendants</NavLink>
        </li>
        <li>
          <NavLink to="/nsdfe">Solitare Diamonds</NavLink>
        </li>
      </ul>
    </nav>
   
  );
};

export default NavBarSubCat;
