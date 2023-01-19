import React from 'react';
import Loader from '../components/Loader';
import Results from '../components/Results';
import Search from '../components/Search';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('http://api.punkapi.com/v2/beers?page=1');

  function onSearch(text) {
    console.log('hello ' + text);
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
