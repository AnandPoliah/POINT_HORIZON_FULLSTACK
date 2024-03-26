import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './searchBarFlight.css';
import { UserContext } from './context';


const SearchBar = (props) => 
  {
    const [BusDetails,setBusDet]=useState([{from:'',to:'',date:''}]);
    const { setUser } = useContext(UserContext);

    const handleInputChange=(e)=>{
      setBusDet({...BusDetails, [e.target.name]:e.target.value});
    };
 
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault();
       
       if (!BusDetails.from || !BusDetails.to || !BusDetails.date) {
        alert("Please fill in all the required fields.");
        return;
      }
      else if (BusDetails.from === BusDetails.to ) {
        alert("Choose Different Destination in From and To field");
        return;
      }
      setUser(BusDetails);
      navigate('/busList');
    }

  return (
    <div>
        <div className='search-mainf'>
          <div className='search'>
            <div className='search-bar'>
            
             <div>
          <select name='from' value={BusDetails.from} onChange={handleInputChange} className='transparent-select'>
            <option value="">From: </option>
            <option value="Salem">Salem</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Dindugal">Dindugal</option>
          </select>
        </div>
        <div>
          <select name='to' value={BusDetails.to} onChange={handleInputChange} className='transparent-select'>
            <option value="">To: </option>
            <option value="Salem">Salem</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Dindugal">Dindugal</option>
          </select>
        </div>
             <div><input type='date' name='date' value={BusDetails.date} onChange={handleInputChange}></input></div>
             <div><button onClick={handleSubmit} className='button-32'>Submit</button></div>
             </div>
          </div>
       </div>
    </div>
  )
}
export default SearchBar
