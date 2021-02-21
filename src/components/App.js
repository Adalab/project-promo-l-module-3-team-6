import React from 'react';
import Header from './Header';
/* import '../stylesheets/App.css'; */
import Palette from './Palette';
import CardPreview from './CardPreview';
import Navigation from './Navigation';
import Share from './Share';
import Footer from './Footer';
import Reset from './Reset';

class App extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className="App">
        <Header />

        <main className="app">
          <section className="app__card">
            <Reset />
            <div className="card__preview js-card">
              <CardPreview
                name="Nombre Completo"
                job="Puesto"
                numberPalette="1"
              />
              <Navigation numberPalette="1" />
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
              <Share />
            </form>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
