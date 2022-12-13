import React, { useState, useEffect } from 'react'
import '../css/main-content/main-content.css'
import JobSearch from './MainContent/JobSearch'
import { StartPost } from './MainContent/StartPost'
import UserPost from './MainContent/UserPost'

export const MainContent = () => {

  const [users, setUsers] = useState([]);

  const getRandomUsers = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const getUsers = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      options
    );
    const usersArr = await res.json();
    const randomUsers = getRandomUsers(usersArr, 16)
    setUsers(randomUsers)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='main-content'>
        <JobSearch />
        <StartPost />
        {users && users.map(user => (
          <UserPost key={user._id} user={user}/>
        ))}
    </div>
  )
}
