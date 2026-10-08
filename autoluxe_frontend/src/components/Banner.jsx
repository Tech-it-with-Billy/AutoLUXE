import React from 'react'
import '../index.css'
import bannerImage from '/images/bmv.png'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div
            className="relative flex flex-col p-10 lg:p-20 gap-10 h-90 w-full bg-black bg-right bg-contain bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="max-w-sm text-3xl font-sans font-bold">
                    Discover the world on wheels with our car rental service
                </h1>

                <p className="max-w-full lg:w-120 mt-5">
                    Choose from a wide range of cars that fit your style and budget.
                    Experience the freedom of the open road with our reliable and
                    efficient rental service.
                </p>

                <Link to="/contact" className="flex gap-2 items-center mt-10">
                    <img src="/images/arrowWhite.png" className="w-5 h-5" alt="" />
                    <span>Contact Us</span>
                </Link>
            </div>
        </div>
    )
}

export default Banner