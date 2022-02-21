import { useSelector, useDispatch } from "react-redux";
import AuthOperations from "../../redux/auth/authAsyncThunk";
import defaultAvatar from "./prikolnaya-avatarka.jpg";
export default function UserMenu() {
  const dispatch = useDispatch();
  const avatar = defaultAvatar;
  const name = useSelector((state) => state.auth.user.name);
  return (
    <div>
      <img src={avatar} alt="avatar" width="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(AuthOperations.logOut())}>
        Sign out
      </button>
    </div>
  );
}
