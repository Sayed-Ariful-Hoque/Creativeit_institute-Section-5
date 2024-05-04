import React from 'react'
import Navbar from '../Components/Navbar'
import SearchField from '../Components/SearchField'
import { Link } from 'react-router-dom'
import Silider from '../Components/Home/Silider'
import SiliderBottom from '../Components/Home/SiliderBottom'
import OfferSale from '../Components/Home/OfferSale'
import ProductItem from '../Layer/ProductItem'
import NewArrivals from '../Components/Home/NewArrivals'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SearchField/>
        <Silider/>
        <SiliderBottom/>
        <OfferSale/>
        <NewArrivals></NewArrivals>
    </div>
  )
}

export default Home