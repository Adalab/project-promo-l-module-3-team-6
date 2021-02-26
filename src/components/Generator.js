import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Collapsable from './Collapsable';
import Header from './Header';
import Desing from './Desing';
import Card from './Card';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      design: false,
      fill: false,
      share: false,
      numberPaletteActivated: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    };
    this.changeCollapsable = this.changeCollapsable.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeCollapsable(nameCollapsable, prevOpen) {
    this.setState({ [nameCollapsable]: !prevOpen });
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
              <fieldset className={`design js-collapsable-container"`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Diseña"
                  name="design"
                  classValue="design"
                  icon="far fa-object-ungroup"
                  openClassName={this.state.design}
                >
                  <Desing
                    numberPaletteActivated={this.state.numberPaletteActivated}
                    handleChange={this.handleChange}
                  />
                </Collapsable>{' '}
              </fieldset>
              <fieldset className={`fill js-collapsable-container`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Rellena"
                  name="fill"
                  classValue="fill"
                  icon="far fa-keyboard"
                  openClassName={this.state.fill}
                >
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
                </Collapsable>
              </fieldset>
              <fieldset className={`share js-collapsable-container"`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Comparte"
                  name="share"
                  classValue="share"
                  icon="fas fa-share-alt"
                  openClassName={this.state.share}
                >
                  <Share />
                </Collapsable>
              </fieldset>
            </form>
          </section>
        </main>
      </>
    );
  }
}

export default Generator;
