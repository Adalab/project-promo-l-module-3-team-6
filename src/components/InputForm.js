import React from "react";
import "../stylesheets/layout/_fill.scss";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label
          className="fill__form--label"
          htmlFornpm={this.props.generalValue}
        >
          {this.props.label}
        </label>
        <input
          className={`fill__form--input js-input-${this.props.generalValue} js-input-text js-form`}
          type={this.props.text}
          id={this.props.generalValue}
          name={this.props.generalValue}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default InputForm;
