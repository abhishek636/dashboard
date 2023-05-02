import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function ShowPeople() {

  const user = useContext(UserContext)

	const friends = user.people.houses.reduce((acc, cv) => {
		return acc.concat(cv.people);
	}, []);

  return (
    <div className="flex">
      {friends.map((people, index) => (
        <div className="people" key={index}>
          <h4>{people.name}</h4>
          <p>{people.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowPeople;