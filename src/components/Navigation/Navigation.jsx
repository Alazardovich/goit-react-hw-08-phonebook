import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Main page</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
