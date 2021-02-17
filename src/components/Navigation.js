import React from 'react';
import '../stylesheets/App.css';
import IconNavigation from './IconNavigation';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="card__preview--nav">
        <ul className="card__socialmedia">
          <IconNavigation
            numberPalette="1"
            jsClass="phone"
            alt="mobile"
            icon="fas fa-mobile-alt"
            href="#"
          />
          <IconNavigation
            numberPalette="1"
            jsClass="email"
            alt="email"
            icon="far fa-envelope"
            href="#"
          />
          <IconNavigation
            numberPalette="1"
            jsClass="linkedin"
            alt="linkedin"
            icon="fab fa-linkedin-in"
            href="#"
          />
          <IconNavigation
            numberPalette="1"
            jsClass="github"
            alt="github"
            icon="fab fa-github-alt"
            href="#"
          />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
