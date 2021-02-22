import React from 'react';
import '../stylesheets/components/_reset-btn.scss';

class Reset extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="card__reset js-reset" type="reset">
        <i className="far fa-trash-alt card__reset--icon"></i>
        Reset
      </button>
    );
  }
}

export default Reset;
