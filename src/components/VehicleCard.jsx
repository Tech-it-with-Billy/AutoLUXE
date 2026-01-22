import React from 'react'
import { Link } from 'react-router-dom';

function VehicleCard({vehicle}) {
    return (
        <div className=' flex flex-col gap-3 p-2 max-w-60 lg:max-w-80 bg-white border border-none rounded-2xl'>
            <img src={vehicle.image} className='rounded-xl' alt="" />
            <div className='flex flex-col justify-start'>
                <p>{vehicle.name}</p>
                <div className='flex'>
                    <p className='text-lg font-bold'>{vehicle.cost}</p>
                    <p>/day</p>
                </div>
            </div>
            <div className='flex gap-3 p-1 justify-center border border-none rounded-2xl  bg-gray-100 lg:gap-7'>
                <div className=' flex flex-col items-center'>
                    <img src="/images/cc.png" alt="" />
                    <p className='text-xs'>{vehicle.engine}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/gearbox.png" alt="" />
                    <p className='text-xs'>{vehicle.transmission}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/user.png" alt="" />
                    <p className='text-xs'>{vehicle.seats}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/gas.png" alt="" />
                    <p className='text-xs'>{vehicle.gasType}</p>
                </div>
            </div>
            <Link to={'/booking-form'}><button className='border rounded-2xl w-full'>Rent Now</button></Link>
        </div>
    )
}

export default VehicleCard;