  import React from 'react';
  import Navbar from './components/Navbar';
  import Hero from './components/Hero';
  import About from './components/About';
  import Portfolio from './components/Portfolio';
  import Contact from './components/Contact';
  import Footer from './components/Footer';
  import useAOS from './hooks/useAOS';

  function App() {

    useAOS();


    return (
      <>
        <Hero />
        <Navbar />
        <About />
        <Portfolio />
        <Contact />
        <Footer />


      </>
    );
  }

  export default App;
