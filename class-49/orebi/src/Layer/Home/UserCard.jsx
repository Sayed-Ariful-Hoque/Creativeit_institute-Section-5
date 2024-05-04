import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from "react-icons/fa"
import { FaCaretDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Imges from '../Imges';
import { RxCross2 } from "react-icons/rx";

const UserCard = ({ className }) => {

    let [login, setLogin] = useState(false)

    let LoginRef = useRef()

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (LoginRef.current.contains(e.target)) {
                setLogin(true)
            } else {
                setLogin(false)
            }
        })
    }, [])

    let [card, setCard] = useState(false)

    let cardRef = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (cardRef.current.contains(e.target)) {
                setCard(true)
            } else {
                setCard(false)
            }
        })
    }, [])

    return (
        <div className={`User&AddToCard flex items-center gap-x-10${className}`}>
            <div className="relative">
                <div ref={LoginRef} className="user flex items-center gap-x-2 cursor-pointer">
                    <FaUser />
                    <FaCaretDown />
                </div>
                {
                    login && (
                        <ul className=' w-[200px] absolute right-0 top-full lg:mt-5 mt-3 z-10'>
                            <li className=' bg-black text-white py-4 text-center font-DMSans font-bold text-sm hover:bg-white hover:text-black border-[0.5px] border-[#F0F0F0]'><a href="/">MY Account</a></li>
                            <li className=' bg-black text-white py-4 text-center font-DMSans font-bold text-sm hover:bg-white hover:text-black border-[0.5px] border-[#F0F0F0]'><a href="/">Log Out</a></li>
                        </ul>
                    )
                }
            </div>
            <div className="addToCard relative">
                <div  ref={cardRef}>
                    <FaCartShopping className=' cursor-pointer' />
                </div>
                {
                    card ? (
                        <ul className='lg:w-[360px] w-[300px] absolute right-0 top-full lg:mt-5 mt-3 z-10'>
                            <li >
                                <div className="ShoppingImagessdeivone p-5 bg-white  hover:bg-[#F5F5F3] flex items-center justify-between border">
                                    <div className=' flex items-center gap-x-5'>
                                        <Imges className="w-20 h-20 border-none" />
                                        <div className='text-sm font-bold'>
                                            <h4>Black Smart Watch</h4>
                                            <h3>$44.00</h3>
                                        </div>
                                    </div>
                                    <div className='w-2.5'>
                                        <RxCross2 />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ShoppingImagessdeivone px-5 pt-3.5 pb-5 bg-white hover:bg-[#F5F5F3] border">
                                    <h1 className=' font-DMSans text-base text-[#767676] '>Subtotal: <span className=' font-bold text-[#262626]'> $44.00</span></h1>
                                    <div className="viewShoppingCard flex justify-between mt-3">
                                        <button className='py-4 lg:px-10 px-6 border border-[#262626] bg-white hover:bg-[#262626] text-[#262626] hover:text-white font-bold text-sm font-DMSans'>View Cart</button>
                                        <button className='py-4 lg:px-10 px-6 border border-[#262626] bg-white hover:bg-[#262626] text-[#262626] hover:text-white font-bold text-sm font-DMSans'>Checkout</button>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    )
                        :
                        " "
                }
            </div>
        </div>
    )
}

export default UserCard