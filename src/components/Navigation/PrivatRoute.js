import { useSelector } from "react-redux";
import { getLoggedIn } from "../../redux/auth/authSelector";
import { Route, Navigate } from "react-router-dom";

export default function PrivatRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getLoggedIn);
  console.log(routeProps);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
}
