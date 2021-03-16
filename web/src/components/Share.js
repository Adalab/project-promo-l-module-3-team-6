import React from 'react';
import '../stylesheets/layout/_share.scss';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleShareButton = this.handleShareButton.bind(this);
  }

  handleShareButton() {
    this.props.handleShare();
  }

  renderTwitterButtonCondition = () => {
    if (this.props.urlTwitter.length !== 0) {
      return (
        <button className="share__result--twitter js-twitter-btn" type="button">
          <i className="fab fa-twitter share__result--twitter_icon"></i>
          <a
            href={
              'https://twitter.com/intent/tweet?url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20' +
              this.props.urlTwitter
            }
            className="share__result--twitterlink js-twitter-link"
            data-show-count="false"
            target="_blank"
          >
            Compartir en twitter
          </a>
        </button>
      );
    } else {
    }
  };

  render() {
    return (
      <>
        <div className="share__create">
          <button
            className="share__create--button js-create-btn"
            onClick={this.handleShareButton}
            type="button"
          >
            <i className="far fa-address-card share__button--icon"></i>
            Crear tarjeta
          </button>
        </div>

        <div className="share__result js-twitter-share js-share-hidden">
          <h3 className="share__result--title">{this.props.result}</h3>
          <p className="share__result--text js-card-link">
            <a
              href={this.props.linkShare}
              className="jsUrl urlcard"
              target="_blank"
            >
              {this.props.linkShare}
            </a>
          </p>
          {this.renderTwitterButtonCondition()}
        </div>
      </>
    );
  }
}

export default Share;
