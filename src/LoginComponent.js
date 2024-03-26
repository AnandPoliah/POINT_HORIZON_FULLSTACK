import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import './LoginComponent.css';

const LoginComponent = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const { setUser } = useContext(UserContext);
  
  useEffect(() => {
    axios.get('http://localhost:9000/saveuser')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    if (foundUsers.length>0 && foundUsers[0].password===loginDetails.password) 
    {
      setUser(foundUsers[0]);
      alert('Login Successful');
      navigate('/hc')
    } 
    else if(foundUsers.length>0){
      alert('incorrect Login Details');
    }
    else {
      alert('User not found. Please Sign Up');
      navigate('/signup')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  let imgurl = 'https://t3.ftcdn.net/jpg/03/52/90/48/360_F_352904882_Uv8ZuVZNduEuE9KyjscqF1sXc2YzDppY.jpg'

  return (
    <div className='outerdiv'>
    <div className='innerdiv'>
    <div><img src={imgurl} alt='fuck' className='imgsrc'/></div>
    <form onSubmit={handleLogin} className='outerform'>
      
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={loginDetails.username}
        onChange={handleInputChange}
        className='input'
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={loginDetails.password}
        onChange={handleInputChange}
        className='input'
      />
      <button type="submit" class="button-63">Login</button>
    </form>
    <div className='signup-login'>
       <p>Don't have an account??</p>
       <button className='signup-button' onClick={()=>navigate('/signup')}>signup</button>
    </div>
    </div>
    </div>
  );
};

export default LoginComponent;
