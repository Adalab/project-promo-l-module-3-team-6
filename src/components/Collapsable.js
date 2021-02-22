import React from 'react';
import '../stylesheets/layout/_collapsable.scss';
import leaf from '../images/monstera.png';

class Collapsable extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className={`${this.props.classValue}__header js-collapsable-header`}>
        <h2 className={`${this.props.classValue}__header--text`}>
          <i
            className={`${this.props.classValue}__header--text-icon ${this.props.icon}`}
          ></i>
          {this.props.title}
        </h2>
        <img className="up-icon" src={leaf} />
      </div>
    );
  }
}

export default Collapsable;
