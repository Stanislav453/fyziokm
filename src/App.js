import React, { useState } from 'react';
import './App.scss';
import MyHeader from './components/myHeader/myHeader';
import AboutMe from './components/AboutMe/AboutMe';
import Cennik from './components/Cennik/Cennik';
import Kurzy from './components/Kurzy/Kurzy';
import Sluzby from './components/Sluzby/Sluzby';
import Method from './components/Method/Method';
import Kontakt from './components/Kontakt/Kontakt';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {

  return (
    <section  >
      <header>
        <MyHeader />
      </header>
      <main>
        <div className='main-container'>
          <AboutMe />
          <Cennik />
          <Kurzy />
          <Sluzby />
          <Method />
          <Kontakt />
          <ScrollTop />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
