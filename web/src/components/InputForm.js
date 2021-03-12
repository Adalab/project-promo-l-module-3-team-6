import React from "react";
import "../stylesheets/layout/_fill.scss";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.handleChange(ev.target.name, ev.target.value);
  }
  render() {
    console.log(this.props.value);
    return (
      <>
        <label className="fill__form--label" htmlFor={this.props.generalValue}>
          {this.props.label}
        </label>
        <input
          className={`fill__form--input js-input-${this.props.generalValue} js-input-text js-form`}
          type={this.props.text}
          id={this.props.generalValue}
          name={this.props.generalValue}
          value={this.props.value}
          placeholder={this.props.placeholder}
          pattern={this.props.pattern}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default InputForm;
