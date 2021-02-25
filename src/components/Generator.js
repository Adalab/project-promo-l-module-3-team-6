import React from 'react';
import Header from './Header';
import Fill from './Fill';
import Desing from './Desing';
import Card from './Card';
import Share from './Share';
import Footer from './Footer';

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
          <Card />
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
