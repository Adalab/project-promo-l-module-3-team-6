import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import Navigation from './Navigation';
import Generator from './Generator';
import Footer from './Footer';
import Reset from './Reset';

class App extends React.Component {
  render() {
    return (
      <>
        <Generator />

        <Footer />
      </>
    );
  }
}
export default App;
