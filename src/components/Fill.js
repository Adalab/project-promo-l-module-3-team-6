import React from 'react';
import '../stylesheets/layout/_fill.scss';
import InputForm from './InputForm';
import InputImage from './InputImage';
import Collapsable from './Collapsable';

class Fill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="fill js-collapsable-container collapsable--close">
        <Collapsable title="Rellena" classValue="fill" icon="far fa-keyboard" />
        <div className="fill__form hidden__container">
          <h6 className="fill__form--notice">{this.props.required}</h6>
          <InputForm
            label={this.props.labelname}
            generalValue="name"
            type="text"
            placeholder="Ej: Tree Huggers"
            handleChange={this.props.handleChange}
          />
          <InputForm
            label={this.props.labeljob}
            generalValue="job"
            type="text"
            placeholder="Ej: Front-end developers"
            handleChange={this.props.handleChange}
          />
          <InputImage
            labelbtnImage="Añadir imagen"
            label={this.props.labelImage}
            generalValue="image"
            type="file"
          />
          <InputForm
            label={this.props.labelemail}
            generalValue="email"
            type="email"
            placeholder="Ej: treehuggers@gmail.com"
            handleChange={this.props.handleChange}
          />
          <InputForm
            label={this.props.labeltel}
            generalValue="phone"
            type="tel"
            placeholder="Ej: 123456789"
            pattern="[0-9]{9}"
            handleChange={this.props.handleChange}
          />
          <InputForm
            label={this.props.labellinkedin}
            generalValue="linkedin"
            type="text"
            placeholder="Ej: linkedin.com/in/treehuggers"
            handleChange={this.props.handleChange}
          />
          <InputForm
            label={this.props.labelgit}
            generalValue="github"
            type="text"
            placeholder="Ej: @treeHuggers"
            handleChange={this.props.handleChange}
          />
        </div>
      </fieldset>
    );
  }
}
export default Fill;
