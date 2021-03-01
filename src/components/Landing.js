import React from "react";
import Footer from "./Footer";
import "../stylesheets/layout/_landing.scss";
import logo from "../images/logo-treehuggers.png";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <img className="main__logo" src={logo} alt="Logo Equipo" />
          <h1 className="main__title">Crea tu tarjeta de visita</h1>
          <p className="main__text">
            <span className="main__text--span">
              Crea mejores contactos profesionales de
            </span>
            <span className="main__text--span"> forma fácil y cómoda</span>
          </p>
          <section className="main__section">
            <ul className="main__list">
              <li className="main__list--item">
                <i
                  className="far fa-object-ungroup main__list--item-icon"
                  aria-label="Diseña"
                ></i>
                <h5 className="main__list--item-text">Diseña</h5>
              </li>
              <li className="main__list--item">
                <i className="far fa-keyboard main__list--item-icon"></i>
                <h5 className="main__list--item-text">Rellena</h5>
              </li>
              <li className="main__list--item">
                <i className="fas fa-share-alt main__list--item-icon"></i>
                <h5 className="main__list--item-text">Comparte</h5>
              </li>
            </ul>
          </section>
          <Link
            to="/Generator"
            className="main__button"
            title="Ir a crear tu tarjeta"
          >
            Comenzar
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
