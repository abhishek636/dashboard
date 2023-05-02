import React from "react";
import ShowPeople from "./ShowPeople";
import { UserContext } from "./context/UserContext";

class People extends React.Component {
  static contextType = UserContext;

  render () {

    if (!(this.context.isLogin && this.context.people)) {
		throw new Error("Auth Failed");
    }

    return (
			<>
        <h1 className="center">🚀 Welcome to People page!</h1>
        <div className="center">
          <button className="show-people" onClick={this.context.toggleHandler}>Show People</button>
        </div>
        {this.context.showPeopleClosed ? "" : <ShowPeople />}
			</>
		);
  }
}

export default People;
