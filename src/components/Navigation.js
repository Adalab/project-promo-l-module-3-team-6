import React from 'react';
// import '../stylesheets/App.css';
import IconNavigation from './IconNavigation';

class Navigation extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <nav className="card__preview--nav">
        <ul className="card__socialmedia">
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="phone"
            icon="fas fa-mobile-alt"
            href={this.props.phone}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="email"
            icon="far fa-envelope"
            href={this.props.email}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="linkedin"
            icon="fab fa-linkedin-in"
            href={this.props.linkedin}
          />
          <IconNavigation
            numberPalette={this.props.numberPalette}
            jsClass="github"
            icon="fab fa-github-alt"
            href={this.props.github}
          />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
