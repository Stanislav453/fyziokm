import React from 'react';
import './App.scss';
import MyHeader from './components/myHeader/myHeader';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <section  >
      <header>
        <MyHeader />
      </header>
      <main>
        <div className='main-container'>
          <AboutMe />
        </div>
      </main>
    </section>
  );
}

export default App;
