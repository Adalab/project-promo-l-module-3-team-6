import React from 'react';
import Palette from './Palette';
import '../stylesheets/layout/_design.scss';

class Desing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="design__colors hidden__container">
        <h5 className="design__colors--subtitle">Colores</h5>
        <div className="design__colors--palettes">
          <Palette
            numberPalette="1"
            numberPaletteActivated={this.props.numberPaletteActivated}
            handleChange={this.props.handleChange}
          />
          <Palette
            numberPalette="2"
            numberPaletteActivated={this.props.numberPaletteActivated}
            handleChange={this.props.handleChange}
          />
          <Palette
            numberPalette="3"
            numberPaletteActivated={this.props.numberPaletteActivated}
            handleChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Desing;
