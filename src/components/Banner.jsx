import React from "react";
import "../index.css";
import bannerImage from "/images/bmv.png";
import { Link } from "react-router-dom";

function Banner () {
    return (
        <div 
            className=" bg:max-w-sm h-120 bg-black bg-contain bg-no-repeat bg-right items-center text-white p-20 gap-5 flex flex-col items-start"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div><h1 className="max-w-sm text-5xl font-sans font-bold">Discover the world on wheels with our car rental service</h1></div>
            <div><p className="max-w-full lg:w-120">Choose from a wide range of cars that fit your style and budget. Experience the freedom of the open road with our reliable and efficient rental service.</p></div>
            <Link to="/contact" className="flex flex-row gap-2 items-center">
                <img className="w-5 h-5" src="/images/arrowWhite.png" alt="" />
                <span>Contact us</span>
            </Link>
        </div>
    )
}

export default Banner;