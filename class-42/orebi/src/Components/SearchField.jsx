import React from 'react'
import { HiBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Container from '../Layer/Container';
import LIstItem from '../Layer/LIstItem';

const SearchField = () => {
    return (
        <div className='bg-[#F5F5F3] pt-6'>
            <Container className=" flex justify-between flex-wrap items-center px-3 lg:px-0 gap-y-3 " >
                <div className="category flex items-center gap-x-2.5 text-[#262626 ]  relative lg:order-1  order-2 pb-6">
                    <HiBars2 />
                    <p className="font-DMSans text-sm">Shop By Category</p>
                    <ul className=' absolute top-full left-0 w-[263px] font-semibold  bg-black lg:mt-[18px]'>
                        <LIstItem atag="Accesories" className="text-white/70 hover:text-white hover:ml-5 ml-2 relative duration-700" li="border-b border-[#262626] py-3" />
                        <IoIosArrowForward className='text-white right-0 absolute top-2 translate-y-[50%]' />
                        <LIstItem atag="Furniture" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                        <LIstItem atag="Electronics" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                        <LIstItem atag="Clothes"className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                        <LIstItem atag="Bags" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3"/>
                        <LIstItem atag="Home appliances" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3"/>
                    </ul>
                </div>
                <div className="SearchField relative lg:order-2 order-1 w-full lg:w-auto rounded-lg lg:mb-6">
                    <input type="text" placeholder='search Products' className='lg:w-[600px] w-full lg:py-4 py-2 px-5 outline-none rounded-sm' />
                    <FaSearch className="absolute right-5 top-1/2 translate-y-[-50%] "/>
                </div>
                <div className="User&AddToCard flex items-center gap-x-10 lg:order-3 order-3 pb-6">
                   <div className="user flex items-center gap-x-2">
                   <FaUser />
                   <FaCaretDown />
                   </div>
                   <div className="addToCard">
                   <FaCartShopping />
                   </div>
                </div>
            </Container>
        </div>
    )
}

export default SearchField