import React from 'react'
import '../index.css'
import bannerImage from '/images/bmv.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div
            className='flex flex-col p-20 gap-10 h-130 w-full bg-no-repeat bg-black bg-right bg-contain text-white'
            style={{backgroundImage: `url(${bannerImage})`}}
        >
            <h1 className="max-w-sm text-5xl font-sans font-bold">Discover the world on wheels with our car rental service</h1>
            <p className="max-w-full lg:w-120">Choose from a wide range of cars that fit your style and budget. Experience the freedom of the open road with our reliable and efficient rental service.</p>
            <Link to={'/contact'} className='flex gap-2 items-center'>
                <img src="/images/arrowWhite.png" className='w-5 h-5' alt="" />
                <span>Contact Us</span>
            </Link>
        </div>
    )
}

export default Banner