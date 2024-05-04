import React from 'react'
import Container from '../../Layer/Container'
import ProductItem from '../../Layer/ProductItem'
import Slider from '@ant-design/react-slick'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="bg-[#979797] text-white  items-center justify-center"
            style={{
                ...style,
                display: "flex",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                position: "absolute",
                right: '15px',
                top: '40%',
                transform: "  translateY(-50%) ",
                zIndex: "1",

            }}
            onClick={onClick}
        >
            <FaLongArrowAltRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="bg-[#979797] text-white  items-center justify-center"
            style={{
                ...style,
                display: "flex",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                position: "absolute", 
                left: '15px',
                top: '40%',
                transform: " translateY(-50%) ",
                zIndex: "1",
            }}
            onClick={onClick}
        >
            <FaLongArrowAltLeft />
        </div>
    );
}




const NewArrivals = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pt-32'>
            <Container>
                <h3 className='text-[39px] font-DMSans font-bold mb-12 text-[#574848]'>New Arrivals</h3>
                <Slider {...settings}>
                    <ProductItem className='mx-auto' offer='New' />
                    <ProductItem className='mx-auto' offer='20%' />
                    <ProductItem className='mx-auto' offer='New' />
                    <ProductItem className='mx-auto' offer='25%' />
                    <ProductItem className='mx-auto' offer='25%' />
                    <ProductItem className='mx-auto' offer='25%' />
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrivals