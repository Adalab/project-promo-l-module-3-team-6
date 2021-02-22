import React from 'react';
// import '../stylesheets/App.css';

class IconNavigation extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <li
        className={`card__socialmedia--item js-border-palette${this.props.numberPalette}-color3 js-${this.props.jsClass} pale__icon`}
      >
        <a
          target="_blank"
          href={this.props.href}
          alt={this.props.jsClass}
          className={`js-preview-${this.props.jsClass}`}
          rel="noreferrer"
        >
          <i
            className={`card__socialmedia--link ${this.props.icon} js-icon-palette${this.props.numberPalette}-color2`}
          ></i>
        </a>
      </li>
    );
  }
}

export default IconNavigation;
