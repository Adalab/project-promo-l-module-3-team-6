import React from "react";
import Fill from "./Fill";
import Desing from "./Desing";
import Share from "./Share";
import Collapsable from "./Collapsable";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      design: false,
      fill: false,
      share: false,
    };
    this.changeCollapsable = this.changeCollapsable.bind(this);
  }

  changeCollapsable(nameCollapsable, prevOpen) {
    this.setState({ [nameCollapsable]: !prevOpen });
  }

  render() {
    return (
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
              <Desing />
            </Collapsable>
          </fieldset>
          <fieldset className={`fill js-collapsable-container"`}>
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
    );
  }
}

export default Generator;
