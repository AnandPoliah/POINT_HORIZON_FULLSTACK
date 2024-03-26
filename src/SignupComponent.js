import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'; // Import UserContext
import './LoginComponent.css'

export default function SignupComponent() {
  const [signupDetails, setSignupDetails] = useState([{ username: '', password: '' }]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Use the context

  const checkUserExists = async (username) => {
    try {
      const response = await axios.get('http://localhost:9000/getuser');
      return response.data.some(user => user.username === username);
    } catch (error) {
      console.error('Error fetching users:', error);
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // const userExists = await checkUserExists(signupDetails.username);
    // if (userExists) {
    //   alert('User already exists. Redirecting to login...');
    //   navigate('/');
    //   return;
    // }

    axios.post('http://localhost:9000/saveuser', {u_name:"anand",password:"12345"})
      .then(response => {
        alert('Signup successful:');
        setUser(response.data); // Set the new user in context
        navigate('/'); // Navigate to home on successful signup
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  let imgurl = 'https://t3.ftcdn.net/jpg/03/52/90/48/360_F_352904882_Uv8ZuVZNduEuE9KyjscqF1sXc2YzDppY.jpg'

  return (
    <div className='outerdiv'>
    <div className='innerdiv'>
    <div><img src={imgurl} alt='fuck' className='imgsrc'/></div>
    <form onSubmit={handleSignup} className='outerform'>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={signupDetails.username}
        onChange={handleInputChange}
        className='input'
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={signupDetails.password}
        onChange={handleInputChange}
        className='input'
      />
      <button type="submit" className='button-63'>Sign Up</button>
    </form>
    </div>
    </div>
  );
}