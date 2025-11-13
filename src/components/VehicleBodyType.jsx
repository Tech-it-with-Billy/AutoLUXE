import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function VehicleBodyType() {
    return (
        <div>
            <div className="flex flex-row justify-between m-20 mt-20">
                <h1 className="text-xl font-bold">Rent by Body Type</h1>
                <Link to={'/listings'} className="flex">
                    <button>View all</button>
                    <img src="/images/arrowWhite.png" alt="" />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-5 m-20">
                <img className="w-50 h-30" src="/images/bodytype/suv.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/crossover.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/wagon.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/family.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/sports.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/compact.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/coup.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/truck.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/sedan.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/lemo.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/convertible.png" alt="" />
                <img className="w-50 h-30" src="/images/bodytype/crossover.png" alt="" />
            </div>
        </div>
    )
}

export default VehicleBodyType;