import React from 'react';
import CardPreview from './CardPreview';
import Navigation from './Navigation';
import Reset from './Reset';
class Card extends React.Component {
  render() {
    return (
      <section className="app__card">
        <Reset />
        <div className="card__preview js-card">
          <CardPreview name="Nombre Completo" job="Puesto" numberPalette="1" />
          <Navigation numberPalette="1" />
        </div>
      </section>
    );
  }
}

export default Card;
