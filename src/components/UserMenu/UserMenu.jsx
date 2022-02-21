import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/authSelector";
import AuthOperations from "../../redux/auth/authAsyncThunk";
import defaultAvatar from "./prikolnaya-avatarka.jpg";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;

  button {
    display: inline-block;
    width: 100px;
    margin-right: 10px;
    border-radius: 6px;
    font-family: "Roboto Serif", sans-serif;
    font-size: 14px;
  }
  button:hover {
    color: #7600dc;
    font-size: 15px;
    border-radius: 6px;
    transform: scale(1);
    transition: all 500ms ease;
    /* box-shadow: inset 0 0 0 16px #ae5bf7; */
  }
  span {
    position: relative;
    color: white;
    bottom: 30px;
  }
  img {
    padding: 1px;
    margin-left: 73%;
  }
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const avatar = defaultAvatar;
  const name = useSelector(getUserName);
  return (
    <Container>
      <img src={avatar} alt="avatar" width="60" height="100%" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(AuthOperations.logOut())}>
        Sign out
      </button>
    </Container>
  );
}
