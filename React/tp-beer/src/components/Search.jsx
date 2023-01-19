import React from 'react';
import { useState } from 'react';

const Search = ({ onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClickSearch = (e) => {
    e.preventDefault();
    onClick(searchTerm);
    setSearchTerm('');
  };
  return (
    <div className="search">
      <form onSubmit={handleClickSearch}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Happy, Malt, Angry, Now, ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value="RECHERCHE" disabled={searchTerm.length == 0} />
      </form>
    </div>
  );
};

export default Search;
