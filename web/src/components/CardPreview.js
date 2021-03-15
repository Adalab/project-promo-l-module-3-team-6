import React from 'react';
import '../stylesheets/layout/_card-preview.scss';
import defaultAvatar from '../images/animals.gif';
import PropTypes from 'prop-types';

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const avatar = this.props.avatar === '' ? defaultAvatar : this.props.avatar;
    return (
      <>
        <div
          className={`card__preview--text js-palette${this.props.numberPalette} js-palette resetColorPalette`}
        >
          <h3 className="card__preview--text-name js-preview-name previewCardName">
            {this.props.name || 'Nombre Completo'}
          </h3>
          <h4 className="card__preview--text-job js-preview-job">
            {this.props.job || 'Puesto'}
          </h4>
        </div>
        <div
          className="card__preview--photo js__profile-image"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </>
    );
  }
}

CardPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default CardPreview;
