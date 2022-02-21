import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  margin: 10px 20px;
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#7600dc" : "#f0f0f0",
          borderRadius: 5,
          width: 150,
          height: 40,
          paddingTop: 10,
          textAlign: "center",
        })}
      >
        Main page
      </NavLink>
      <NavLink
        to="/contacts"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#ae5bf7" : "#f0f0f0",
          borderRadius: 5,
          width: 150,
          height: 40,
          paddingTop: 10,
          textAlign: "center",
        })}
      >
        Contacts
      </NavLink>
    </Nav>
  );
};

export default Navigation;
