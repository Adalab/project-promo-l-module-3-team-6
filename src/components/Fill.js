import React from "react";
import "../stylesheets/App.css";

class Fill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fill__form hidden__container">
        <h6 className="fill__form--notice">{this.props.required}</h6>
        <label className="fill__form--label userName" for="name">
          {this.props.name}
        </label>
        <input
          className="fill__form--input js-input-name js-input-text js-form"
          type="text"
          id="name"
          name="name"
          placeholder="Ej: Tree Huggers"
          required
        />
        <label className="fill__form--label" for="job">
          {this.props.job}
        </label>
        <input
          className="fill__form--input js-input-job js-input-text js-form"
          type="text"
          id="job"
          name="job"
          placeholder="Ej: Front-end developers"
          required
        />
        <label className="fill__form--label" for="image">
          {this.props.image}
        </label>
        <div className="fill__form--image">
          <label className="fill__form--image--button js__profile-trigger">
            {this.props.btnImage}
          </label>
          <input
            type="file"
            name=""
            id=""
            className="fill__form--image--input js__profile-upload-btn"
          />
          <div className="fill__form--image--preview js__profile-preview js-form"></div>
        </div>
        <label className="fill__form--label" for="email">
          {this.props.mail}
        </label>
        <input
          className="fill__form--input js-input-email js-input-text js-form"
          type="email"
          id="email"
          name="email"
          placeholder="Ej: treehuggers@gmail.com"
          required
        />
        <label className="fill__form--label" for="phone">
          {this.props.tel}
        </label>
        <input
          className="fill__form--input js-input-phone js-input-text js-form"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Ej: 123456789"
          required
        />
        <label className="fill__form--label" for="linkedin">
          {this.props.linkedin}
        </label>
        <input
          className="fill__form--input js-input-linkedin js-input-text js-form"
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="Ej: linkedin.com/in/treehuggers"
          required
        />
        <label className="fill__form--label" for="github">
          {this.props.git}
        </label>
        <input
          className="fill__form--input js-input-github js-input-text js-form"
          type="text"
          id="github"
          name="github"
          placeholder="Ej: @treeHuggers"
          required
        />
      </div>
    );
  }
}
export default Fill;
