import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BodyView from '../components/BodyView';
import BeliefStatement from '../components/BeliefStatement';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App bg-mint-green">
      <Header />
      <Hero />
      <Features />
      <BodyView />
      <BeliefStatement />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;