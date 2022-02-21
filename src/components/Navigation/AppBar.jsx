import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";

export default function AppBar() {
  const isloggedId = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header>
      <Navigation />
      {isloggedId ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
