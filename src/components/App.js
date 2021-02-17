import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__container">
            <a href="./index.html" title="home">
              <img
                className="header__container--logo"
                src="./assets/images/logo-treehuggers.png"
                alt="Logo Awesome profile-cards"
              />
            </a>
          </div>
        </header>

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
                    <div className="palette palette1">
                      <label className="cursor" for="palette1">
                        <input
                          id="palette1"
                          type="radio"
                          value="1"
                          name="palette"
                          className="js-palette cursor"
                          checked
                        />
                        <div className="palette1__color1 color-box">1</div>
                        <div className="palette1__color2 color-box">2</div>
                        <div className="palette1__color3 color-box">3</div>
                      </label>
                    </div>
                    <div className="palette palette2">
                      <label className="cursor" for="palette2">
                        <input
                          id="palette2"
                          type="radio"
                          value="2"
                          name="palette"
                          className="js-palette cursor"
                        />
                        <span className="palette2__color1 color-box">1</span>
                        <span className="palette2__color2 color-box">2</span>
                        <span className="palette2__color3 color-box">3</span>
                      </label>
                    </div>
                    <div className="palette palette3">
                      <label className="cursor" for="palette3">
                        <input
                          id="palette3"
                          type="radio"
                          value="3"
                          name="palette"
                          className="js-palette cursor"
                        />
                        <span className="palette3__color1 color-box">1</span>
                        <span className="palette3__color2 color-box">2</span>
                        <span className="palette3__color3 color-box">3</span>
                      </label>
                    </div>
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
                <div className="fill__form hidden__container">
                  <h6 className="fill__form--notice">
                    Todos los campos son obligatorios
                  </h6>
                  <label className="fill__form--label userName" for="name">
                    Nombre completo
                  </label>
                  <input
                    className="fill__form--input js-input-name js-input-text js-form"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej: Tree Huggers"
                    required
                  />
                  <label className="fill__form--label" for="job">
                    Puesto
                  </label>
                  <input
                    className="fill__form--input js-input-job js-input-text js-form"
                    type="text"
                    id="job"
                    name="job"
                    placeholder="Ej: Front-end developers"
                    required
                  />
                  <label className="fill__form--label" for="image">
                    Imagen de perfil
                  </label>
                  <div className="fill__form--image">
                    <label className="fill__form--image--button js__profile-trigger">
                      Añadir imagen
                    </label>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="fill__form--image--input js__profile-upload-btn"
                    />
                    <div className="fill__form--image--preview js__profile-preview js-form"></div>
                  </div>
                  <label className="fill__form--label" for="email">
                    Email
                  </label>
                  <input
                    className="fill__form--input js-input-email js-input-text js-form"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ej: treehuggers@gmail.com"
                    required
                  />
                  <label className="fill__form--label" for="phone">
                    Teléfono
                  </label>
                  <input
                    className="fill__form--input js-input-phone js-input-text js-form"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ej: 123456789"
                    required
                  />
                  <label className="fill__form--label" for="linkedin">
                    Linkedin
                  </label>
                  <input
                    className="fill__form--input js-input-linkedin js-input-text js-form"
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="Ej: linkedin.com/in/treehuggers"
                    required
                  />
                  <label className="fill__form--label" for="github">
                    Github
                  </label>
                  <input
                    className="fill__form--input js-input-github js-input-text js-form"
                    type="text"
                    id="github"
                    name="github"
                    placeholder="Ej: @treeHuggers"
                    required
                  />
                </div>
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
