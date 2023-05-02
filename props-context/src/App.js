import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Auth from "./Auth";
import articles from "./data.json";
import people from "./got.json";
import "./styles.css";
import verifyLogin from "./utils";
import ErrorBoundary from "./ErrorBoundary";
import { UserContext } from "./context/UserContext";

export default class App extends React.Component {
  state = {
    navClosed: false,
    isLogin: false,
    isModalOpen: false,
    data: null,
    userInfo: null,
    people: people,
    showPeopleClosed:true,
  };

  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };

  handleModal = (isOpen) => {
    this.setState({ isModalOpen: isOpen });
  };

  loginHandler = (email, password) => {
    verifyLogin(email, password).then((res) => {
      this.setState({
        isLogin: true,
        userInfo: res,
        data: articles
      });
    });
  };

  logoutHandler = () => {
    this.setState({
      isLogin: false,
      data: null,
      people: null
    });
  };

  toggleHandler = () => {
    this.setState((prev) => ({showPeopleClosed: !prev.showPeopleClosed}))
  }

  render() {
    const { isLogin, data, userInfo, showPeopleClosed,people } = this.state;
    let changeNavbar=this.changeNavbar
    let logoutHandler = this.logoutHandler
    let handleModal = this.handleModal
    let toggleHandler = this.toggleHandler
    let loginHandler = this.loginHandler
    return (
      <div className={`container ${this.state.navClosed ? "nav-closed" : ""}`}>
        <UserContext.Provider value={{
          isLogin,data,userInfo,showPeopleClosed,people,changeNavbar,logoutHandler,handleModal,toggleHandler, loginHandler
        }}>
          <Header/>
          <div className="main">
            <Sidebar/>
            <ErrorBoundary>
              <Main />
            </ErrorBoundary>
          </div>
          {this.state.isModalOpen ? (
            <Auth/>
          ) : (
            ""
          )}
        </UserContext.Provider>
      </div>
    );
  }
}
