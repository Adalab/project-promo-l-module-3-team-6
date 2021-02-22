import React from "react";
import leaf from "../images/monstera.png";

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
        <img className="up-icon" src={leaf} />
      </div>
    );
  }
}

export default Collapsable;
