import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  let params = useParams();
  const [user, setUser] = useState();

  let fetchUser = () => {
    axios
      .get('https://randomuser.me/api/?results=10&seed=m2i')
      .then((res) => setUser(res.data.results.find((user) => user.login.username === params.id)))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchUser(), []);

  if (!user) {
    return <h1>404</h1>;
  }
  return (
    <div className="flex user-single">
      utilisateur {params.id} {user?.name.first}
      <div>
        <img src={user.picture.large} alt="" />
      </div>
      <div>
        <article>
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>
            {user.location.city}, {user.location.country}
          </p>
          <p>{user.dob.age}</p>
        </article>
      </div>
    </div>
  );
};

export default User;
