/* eslint-disable default-case */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authOperations from "../../redux/auth/authAsyncThunk";
import { Form, Label } from "./CSSComponents";
// import { getUserName } from "../../redux/auth/authSelector";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const notify = (text) => toast(text);
    if (name === "" || email === "" || password === "") {
      notify("Enter correctly");
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setPassword("");
    setEmail("");
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <Label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <button type="submit">Register</button>
      </Form>
      <ToastContainer />
    </div>
  );
}
