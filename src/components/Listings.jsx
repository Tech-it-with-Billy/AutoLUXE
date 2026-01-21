import React from 'react'
import VehicleCard from './VehicleCard';
import { VehicleList } from './VehicleList';

function Listings() {
    return (
            <div className='flex flex-col gap-10 p-6 mt-5 justify-center items-center bg-gray-100'>
                
                    <h2>Our impressive collection of cars</h2>
                    <p>Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.</p>
                
                
                <div className='flex gap-5'>
                    <button className='border p-1 rounded-2xl bg-black text-white w-30'>Popular cars</button>
                    <button className='border p-1 rounded-2xl bg-black text-white w-30'>Luxury cars</button>
                    <button className='border p-1 rounded-2xl bg-black text-white w-30'>Vintage cars</button>
                    <button className='border p-1 rounded-2xl bg-black text-white w-30'>Family cars</button>
                    <button className='border p-1 rounded-2xl bg-black text-white w-30'>Off-road cars</button>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {VehicleList.map(vehicle => (
                        <VehicleCard vehicle={vehicle}/>
                    ))}
                </div>
                <button className='flex text-white bg-black w-50 justify-center p-1 gap-3 items-center rounded-2xl'>
                    See all cars
                    <img src="/images/arrowR.png" className='h-3' alt="" />
                </button>
            </div>
    )
}

export default Listings;