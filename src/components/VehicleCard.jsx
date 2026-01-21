import React from 'react'

function VehicleCard({vehicle}) {
    return (
        <div className=' flex flex-col gap-3 p-2 max-w-60 bg-white border border-none rounded-2xl'>
            <img src={vehicle.image} className='rounded-xl' alt="" />
            <div className='flex flex-col justify-start'>
                <p>{vehicle.name}</p>
                <p>{vehicle.cost}/day</p>
            </div>
            <div className='flex gap-3 p-1 justify-center border border-none rounded-2xl  bg-gray-100'>
                <div className=' flex flex-col items-center'>
                    <img src="/images/cc.png" alt="" />
                    <p>{vehicle.engine}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/gearbox.png" alt="" />
                    <p>{vehicle.transmission}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/user.png" alt="" />
                    <p>{vehicle.seats}</p>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src="/images/gas.png" alt="" />
                    <p>{vehicle.gasType}</p>
                </div>
            </div>
            <button className='border rounded-2xl'>Rent Now</button>
        </div>
    )
}

export default VehicleCard;