import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Card() {

	const user = useContext(UserContext)

  	return (
		<div className="card">
			<div className="card-info">
			  <img src={user.userInfo.avatarURL} alt="Avatar" style={{ width: "50%", height: "50%" }} />
				<h4>
					<b>{user.userInfo.name}</b>
				</h4>
			</div>
				<p>{user.userInfo.description}</p>
		</div>
  	);
}
