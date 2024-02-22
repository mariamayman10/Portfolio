import {React, BrowserRouter, Route, Routes} from 'react';

import Header from './Components/Header.js';
import MainSection from './Components/MainSection.js';
import Skills from './Components/Skills.js'
import More from './Components/More.js';
import Footer from './Components/Footer.js';


function App() {

  return (
    <div>
        <Header/>
        <MainSection />
        <Skills/>
        <More />
        <Footer />
      
    </div>
  );
}

export default App;
