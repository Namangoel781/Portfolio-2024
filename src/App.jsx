import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Body from "./Components/Content/Body";
import Language from './Components/Language/Language';
import Work from './Components/Work/Work';
import Social from './Components/Social/Social'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Body/>
      <Language/>
      <Work/>
      <Social/>
    </div>
  )
}

export default App
 