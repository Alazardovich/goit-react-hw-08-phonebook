import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/authAsyncThunk";
import { Form, Label } from "./CSSComponents";
// import { getUserEmail } from "../../redux/auth/authSelector";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const isUser = useSelector(getUserEmail);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      console.log("err log");
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setPassword("");
    setEmail("");
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
        <h1>Login</h1>
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
        <button type="submit">Sign in</button>
      </Form>
    </div>
  );
};
export default LoginView;
