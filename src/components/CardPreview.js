import React from "react";
//import "../stylesheets/pages/App.scss";

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className={`card__preview--text js-palette${this.props.numberPalette} js-palette resetColorPalette`}
        >
          <h3 className="card__preview--text-name js-preview-name previewCardName">
            {this.props.name}
          </h3>
          <h4 className="card__preview--text-job js-preview-job">
            {this.props.job}
          </h4>
        </div>
        <div className="card__preview--photo js__profile-image"></div>
      </>
    );
  }
}

export default CardPreview;
