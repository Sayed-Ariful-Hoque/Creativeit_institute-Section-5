import React from 'react'
import Navbar from '../Components/Navbar'
import SearchField from '../Components/SearchField'
import { Link } from 'react-router-dom'
import Silider from '../Components/Home/Silider'
import SiliderBottom from '../Components/Home/SiliderBottom'
import OfferSale from '../Components/Home/OfferSale'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SearchField/>
        <Silider/>
        <SiliderBottom/>
        <OfferSale/>
    </div>
  )
}

export default Home