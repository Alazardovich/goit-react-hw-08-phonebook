import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authAsyncThunk";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <form onSubmit={handleSubmit}>
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
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default LoginView;
