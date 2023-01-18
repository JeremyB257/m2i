import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  let fetchUsers = () => {
    axios
      .get('https://randomuser.me/api/?results=10&seed=m2i')
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchUsers(), []);

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="flex user-list">
        {users.map((user) => (
          <article key={user.login.uuid}>
            <img src={user.picture.large} alt="" />
            <h4>
              {user.name.first} {user.name.last}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
