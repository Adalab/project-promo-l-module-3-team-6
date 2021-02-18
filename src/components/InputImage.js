import React from "react";
import "../stylesheets/App.css";

class InputImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label className="fill__form--label" htmlFor={this.props.generalValue}>
          {this.props.label}
        </label>
        <div className="fill__form--image">
          <label className="fill__form--image--button js__profile-trigger">
            {this.props.labelbtnImage}
          </label>
          <input
            type={this.props.type}
            name=""
            id=""
            className="fill__form--image--input js__profile-upload-btn"
          />
          <div className="fill__form--image--preview js__profile-preview js-form"></div>
        </div>
      </>
    );
  }
}
export default InputImage;
