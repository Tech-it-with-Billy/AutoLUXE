import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useBookingStore } from "./BookingStore"


function VehicleCard ({vehicle}) {

    const setVehicle = useBookingStore((state) => state.setVehicle)

    const handleSelectCar = () => {
        setVehicle(vehicle)
    }
    return (
        <div className="bg-white border-2 border-white rounded-lg p-4 w-62 lg:w-75 flex flex-col gap-2 m-3 text-sm">
            <img className="w-full h-40 object-cover rounded-md mb-4" src={vehicle.image} alt={vehicle.name} />
            <h2 className="text-lg font-semibold mb-2">{vehicle.name}</h2>
            <p className="text-gray-600 mb-2">{vehicle.cost} per day</p>
            <div className="flex flex-row w-55 lg:w-65 justify-between">
                <div>
                    <img src="/images/cc.png" alt="" />
                    <p>{vehicle.engine} cc</p>
                </div>
                <div>
                    <img src="/images/gearbox.png" alt="" />
                    <p>{vehicle.transmission}</p>
                </div>
                <div>
                    <img src="/images/user.png" alt="" />
                    <p>{vehicle.seats} Person</p>
                </div>
                <div>
                    <img src="/images/gas.png" alt="" />
                    <p>{vehicle.gasType}</p>
                </div>
            </div>
            <Link to={'/checkout'}>
            <button 
                onClick={handleSelectCar}
                className="border-1 w-55 lg:w-65 justify-center rounded-lg hover:border-3 border-black-500"
            >
                Rent Now
            </button>
            </Link>
        </div>
    )
}
export default VehicleCard;