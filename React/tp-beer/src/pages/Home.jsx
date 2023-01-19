import React from 'react';
import Loader from '../components/Loader';
import Results from '../components/Results';
import Search from '../components/Search';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('http://api.punkapi.com/v2/beers?page=1');

  return (
    <>
      <Search />
      {loading ? <Loader name="Les bières arrivent !" /> : <Results data={data} />}
    </>
  );
};

export default Home;
