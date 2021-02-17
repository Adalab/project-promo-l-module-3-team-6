import React from "react";
import Header from "./Header";
import Fill from "./Fill";
import "../stylesheets/App.css";
import Palette from "./Palette";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="app">
          <section className="app__card">
            <button className="card__reset js-reset" type="reset">
              <i className="far fa-trash-alt card__reset--icon"></i>
              Reset
            </button>
            <div className="card__preview js-card">
              <div className="card__preview--text js-palette1 js-palette resetColorPalette">
                <h3 className="card__preview--text-name js-preview-name previewCardName">
                  Nombre Completo
                </h3>
                <h4 className="card__preview--text-job js-preview-job">
                  Puesto
                </h4>
              </div>
              <div className="card__preview--photo js__profile-image"></div>
              <nav className="card__preview--nav">
                <ul className="card__socialmedia">
                  <li className="card__socialmedia--item js-border-palette1-color3 js-phone pale__icon">
                    <a
                      target="_blank"
                      href="#"
                      alt="mobile"
                      className="js-preview-phone"
                    >
                      <i className="card__socialmedia--link fas fa-mobile-alt js-icon-palette1-color2"></i>
                    </a>
                  </li>
                  <li className="card__socialmedia--item js-border-palette1-color3 opacity js-email">
                    <a
                      target="_blank"
                      href="mailto:"
                      alt="email"
                      className="js-preview-email"
                    >
                      <i className="card__socialmedia--link far fa-envelope js-icon-palette1-color2"></i>
                    </a>
                  </li>
                  <li className="card__socialmedia--item js-border-palette1-color3 opacity js-linkedin pale__icon">
                    <a
                      target="_blank"
                      href="#"
                      alt="linkedin"
                      className="js-preview-linkedin"
                    >
                      <i className="card__socialmedia--link fab fa-linkedin-in js-icon-palette1-color2"></i>
                    </a>
                  </li>
                  <li className="card__socialmedia--item js-border-palette1-color3 opacity js-github pale__icon">
                    <a
                      target="_blank"
                      href="#"
                      alt="github"
                      className="js-preview-github"
                    >
                      <i className="card__socialmedia--link fab fa-github-alt js-icon-palette1-color2"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          <section className="app__custom">
            <form method="post" className="app__form js-submit">
              <fieldset className="design js-collapsable-container collapsable--close">
                <div className="design__header js-collapsable-header">
                  <h2 className="design__header--text">
                    <i className="design__header--text-icon far fa-object-ungroup"></i>
                    Diseña
                  </h2>
                  <img className="up-icon" src="./assets/images/monstera.png" />
                </div>
                <div className="design__colors hidden__container">
                  <h5 className="design__colors--subtitle">Colores</h5>
                  <div className="design__colors--palettes">
                    <Palette numberPalette="1" />
                    <Palette numberPalette="2" />
                    <Palette numberPalette="3" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="fill js-collapsable-container">
                <div className="fill__header js-collapsable-header">
                  <h2 className="fill__header--title">
                    <i className="far fa-keyboard fill__header--icon"></i>
                    Rellena
                  </h2>
                  <img className="up-icon" src="./assets/images/monstera.png" />
                </div>
                <Fill />
              </fieldset>

              <fieldset className="share js-collapsable-container collapsable--close">
                <div className="share__header js-collapsable-header">
                  <h2 className="share__header--title">
                    <i className="fas fa-share-alt share__header--icon js-arrow-share js-arrow-up"></i>
                    Comparte
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
                  <h3 className="share__result--title">
                    La tarjeta ha sido creada:
                  </h3>
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
            </form>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__container">
            <small className="footer__copy">
              Tree huggers cards &copy; 2021
            </small>
            <a href="https://adalab.es/" target="_blank" alt="">
              <img
                className="footer__logo"
                src="./assets/images/logo-adalab.png"
                alt="Logo Adalab"
                title="Ir a Adalab"
              />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
