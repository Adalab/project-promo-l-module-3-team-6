import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Collapsable from './Collapsable';
import Header from './Header';
import Desing from './Desing';
import Card from './Card';
import Footer from './Footer';
import ls from '../services/localStorage';
import postDataToApi from '../services/postDataToApi';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsable: {
        design: true,
        fill: false,
        share: false,
      },
      numberPaletteActivated: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      avatar: '',
      result: '',
      linkShare: '',
      urlTwitter: '',
    };
    this.changeCollapsable = this.changeCollapsable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  componentDidMount() {
    const localStorageData = ls.get('data');
    if (localStorageData) {
      this.setState(localStorageData);
    }
  }

  componentDidUpdate() {
    const { result, linkShare, urlTwitter, ...dataToSave } = this.state;
    ls.set('data', dataToSave);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  changeCollapsable(nameCollapsable, prevOpen) {
    const collapsables = ['design', 'fill', 'share'];
    const myCollapsableChanged = collapsables.filter(
      (item) => item !== nameCollapsable
    );
    this.setState((prevState) => ({
      collapsable: {
        ...prevState.collapsable,
        [nameCollapsable]: !prevOpen,
      },
    }));

    for (let colap of myCollapsableChanged) {
      this.setState((prevState) => ({
        collapsable: {
          ...prevState.collapsable,
          [colap]: false,
        },
      }));
    }
  }

  handleChange(nameInput, valueInput) {
    this.setState({ [nameInput]: valueInput });
  }

  handleReset() {
    this.setState({
      numberPaletteActivated: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      avatar: '',
      result: '',
      linkShare: '',
      urlTwitter: '',
    });
  }

  handleShare() {
    const dataToSend = {
      photo: this.state.avatar,
      palette: this.state.numberPaletteActivated,
      name: this.state.name,
      job: this.state.job,
      email: this.state.email,
      phone: this.state.phone,
      linkedin: this.state.linkedin,
      github: this.state.github,
    };

    postDataToApi(dataToSend).then((data) => {
      if (data.success === true) {
        this.setState({ result: data.message });
        this.setState({ linkShare: data.cardURL });
        this.setState({ urlTwitter: data.cardURL });
      } else {
        this.setState({
          result: data.message,
        });
        this.setState({ linkShare: '' });
        this.setState({ urlTwitter: '' });
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="app">
          <Card
            numberPaletteActivated={this.state.numberPaletteActivated}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            handleReset={this.handleReset}
            avatar={this.state.avatar}
          />
          <section className="app__custom">
            <form method="post" className="app__form js-submit">
              <fieldset className={`design js-collapsable-container`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Diseña"
                  name="design"
                  classValue="design"
                  icon="far fa-object-ungroup"
                  openClassName={this.state.collapsable.design}
                  /* this.state.collapsable.design */
                >
                  <Desing
                    numberPaletteActivated={this.state.numberPaletteActivated}
                    handleChange={this.handleChange}
                  />
                </Collapsable>{' '}
              </fieldset>
              <fieldset className={`fill js-collapsable-container`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Rellena"
                  name="fill"
                  classValue="fill"
                  icon="far fa-keyboard"
                  openClassName={this.state.collapsable.fill}
                >
                  <Fill
                    required="Todos los campos son obligatorios"
                    value={this.state}
                    labelname="Nombre Completo"
                    labeljob="Puesto"
                    labelImage="Imagen de perfil"
                    labelbtnImage="Añadir imagen"
                    labelemail="Email"
                    labeltel="Teléfono"
                    labellinkedin="Linkedin"
                    labelgit="Github"
                    handleChange={this.handleChange}
                    avatar={this.state.avatar}
                    updateAvatar={this.updateAvatar}
                  />
                </Collapsable>
              </fieldset>
              <fieldset className={`share js-collapsable-container`}>
                <Collapsable
                  handleClick={this.changeCollapsable}
                  title="Comparte"
                  name="share"
                  classValue="share"
                  icon="fas fa-share-alt"
                  openClassName={this.state.collapsable.share}
                >
                  <Share
                    handleShare={this.handleShare}
                    linkShare={this.state.linkShare}
                    result={this.state.result}
                    urlTwitter={this.state.urlTwitter}
                  />
                </Collapsable>
              </fieldset>
            </form>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Generator;
