import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { Route, Routes, Navigate } from "react-router-dom";
import { getLoggedIn, getRefreshing } from "./redux/auth/authSelector";
// import PrivatRoute from "./components/Navigation/PrivatRoute";
// import PublicRoute from "./components/Navigation/PublicRoute";
import authOperations from "./redux/auth/authAsyncThunk";
import { fetchContacts } from "./redux/contacts/contAsyncThunk";
import AppBar from "./components/Navigation/AppBar";

const ContactsView = lazy(() => import("./components/views/ContactsView"));
const RegisterView = lazy(() => import("./components/views/RegisterView"));
const LoginView = lazy(() => import("./components/views/LoginView"));
const HomeView = lazy(() => import("./components/views/HomeView"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);
  const isRefresh = useSelector(getRefreshing);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
    console.log(isRefresh);
    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, []]);
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
            }}
          >
            <RotatingLines
              width="130"
              strokeColor="#6495ED"
              strokeWidth="1"
              animationDuration="3"
            />
          </div>
        }
      >
        <Routes>
          {/* <Route path="/" element={<AppBar />}> */}
          <Route path="/" element={<HomeView />} />
          <Route
            path="/register"
            element={
              !isLoggedIn ? <RegisterView /> : <Navigate to="/contacts" />
            }
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <LoginView /> : <Navigate to="/contacts" />}
          />
          {/* <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" redirected>
                  <LoginView />
                </PublicRoute>
              }
            /> */}
          <Route
            path="/contacts"
            element={
              // <PrivatRoute>
              <ContactsView />
              // </PrivatRoute>
            }
          />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
