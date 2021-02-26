import React from "react";
import Fill from "./Fill";
import Desing from "./Desing";
import Share from "./Share";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dropdown: "collapsable--close",
    // };
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    this.setState({ isOpen: !this.state.isOpen });
    // if (key === "design") {
    //   this.setState((changeDropdown) => {
    //     let openDropdown;
    //     if (changeDropdown.dropdown === "collapsable--close") {
    //       openDropdown = "";
    //     } else {
    //       openDropdown = "collapsable--close";
    //     }
    //     return {
    //       dropdown: openDropdown,
    //     };
    //   });
    // }
  }
  render() {
    // const openClassName = this.state.isOpen
    //   ? "collapsable__open"
    //   : "collapsable__close";
    return (
      <section className="app__custom">
        <form method="post" className="app__form js-submit">
          <Desing

          // dropdown={this.state.dropdown}
          // handleClick={this.handleClick}
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
          <Share />
        </form>
      </section>
    );
  }
}

export default Generator;
