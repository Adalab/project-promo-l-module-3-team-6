import React from "react";
import "../stylesheets/layout/_collapsable.scss";
import leaf from "../images/monstera.png";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const openClassName = this.state.isOpen ? "" : "hidden__container";
    const arrowClassName = this.state.isOpen ? "" : "fa-chevron-up";
    return (
      <>
        <div
          className={`${this.props.classValue}__header js-collapsable-header`}
          id={this.props.id}
          onClick={this.handleClick}
        >
          <h2 className={`${this.props.classValue}__header--text`}>
            <i
              className={`${this.props.classValue}__header--text-icon ${this.props.icon}`}
            ></i>
            {this.props.title}
          </h2>
          <img className={`up-icon ${arrowClassName}`} src={leaf} />
        </div>
        <div className={openClassName}>{this.props.children}</div>
      </>
    );
  }
}

export default Collapsable;
