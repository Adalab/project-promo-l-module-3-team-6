import React from "react";
import Header from "./Header";
import Fill from "./Fill";
import Desing from "./Desing";
import CardPreview from "./CardPreview";
import Navigation from "./Navigation";
import Share from "./Share";
import Footer from "./Footer";
import Reset from "./Reset";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({});
  }
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Generator;
