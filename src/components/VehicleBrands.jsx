import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Type from "./Type";


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
                <Type image="/images/brands/toyota.png" />
                <Type image="/images/brands/ford.png" />
                <Type image="/images/brands/Tesla.png" />
                <Type image="/images/brands/vw.png" />
                <Type image="/images/brands/honda.png" />
                <Type image="/images/brands/nissan.png" />
                <Type image="/images/brands/chevi.png" />
                <Type image="/images/brands/bmw.png" />
                <Type image="/images/brands/mercedes.png" />
                <Type image="/images/brands/hyundai.png" />
                <Type image="/images/brands/audi.png" />
                <Type image="/images/brands/kia.png" />
            </div>
        </div>
    )
}

export default VehicleBrands;