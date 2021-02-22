import React from 'react';
import Palette from './Palette';
import '../stylesheets/layout/_design.scss';
import leaf from '../images/monstera.png';
import Collapsable from './Collapsable';

class Desing extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <fieldset className="design js-collapsable-container collapsable--close">
        <Collapsable
          title="Diseña"
          classValue="design"
          icon="far fa-object-ungroup"
        />
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
