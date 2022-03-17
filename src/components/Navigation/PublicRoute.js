import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { getLoggedIn } from "../../redux/auth/authSelector";

export default function PublicRoute({
  children,
  redirected = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getLoggedIn);
  console.log(redirected);
  console.log(routeProps);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
}
