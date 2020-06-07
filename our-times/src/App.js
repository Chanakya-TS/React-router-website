import React from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />  
        <Route exact path='/About' component={About} />  
        <Route exact path='/Contact' component={Contact} />  
      </div>
    </BrowserRouter>
  );
}

export default App;
