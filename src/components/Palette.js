import React from 'react';
// import "../stylesheets/App.css";

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clickedPalette = this.props.numberPalette;
    this.props.handleChange('numberPaletteActivated', clickedPalette);
  }

  render() {
    return (
      <div className={`palette palette${this.props.numberPalette}`}>
        <label
          className="cursor"
          htmlFor={`palette${this.props.numberPalette}`}
        >
          <input
            id={`palette${this.props.numberPalette}`}
            type="radio"
            value={`palette${this.props.numberPalette}`}
            name="palette"
            className="js-palette cursor"
            checked={
              this.props.numberPaletteActivated === this.props.numberPalette
            }
            onChange={this.handleClick}
          />
          <div
            className={`palette${this.props.numberPalette}__color1 color-box`}
          >
            1
          </div>
          <div
            className={`palette${this.props.numberPalette}__color2 color-box`}
          >
            2
          </div>
          <div
            className={`palette${this.props.numberPalette}__color3 color-box`}
          >
            3
          </div>
        </label>
      </div>
    );
  }
}

export default Palette;
