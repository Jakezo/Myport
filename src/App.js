import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';


library.add(faPhone, faBirthdayCake, faEnvelope, faStar, faBars, faTimes, faArrowLeft, faArrowRight)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
