import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import { getLoggedIn } from "../../redux/auth/authSelector";
import styled from "styled-components";

const Header = styled.header`
  width: 1000px;
  font-family: "Roboto Serif", sans-serif;
  display: flex;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  background-color: rgba(89, 131, 252, 1);
  background-image: linear-gradient(
    90deg,
    rgba(89, 131, 252, 1) 0%,
    rgba(41, 53, 86, 1) 100%
  );
`;

export default function AppBar() {
  const isloggedId = useSelector(getLoggedIn);
  return (
    <Header>
      <Navigation />
      {isloggedId ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
