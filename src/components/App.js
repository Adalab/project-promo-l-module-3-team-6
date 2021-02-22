import React from 'react';
import Header from './Header';
import Fill from './Fill';
//import "../stylesheets/App.css";
import Desing from './Desing';
/* import Palette from './Palette'; */
import CardPreview from './CardPreview';
import Navigation from './Navigation';
import Share from './Share';
import Footer from './Footer';
/* import leaf from '../images/monstera.png'; */
import Collapsable from './Collapsable';
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
              <Desing />

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
