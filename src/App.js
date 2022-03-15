import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getLoggedIn, getRefreshing } from "./redux/auth/authSelector";
import PrivatRoute from "./components/Navigation/PrivatRoute";
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
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          {/* <Route path="/" element={<AppBar />}> */}
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
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
