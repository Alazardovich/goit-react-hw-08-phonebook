import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import { getLoggedIn } from "../../redux/auth/authSelector";

export default function AppBar() {
  const isloggedId = useSelector(getLoggedIn);
  return (
    <header>
      <Navigation />
      {isloggedId ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
