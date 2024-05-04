import React from 'react'
import Container from '../../Layer/Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { SlReload } from "react-icons/sl";





const SiliderBottom = () => {
  return (
    <div className='border-b border-[#F0F0F0] py-6'>
        <Container className="flex justify-between ">
            <div className="LeftPart flex text-center items-center gap-x-4">
                <PiNumberTwoBold className='w-4' />
                <p className='font-DMSans text-base text-[#6D6D6D]'>Two years warranty</p>
            </div>
            <div className="middle part flex text-center items-center gap-x-4">
                <FaTruck className='w-6'/>
                <p  className='font-DMSans text-base text-[#6D6D6D]'>Free shipping</p>
            </div>
            <div className="LeftPart flex text-center items-center gap-x-4">
                <SlReload className=' rotate-[120deg]' />
                <p  className='font-DMSans text-base text-[#6D6D6D]'>Free shipping</p>
            </div>
        </Container>
    </div>
  )
}

export default SiliderBottom