import React, { useState, createContext, Fragment } from 'react';

import { Experiences } from './components/Experiences';
import { BasicData } from './components/BasicData';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Skills } from './components/Skills';
import { Blogs } from './components/Blogs';

import './stylesheets/variables.scss';
import './App.scss';


const App = () => {

  const[theme, setTheme] = useState('example1');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'example2' ? 'example1' : 'example2'))
  };
  
    let tema1 = 
    <>
        <BasicData tema={theme} />
        <div className="row">
          <div className="column">
            <Skills name='Front-End' tema={theme} />
            <Hobbies />
          </div>
          <div className="column">
            <Blogs tema={theme} />
            <Experiences tema={theme} />
          </div>
        </div>
        <Projects  tema={theme} />
    </>

    let tema2 = 
    <>
        <div className="row">
          <div className="column">
            <BasicData tema={theme} />
            <Experiences tema={theme} />
            <Hobbies />
          </div>
          <div className="column">
            <Skills name='Front-End' tema={theme} />
            <Projects tema={theme} />
            <Blogs tema={theme} />
          </div>
        </div>
    </>

  return (
    <div className={`App ${theme}`}>
      <div className='App-input'>
        <input type='checkbox' id='toggle' onChange={toggleTheme} />
        <label htmlFor="toggle" className='button'></label>
          {/* {theme==='example1' ? 'Ejemplo2' : 'Ejemplo1'} */}
      </div>
      {theme === 'example1' ? tema1 : tema2}
      <footer>
        Created by <a href="https://devchallenges.io/portfolio/juankrlos861122">Juankrlos861122</a> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
