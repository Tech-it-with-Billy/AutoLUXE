import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


function VehicleBrands() {
    return (
        <div>
            <div className="flex flex-row justify-between m-20 mt-20">
                <h1 className="text-xl font-bold">Rent by Brands</h1>
                <Link to={'/listings'} className="flex">
                    <button className="hover:text-blue-600">View all</button>
                    <img src="/images/arrowWhite.png" alt="" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-5 m-20">
                <img className="w-50 h-30" src="/images/brands/toyota.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/ford.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/Tesla.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/vw.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/honda.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/nissan.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/chevi.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/bmw.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/mercedes.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/hyundai.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/audi.png" alt="" />
                <img className="w-50 h-30" src="/images/brands/kia.png" alt="" />
            </div>
        </div>
    )
}

export default VehicleBrands;