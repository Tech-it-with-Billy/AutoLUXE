import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


function ProductCard ({image, name, cost, engine, seats, transmission, gasType}) {
    return (
        <div className="bg-white border-2 border-white rounded-lg p-4 w-80 flex flex-col gap-2 m-4 text-sm">
            <img className="w-full h-40 object-cover rounded-md mb-4" src={image} alt={name} />
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{cost} per day</p>
            <div className="flex flex-row w-55  justify-between">
                <div>
                    <img src="/images/cc.png" alt="" />
                    <p>{engine} cc</p>
                </div>
                <div>
                    <img src="/images/gearbox.png" alt="" />
                    <p>{transmission}</p>
                </div>
                <div>
                    <img src="/images/user.png" alt="" />
                    <p>{seats} Person</p>
                </div>
                <div>
                    <img src="/images/gas.png" alt="" />
                    <p>{gasType}</p>
                </div>
            </div>
            <Link to={'/checkout'}><button className="border-1 w-70 justify-center rounded-lg">Rent Now</button></Link>
        </div>
    )
}
export default ProductCard;