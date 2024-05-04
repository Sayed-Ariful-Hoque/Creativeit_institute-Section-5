import React from 'react'
import Container from '../../Layer/Container'
import ProductItem from '../../Layer/ProductItem'

const NewArrivals = () => {
    return (
        <div className='pt-32'>
            <Container>
                <h3 className='text-[39px] font-DMSans font-bold mb-12 text-[#262626]'>New Arrivals</h3>
                <div className='lg:flex items-center justify-between gap-x-10'>
                    <ProductItem offer='New' />
                    <ProductItem offer='20%' />
                    <ProductItem offer='New' />
                    <ProductItem offer='25%' />
                </div>
            </Container>
        </div>
    )
}

export default NewArrivals