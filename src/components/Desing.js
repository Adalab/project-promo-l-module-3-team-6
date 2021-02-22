import React from "react";
import Palette from "./Palette";

class Desing extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <fieldset className="design js-collapsable-container collapsable--close">
        <div className="design__header js-collapsable-header">
          <h2 className="design__header--text">
            <i className="design__header--text-icon far fa-object-ungroup"></i>
            Diseña
          </h2>
          <img className="up-icon" src="./assets/images/monstera.png" />
        </div>
        <div className="design__colors hidden__container">
          <h5 className="design__colors--subtitle">Colores</h5>
          <div className="design__colors--palettes">
            <Palette numberPalette="1" />
            <Palette numberPalette="2" />
            <Palette numberPalette="3" />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Desing;
