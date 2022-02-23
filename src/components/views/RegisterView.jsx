/* eslint-disable default-case */
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authAsyncThunk";
import { Form, Label } from "./CSSComponents";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </div>
  );
}
