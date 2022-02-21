import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: space-around;
  margin: 10px 20px;
`;

export default function AuthNav() {
  return (
    <Nav>
      <NavLink
        to="/register"
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
        Registration
      </NavLink>
      <NavLink
        to="/login"
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
        Login
      </NavLink>
    </Nav>
  );
}
