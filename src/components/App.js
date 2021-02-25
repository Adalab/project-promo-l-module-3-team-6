import React from "react";
import Header from "./Header";
import CardPreview from "./CardPreview";
import Navigation from "./Navigation";
import Generator from "./Generator";
import Footer from "./Footer";
import Reset from "./Reset";

class App extends React.Component {
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
          <Generator />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
