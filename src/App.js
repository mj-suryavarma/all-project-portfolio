import React from 'react';
import Home from './home/home';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Projects from './projects/projects';
import Contact from './contact/contact';

function App() {
  return (
    <BrowserRouter>
   <Routes>
      <Route  exact path='/' element={<Home />}/>
      <Route   path='/contact' element={<Contact />}/>
      <Route   path='/projects' element={<Projects />}/>
             
   </Routes>
    </BrowserRouter>
  );
}

export default App;
