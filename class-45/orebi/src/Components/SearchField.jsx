import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import Container from '../Layer/Container';
import LIstItem from '../Layer/LIstItem';
import UserCard from '../Layer/Home/UserCard';

const SearchField = () => {

    let [cateGoryIncon, setCateGoryIncon] = useState(false)

    let Catagorybutton = () => {
        setCateGoryIncon(!cateGoryIncon)
    }


    return (
        <div className='bg-[#F5F5F3] lg:py-5 py-2'>
            <Container className=" flex justify-between items-center px-3 lg:px-0 gap-x-3 " >
                <div className="category flex items-center gap-x-2.5 text-[#262626 ]  relative ">
                    <div className="CatButtonDiv flex items-center gap-x-2 cursor-pointer" onClick={Catagorybutton}>
                        <BiSolidCategory />
                        <p className="font-DMSans text-sm hidden lg:block">Shop By Category</p>
                    </div>
                    {
                        cateGoryIncon && (
                            <ul className='absolute top-full mt-5 left-0 w-[263px] font-semibold  bg-black '>
                                <LIstItem atag="Accesories" className="text-white/70 hover:text-white hover:ml-5 ml-2 relative duration-700" li="border-b border-[#262626] py-3" />
                                <IoIosArrowForward className='text-white right-0 absolute top-2 translate-y-[50%]' />
                                <LIstItem atag="Furniture" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem atag="Electronics" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem atag="Clothes" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem atag="Bags" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem atag="Home appliances" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                            </ul>
                        )
                    }
                </div>
                <div className="SearchField relative w-full lg:w-auto rounded-lg ">
                    <input type="text" placeholder='search Products' className='lg:w-[600px] w-full lg:py-4 py-2 px-5 outline-none rounded-sm' />
                    <FaSearch className="absolute right-5 top-1/2 translate-y-[-50%] " />
                </div>
                <UserCard className=" hidden lg:flex" />
            </Container>
        </div>
    )
}

export default SearchField