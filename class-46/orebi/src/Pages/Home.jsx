import React from 'react'
import Navbar from '../Components/Navbar'
import SearchField from '../Components/SearchField'
import { Link } from 'react-router-dom'
import Silider from '../Components/Home/Silider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SearchField/>
        <Silider/>
    </div>
  )
}

export default Home