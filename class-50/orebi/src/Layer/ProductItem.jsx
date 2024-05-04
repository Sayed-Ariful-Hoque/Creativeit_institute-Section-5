import React from 'react'
import Imges from './Imges'
import Na1 from '/src/assets/Home/NewArrivals/na1.png'
import LIstItem from './LIstItem'
import { FaHeart } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { IoCart } from 'react-icons/io5'

const ProductItem = ({offer, className}) => {
    return (

            <div className={`pb-10 w-[370px] group ${className}`}>
                <div className="imgs w-[370px] h-[370px] relative overflow-hidden">
                    <Imges
                        className="w-full h-full"
                        src={Na1}
                    />
                    <button className=' absolute bg-[#262626] top-5 left-5 px-8 py-2 text-white'>{offer}</button>
                    <div className="OverLay absolute bg-white bottom-0 left-0 transition-all duration-500 translate-y-[100%]  group-hover:translate-y-[0] w-full ">
                        <ul className=' py-6 pr-8 flex flex-col gap-y-5'>
                            <LIstItem
                                href="/"
                                className="w-full"
                                Linktagtext={
                                    <p className=" flex hover:font-bold hover:text-[#262626] items-center gap-x-4 justify-end   text-base text-[#767676] font-DM">
                                        Add to Wish List {<FaHeart className="text-[#262626] font-bold" />}
                                    </p>
                                }
                            />
                            <LIstItem
                                href="/"
                                className="w-full"
                                Linktagtext={
                                    <p className=" flex hover:font-bold hover:text-[#262626] items-center gap-x-4 justify-end  text-base text-[#767676] font-DM">
                                        Add to Wish List {<TfiReload className="text-[#262626] font-bold" />}
                                    </p>
                                }
                            />
                            <LIstItem
                                href="/"
                                className="w-full"
                                Linktagtext={
                                    <p className=" flex hover:font-bold hover:text-[#262626] items-center gap-x-4 justify-end  text-base text-[#767676] font-DM">
                                        Add to Wish List {<IoCart className="text-[#262626] font-bold" />}
                                    </p>
                                }
                            />
                        </ul>
                    </div>
                </div>
                <div className="text mt-6">
                    <h3 className='flex justify-between text-xl font-bold font-DMSans text-[#262626]'>Basic Crew Neck Tee <span className=' text-base font-DMSans font-normal text-[#767676]'>$44.00</span></h3>
                    <p className=' font-DMSans font-normal text-[#767676] mt-4'>Black</p>
                </div>
            </div>
    )
}

export default ProductItem