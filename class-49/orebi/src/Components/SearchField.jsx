import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import Container from '../Layer/Container';
import LIstItem from '../Layer/LIstItem';
import UserCard from '../Layer/Home/UserCard';

const SearchField = () => {

    let [cateGoryIncon, setCateGoryIncon] = useState(false)

    let CatagorybuttonRef = useRef();

     (()=>{
        document.body.addEventListener("click",(elemet) =>{
            if(CatagorybuttonRef.current.contains(elemet.target)){
                setCateGoryIncon(true)
            }else{
                setCateGoryIncon(false)
            }
        })
    },[])


    return (
        <div className='bg-[#F5F5F3] lg:py-5 py-2'>
            <Container className=" flex justify-between items-center px-3 lg:px-0 gap-x-3 " >
                <div className="category flex items-center gap-x-2.5 text-[#262626 ]  relative ">
                    <div className="CatButtonDiv flex items-center gap-x-2 cursor-pointer" ref={CatagorybuttonRef}>
                        <BiSolidCategory />
                        <p className="font-DMSans text-sm hidden lg:block">Shop By Category</p>
                    </div>
                    {
                        cateGoryIncon && (
                            <ul className='absolute top-full mt-5 left-0 w-[263px] font-semibold  bg-black z-10'>
                                <LIstItem Linktagtext="Accesories" className="text-white/70 hover:text-white hover:ml-5 ml-2 relative duration-700" li="border-b border-[#262626] py-3" />
                                <IoIosArrowForward className='text-white right-0 absolute top-2 translate-y-[50%]' />
                                <LIstItem Linktagtext="Furniture" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem Linktagtext="Electronics" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem Linktagtext="Clothes" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem Linktagtext="Bags" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
                                <LIstItem Linktagtext="Home appliances" className="text-white/70 hover:text-white hover:ml-5 ml-2 duration-700" li="border-b border-[#262626] py-3" />
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