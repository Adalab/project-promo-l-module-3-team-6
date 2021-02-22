import React from "react";
import Header from "./Header";
import Fill from "./Fill";
import Palette from "./Palette";
import CardPreview from "./CardPreview";
import Navigation from "./Navigation";
import Share from "./Share";
import Footer from "./Footer";

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
            <button className="card__reset js-reset" type="reset">
              <i className="far fa-trash-alt card__reset--icon"></i>
              Reset
            </button>
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
                <Fill
                  required="Todos los campos son obligatorios"
                  labelname="Nombre Completo"
                  labeljob="Puesto"
                  labelImage="Imagen de perfil"
                  labelbtnImage="Añadir imagen"
                  labelemail="Email"
                  labeltel="Teléfono"
                  labellinkedin="Linkedin"
                  labelgit="Github"
                />
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
