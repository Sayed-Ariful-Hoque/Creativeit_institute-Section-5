
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
              <LIstItem atag="Home" className=" text-black border-b border-black font-bold" />
              <LIstItem atag="about" className=" hover:text-black border-b-2  border-transparent hover:border-b-slate-950 font-semibold" />
              <LIstItem atag="service" className=" hover:text-black border-b-2  border-transparent hover:border-b-slate-950 font-semibold" />
              <LIstItem atag="blog" className=" hover:text-black border-b-2  border-transparent hover:border-b-slate-950 font-semibold" />
              <LIstItem atag="contact" className=" hover:text-black border-b-2  border-transparent hover:border-b-slate-950 font-semibold" />
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
