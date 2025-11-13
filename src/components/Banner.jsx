import React from "react";
import "../index.css";
import bannerImage from "/images/bmv.png";

function Banner () {
    return (
        <div 
            className="h-120 bg-black bg-contain bg-no-repeat bg-right items-center text-white p-20 gap-10 flex flex-col items-start"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div><h1 className="text-5xl font-sans font-bold">Discover the world on <br /> wheels with our car <br /> rental service</h1></div>
            <div><p>Choose from a wide range of cars that fit your style and budget.<br />Experience the freedom of the open road with our reliable<br /> and efficient rental service.</p></div>
            <div className="flex flex-row gap-2 items-center">
                    <img className="w-5 h-5" src="/images/arrowWhite.png" alt="" />
                    <button>Contact us</button>
            </div>
        </div>
    )
}

export default Banner;