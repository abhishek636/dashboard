import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function Articles() {

  const user = useContext(UserContext)

  if (!user.isLogin) {
    throw new Error("Auth Failed");
  }

  return (
    <ul className="articles">
      {user.data.map((article, index) => (
        <li key={index}>
          <Link to={"articles/" + article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <small>{article.author}</small>
        </li>
      ))}
    </ul>
  );
}

export default Articles;
