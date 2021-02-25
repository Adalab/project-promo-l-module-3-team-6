import React from "react";
import Fill from "./Fill";
import Desing from "./Desing";
import Share from "./Share";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      design: "design",
      fill: "fill",
      share: "share",
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
            <Desing handleClick={this.handleClick} />
          </fieldset>
          <fieldset
            className={`fill js-collapsable-container" ${openClassName}`}
            id="fill"
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
              handleClick={this.handleClick}
            />
          </fieldset>
          <fieldset
            className={`share js-collapsable-container" ${openClassName}`}
            id="share"
          >
            <Share handleClick={this.handleClick} />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Generator;
