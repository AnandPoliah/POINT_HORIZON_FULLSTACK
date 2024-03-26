import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import './HomeComponent.css';

const HomeComponent = () => {
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

const logout = () => {
    setUser(null);
    navigate('/');
};

  if (!user) 
  {
  return <div className='outerdiv'>
  <div className='innerdiv'>
        <p>Please log in!</p>
        <div>
        <button onClick={()=>navigate('/')} className='button-65'>Go to login</button>
        </div>
        </div>;
        </div>
  
  }

  let imgurl = 'https://i.pinimg.com/736x/5f/f7/76/5ff7765c603157c920313155699fd001.jpg'

  return (
    <div className='outerdiv'>
      <div class='innerdiv'>
      <div><img src={imgurl} alt='fuck' className='imgsrc1'/></div>
        <p>Welcome User: {user.username}</p>
        <div >
        <button onClick={()=>{navigate('/home')}} className='button-65'>Book Tickets</button>
        <button onClick={logout} className='button-65'>Logout</button>
        </div>
       
      </div>
    </div>
  );
};

export default HomeComponent;