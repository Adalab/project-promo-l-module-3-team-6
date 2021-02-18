import React from "react";
//import "../stylesheets/pages/App.scss";
import IconNavigation from "./IconNavigation";

class Navigation extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <nav className="card__preview--nav">
        <ul className="card__socialmedia">
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="phone"
            icon="fas fa-mobile-alt"
            href="#"
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="email"
            icon="far fa-envelope"
            href="#"
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="linkedin"
            icon="fab fa-linkedin-in"
            href="#"
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="github"
            icon="fab fa-github-alt"
            href="#"
          />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
