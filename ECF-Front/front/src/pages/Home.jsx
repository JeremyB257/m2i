import React from 'react';
import EatToHome from '../components/Home/EatToHome';
import Service from '../components/Home/Service';
import Since from '../components/Home/Since';
import WhyUs from '../components/Home/WhyUs';

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
