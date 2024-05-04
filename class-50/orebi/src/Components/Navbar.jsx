
import React, { useEffect, useState } from 'react'
import Container from './../Layer/Container';
import Imges from '../Layer/Imges';
import LIstItem from './../Layer/LIstItem';
import { FaBars } from "react-icons/fa";
import UserCard from '../Layer/Home/UserCard';



function Navbar() {


  let [nevbar, setNavbar] = useState(false)

  let Navbarmenu = () => {
    setNavbar(!nevbar)
  }

  useEffect(() => {

    function screen1024() {
      if (window.innerWidth < 1024) {
        setNavbar(false)
      } else {
        setNavbar(true)
      }
    }
    screen1024();

    window.addEventListener("resize", screen1024)


  }, [])

  return (
    <nav className="">
      <Container className="flex items-center justify-between p-2 relative lg:py-6 py-3 px-4 lg:px-0">
        <Imges
          src="src/assets/logo.png"
          alt="logo.png"
          href="#"

        />
        {
          nevbar && (
            <ul className="w-full lg:flex absolute lg:static left-0 top-full z-10 bg-slate-200 lg:bg-transparent items-center gap-10  justify-center p-4 lg:p-0 ">
              <LIstItem Linktagtext="Home" className=" text-black  font-bold" />
              <LIstItem Linktagtext="Shop" className=" hover:text-black font-semibold" />
              <LIstItem Linktagtext="About" className=" hover:text-black font-semibold" />
              <LIstItem Linktagtext="Contacts" className=" hover:text-black font-semibold" />
              <LIstItem Linktagtext="Journal" className=" hover:text-black font-semibold" />
            </ul>
          )
        }

        <div className='flex items-center gap-x-4'>
          <UserCard className=" lg:hidden"/>
          <FaBars className='lg:hidden' onClick={Navbarmenu} />
        </div>
      </Container>


    </nav>
  )
}

export default Navbar
