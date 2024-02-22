import {React, BrowserRouter, Route, Routes} from 'react';

import MainSection from './Components/MainSection.js';
import Skills from './Components/Skills.js'
import More from './Components/More.js';
import Footer from './Components/Footer.js';


function App() {

  return (
    <div>
        <MainSection />
        <Skills/>
        <More />
        <Footer />
      
    </div>
  );
}

export default App;
