import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getLoggedIn } from "./redux/auth/authSelector";
import {
  ContactsView,
  RegisterView,
  LoginView,
  HomeView,
} from "./components/views";
import authOperations from "./redux/auth/authAsyncThunk";
import { fetchContacts } from "./redux/contacts/contAsyncThunk";
import AppBar from "./components/Navigation/AppBar";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }

    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, []]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </>
  );
}

export default App;
