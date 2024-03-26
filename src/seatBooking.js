import React, { useState, useContext} from 'react'
import NavBar from './header_for_everything'
import './seatBooking.css';
import {UserContext} from './context';
import { useNavigate } from 'react-router-dom';

const SeatBooking=()=>{
    const {user}=useContext(UserContext)
    const [count,setCount] = useState(0);
    
    const navigate =useNavigate();
    const [isClicked1, setIsClicked1] = useState(Array(8).fill(false)); // For 10 buttons
    const [isClicked2, setIsClicked2] = useState(Array(8).fill(false)); // For 10 buttons
    const [isClicked3, setIsClicked3] = useState(Array(8).fill(false)); // For 10 buttons
    const [isClicked4, setIsClicked4] = useState(Array(8).fill(false)); // For 10 buttons
    const [isClicked5, setIsClicked5] = useState(Array(8).fill(false)); // For 10 buttons
    const [isClicked6, setIsClicked6] = useState(Array(8).fill(false)); // For 10 buttons


    const handleButtonClick1 = (index) => 
    {
      const updatedClicked = [...isClicked1]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked1(updatedClicked); // Update the state
      
    };
    const handleButtonClick2 = (index) => 
    {
      const updatedClicked = [...isClicked2]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked2(updatedClicked); // Update the state
      

    };
    const handleButtonClick3 = (index) => 
    {
      const updatedClicked = [...isClicked3]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked3(updatedClicked); // Update the state
    };
    const handleButtonClick4 = (index) => 
    {
      const updatedClicked = [...isClicked4]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked4(updatedClicked); // Update the state
    };
    const handleButtonClick5 = (index) => 
    {
      const updatedClicked = [...isClicked5]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked5(updatedClicked); // Update the state
    };
    const handleButtonClick6 = (index) => 
    {
      const updatedClicked = [...isClicked6]; // Create a copy of the array
      updatedClicked[index] = !updatedClicked[index]; // Toggle the clicked state for the specific index
      if(updatedClicked[index]){
        setCount(count+1);
      }
      else{
        setCount(count-1);
      }
      setIsClicked6(updatedClicked); // Update the state
    };
  
    
    const [loading, setLoading] = useState(false);

    const handleBook = () => {
      setLoading(true); // Show loader on button click
  
      const button = document.querySelector('.button-63');
      button.disabled = true;
      
      setTimeout(() => {
        button.disabled = false;
        navigate('/home'); // Navigate after 10 seconds
        alert('Error While Booking Tickets! Please try again later');
        setLoading(false); // Hide loader after navigation
      }, 7000);
    };


  return (
    <div>
        <NavBar />
        <div className='seat-content'>
             <div><h1>Book Seat</h1></div>
        </div>

        <div className='from-to'>
            <div><h1>From: {user.from}</h1></div>
            <div><h1>To: {user.to}</h1></div>
        </div>
        <div className='seat-outer'>
            <div><h4>Lower Berth</h4></div>
            <div className='seat-main'>
                <div className='seat-two'>
                    {isClicked1.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick1(index)}> 1-{index + 1} </button> ))}
                </div>
                <div className='seat-two'>
                    {isClicked2.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick2(index)}> 2-{index + 1} </button>))}
                </div>
                <div className='seat-one'>
                    {isClicked3.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick3(index)}> 3-{index + 1} </button> ))}
                </div>
            </div>


            <div><h4>Upper Berth</h4></div>
            <div className='seat-main'>
            <div className='seat-two'>
                    {isClicked4.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick4(index)}> 4-{index + 1} </button> ))}
                </div>
                <div className='seat-two'>
                    {isClicked5.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick5(index)}> 5-{index + 1} </button>))}
                </div>
                <div className='seat-one'>
                    {isClicked6.map((clicked, index) => (<button key={index} style={{ backgroundColor: clicked ? 'lightblue' : 'white' }} onClick={() => handleButtonClick6(index)}> 6-{index + 1} </button> ))}
                </div>
            </div>
        </div>
        <div className='seat-submit'>
        <div>
          {loading && (
            <div className="loader-img">
              <img src="https://i.imgflip.com/5qf4vx.png" alt="Loading" className="loading-img" />
            </div>
          )}
          <button onClick={handleBook} className='button-63'>
            Book {count} Ticket
          </button>
        </div>
        </div>
    </div>
  )
}

export default SeatBooking;