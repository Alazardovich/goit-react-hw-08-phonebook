import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  ContactsView,
  RegisterView,
  LoginView,
  HomeView,
} from "./components/views";
import authOperations from "./redux/auth/authAsyncThunk";
import AppBar from "./components/Navigation/AppBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
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
