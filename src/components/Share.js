import React from 'react';
/* import '../stylesheets/App.css'; */
import logo from '../images/logo-treehuggers.png';

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="share js-collapsable-container collapsable--close">
        <div className="share__header js-collapsable-header">
          <h2 className="share__header--title">
            <i className="fas fa-share-alt share__header--icon js-arrow-share js-arrow-up"></i>
            Comparte{' '}
          </h2>
          <img className="up-icon" src="./assets/images/monstera.png" />
        </div>

        <div className="share__create hidden__container">
          <button className="share__create--button js-create-btn">
            <i className="far fa-address-card share__button--icon"></i>
            Crear tarjeta
          </button>
        </div>

        <div className="share__result js-twitter-share js-share-hidden">
          <h3 className="share__result--title">La tarjeta ha sido creada:</h3>
          <p className="share__result--text js-card-link"></p>

          <button
            className="share__result--twitter js-twitter-btn"
            type="button"
          >
            <i className="fab fa-twitter share__result--twitter_icon"></i>
            <a
              href="#"
              className="share__result--twitterlink js-twitter-link"
              data-show-count="false"
              target="_blank"
            >
              Compartir en twitter
            </a>
          </button>
        </div>
      </fieldset>
    );
  }
}

export default Share;
