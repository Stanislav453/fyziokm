import React from 'react';
import './App.scss';
import MyHeader from './components/myHeader/myHeader';
import AboutMe from './components/AboutMe/AboutMe';
import Cennik from './components/Cennik/Cennik';
import Kurzy from './components/Kurzy/Kurzy';

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
        </div>
      </main>
    </section>
  );
}

export default App;
