import React, { useRef } from 'react';
import {
  Header,
  Skills,
  Projects,
  Experience,
  About,
  Contact,
} from './components';
import { NavBar, NavDots, NavMobile } from './components/Shared';
import { CurrentContext } from './contexts/CurrentContext';

import './App.scss';

const App = () => {
  const active = useRef('home');

  return (
    <div className='app'>
      <CurrentContext.Provider value={{ active }}>
        <NavBar />
        <NavMobile />

        <Header />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />

        <NavDots />
      </CurrentContext.Provider>
    </div>
  );
};

export default App;
