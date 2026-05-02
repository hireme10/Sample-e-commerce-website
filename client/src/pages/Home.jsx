import React from 'react'
import Carousel from '../components/Carousel'
import GenInfo, { Brands } from '../components/GenInfo'

const Home = () => {
    return (
        <div className='max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto '>
            <Carousel />
            <GenInfo />
            <Brands title="Top Brands" />
            <Brands title="Best Sellers" />
        </div>
    )
}

export default Home