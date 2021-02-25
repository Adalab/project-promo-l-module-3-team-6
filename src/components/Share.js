import React from "react";
//import "../stylesheets/pages/App.scss";
import "../stylesheets/layout/_share.scss";
import leaf from "../images/monstera.png";
import Collapsable from "./Collapsable";

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="share js-collapsable-container collapsable--close">
        <Collapsable
          title="Comparte"
          classValue="share"
          icon="fas fa-share-alt"
        />

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
