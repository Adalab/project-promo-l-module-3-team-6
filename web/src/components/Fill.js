import React from "react";
import "../stylesheets/layout/_fill.scss";
import InputForm from "./InputForm";
import InputImage from "./InputImage";

class Fill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fill__form">
        <h6 className="fill__form--notice">{this.props.required}</h6>
        <InputForm
          label={this.props.labelname}
          generalValue="name"
          type="text"
          placeholder="Ej: Tree Huggers"
          value={this.props.value.name}
          handleChange={this.props.handleChange}
        />
        <InputForm
          label={this.props.labeljob}
          generalValue="job"
          type="text"
          placeholder="Ej: Front-end developers"
          value={this.props.value.job}
          handleChange={this.props.handleChange}
        />
        <InputImage
          labelbtnImage="Añadir imagen"
          label={this.props.labelImage}
          generalValue="image"
          type="file"
          avatar={this.props.avatar}
          updateAvatar={this.props.updateAvatar}
        />
        <InputForm
          label={this.props.labelemail}
          generalValue="email"
          type="email"
          placeholder="Ej: treehuggers@gmail.com"
          value={this.props.value.email}
          handleChange={this.props.handleChange}
        />
        <InputForm
          label={this.props.labeltel}
          generalValue="phone"
          type="tel"
          placeholder="Ej: 123456789"
          pattern="[0-9]{9}"
          value={this.props.value.phone}
          handleChange={this.props.handleChange}
        />
        <InputForm
          label={this.props.labellinkedin}
          generalValue="linkedin"
          type="text"
          placeholder="Ej: linkedin.com/in/treehuggers"
          value={this.props.value.linkedin}
          handleChange={this.props.handleChange}
        />
        <InputForm
          label={this.props.labelgit}
          generalValue="github"
          type="text"
          placeholder="Ej: @treeHuggers"
          value={this.props.value.github}
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Fill;
