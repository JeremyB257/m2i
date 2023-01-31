import React from 'react';
import EatToHome from '../components/EatToHome';
import Service from '../components/Service';
import Since from '../components/Since';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <main>
      <EatToHome />
      <Since />
      <Service />
      <WhyUs />
    </main>
  );
};

export default Home;
