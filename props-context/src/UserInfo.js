import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function UserInfo() {

  const user = useContext(UserContext)

  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={user.userInfo.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{user.userInfo.name}</p>
    </div>
  );
}
