import React from "react";
import Fill from "./Fill";
import Desing from "./Desing";
import Share from "./Share";
import Collapsable from "./Collapsable";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const openClassName = this.state.isOpen ? "" : "collapsable--close";
    return (
      <section className="app__custom">
        <form method="post" className="app__form js-submit">
          <fieldset
            className={`design js-collapsable-container" ${openClassName}`}
            id="design"
          >
            <Collapsable
              handleClick={this.handleClick}
              title="Diseña"
              classValue="design"
              icon="far fa-object-ungroup"
            />
            <Desing />
          </fieldset>
          <fieldset
            className={`fill js-collapsable-container" ${openClassName}`}
            id="fill"
          >
            <Collapsable
              handleClick={this.handleClick}
              title="Rellena"
              classValue="fill"
              icon="far fa-keyboard"
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
            />
          </fieldset>
          <fieldset
            className={`share js-collapsable-container" ${openClassName}`}
            id="share"
          >
            {" "}
            <Collapsable
              handleClick={this.handleClick}
              title="Comparte"
              classValue="share"
              icon="fas fa-share-alt"
            />
            <Share />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Generator;
