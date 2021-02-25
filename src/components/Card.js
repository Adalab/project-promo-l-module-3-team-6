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
          <CardPreview
            name={this.props.name}
            job={this.props.job}
            numberPalette={this.props.numberPaletteActivated}
          />
          <Navigation
            numberPalette={this.props.numberPaletteActivated}
            phone={this.props.phone}
            email={this.props.email}
            linkedin={this.props.linkedin}
            github={this.props.github}
          />
        </div>
      </section>
    );
  }
}

export default Card;
