import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Type from "./Type";

function VehicleBodyType() {
    return (
        <div>
            <div className="flex flex-row justify-between m-20 mt-20">
                <h1 className="text-xl font-bold">Rent by Body Type</h1>
                <Link to={'/listings'} className="flex">
                    <button className="hover:text-blue-600">View all</button>
                    <img src="/images/arrowWhite.png" alt="" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-5 m-20">
                <Type image="/images/bodytype/suv.png" />
                <Type image="/images/bodytype/crossover.png" />
                <Type image="/images/bodytype/wagon.png" />
                <Type image="/images/bodytype/family.png" />
                <Type image="/images/bodytype/sports.png" />
                <Type image="/images/bodytype/compact.png" />
                <Type image="/images/bodytype/coup.png" />
                <Type image="/images/bodytype/truck.png" />
                <Type image="/images/bodytype/sedan.png" />
                <Type image="/images/bodytype/lemo.png" />
                <Type image="/images/bodytype/convertible.png" />
                <Type image="/images/bodytype/crossover.png" />
            </div>
        </div>
    )
}

export default VehicleBodyType;