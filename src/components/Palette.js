import React from "react";
// import "../stylesheets/App.css";

class Palette extends React.Component {
  constructor(props) {
    super(props);
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
            value="1"
            name="palette"
            className="js-palette cursor"
            checked
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
