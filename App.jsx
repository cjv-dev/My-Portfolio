import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Hero from './components/Hero';
import About from './components/About';
import Tool from './components/Tool';
import Offer from './components/Offer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Details />
      <About />
      <Tool />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
