import React from "react";
import "../stylesheets/core/_core.scss";
import "../stylesheets/layout/_collapsable.scss";
import logo from "../images/logo-adalab.png";

class Collapsable extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className="design__header js-collapsable-header">
        <h2 className="design__header--text">
          <i className="design__header--text-icon far fa-object-ungroup"></i>
          Diseña
        </h2>
        <img className="up-icon" src="./assets/images/monstera.png" />
      </div>
    );
  }
}

export default Collapsable;
