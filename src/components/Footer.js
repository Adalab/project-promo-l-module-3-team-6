import React from 'react';
import '../stylesheets/layout/_footer.scss';
import logo from '../images/logo-adalab.png';

class Footer extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <small className="footer__copy">Tree huggers cards &copy; 2021</small>
          <a href="https://adalab.es/" target="_blank" alt="">
            <img
              className="footer__logo"
              src={logo}
              alt="Logo Adalab"
              title="Ir a Adalab"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
