import React from 'react';
import { useState } from 'react';
import Loader from '../components/Loader';
import Results from '../components/Results';
import Search from '../components/Search';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  let urlApi =
    searchTerm.length === 0
      ? 'http://api.punkapi.com/v2/beers?'
      : 'http://api.punkapi.com/v2/beers?beer_name=' + searchTerm;

  const { data, loading, error } = useFetch(urlApi);

  function onSearch(text) {
    setSearchTerm(text);
  }

  return (
    <>
      <Search onClick={onSearch} />
      {loading ? <Loader name="Les bières arrivent !" /> : <Results data={data} />}
      {error && (
        <div className="loader-page">
          <p>Une erreur est survenue, veuillez réessayer plus tard !</p>
        </div>
      )}
    </>
  );
};

export default Home;
