import React from 'react'
import Container from '../../Layer/Container'
import Imges from '../../Layer/Imges'
import Sale1 from '/src/assets/Home/OfferSell/sale-1.png'
import Sale2 from '/src/assets/Home/OfferSell/sale-2.png'
import Sale3 from '/src/assets/Home/OfferSell/sale-3.png'

const OfferSale = () => {
    return (
        <div className='pt-[174px] pb-40'>
            <Container className="flex justify-between">
                <div className="LeftPart w-[780px] h-[780px] bg-slate-400">
                    <Imges to="/" src={Sale1} className="w-full h-full" />
                </div>
                <div className="RightPart w-[780px] h-[780px] flex flex-col justify-between">
                    <div className="TopPart w-full h-[370px]">
                        <Imges to="/" src={Sale2} className="w-full h-full" />
                    </div>
                    <div className="BottomPart w-full h-[370px]">
                        <Imges to="/" src={Sale3} className="w-full h-full" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OfferSale