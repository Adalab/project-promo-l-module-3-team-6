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
    this.state = {
      numberPaletteActivated: '1',
      name: 'Nombre Completo',
      job: 'Puesto',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nameInput, valueInput) {
    this.setState({ [nameInput]: valueInput });
  }

  render() {
    return (
      <>
        <Header />
        <main className="app">
          <Card
            numberPaletteActivated={this.state.numberPaletteActivated}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
          />
          <section className="app__custom">
            <form method="post" className="app__form js-submit">
              <Desing
                numberPaletteActivated={this.state.numberPaletteActivated}
                handleChange={this.handleChange}
              />
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
                handleChange={this.handleChange}
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
