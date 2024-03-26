import React, { useContext } from 'react'
import './home.css';
import NavBar from './header_for_everything'
import SearchBar from './searchBarFlight';
import ScrollContent from './scrollContent'
import {Context} from './context'

export default function home(props) {
  
  return (
    <div>
       <NavBar />
       <SearchBar/>
       <ScrollContent />
    </div>
  )
}