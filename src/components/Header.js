import React from "react";
//import "../stylesheets/pages/App.scss";
import logo from "../images/logo-treehuggers.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <a href="./index.html" title="home">
            <img
              className="header__container--logo"
              src={logo}
              alt="Logo Awesome profile-cards"
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
