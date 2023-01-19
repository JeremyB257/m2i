import React from 'react';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={searchTerm}
          placeholder="Happy, Malt, Angry, Now, ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value="RECHERCHE" />
      </form>
    </div>
  );
};

export default Search;
