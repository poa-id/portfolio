import React from 'react';
import { About , Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <div id="circle"></div> 
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;