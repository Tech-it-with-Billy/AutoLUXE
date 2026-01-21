import React from 'react'
import VehicleFilterIcon from './VehicleFilterIcon';

function VehicleBrands() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between p-15'>
                <h2>Rent by brand</h2>
                <button className='flex gap-3 items-center'>
                    View all
                    <img src="/images/ArrowBlack.png" alt="" className='h-3 ' />
                </button>
            </div>
            <div className='grid grid-cols-6 px-15 gap-5'>
                <VehicleFilterIcon image='/images/brands/mercedes.png' />
                <VehicleFilterIcon image='/images/brands/audi.png' />
                <VehicleFilterIcon image='/images/brands/bmw.png' />
                <VehicleFilterIcon image='/images/brands/vw.png' />
                <VehicleFilterIcon image='/images/brands/Tesla.png' />
                <VehicleFilterIcon image='/images/brands/nissan.png' />
                <VehicleFilterIcon image='/images/brands/toyota.png' />
                <VehicleFilterIcon image='/images/brands/honda.png' />
                <VehicleFilterIcon image='/images/brands/chevi.png' />
                <VehicleFilterIcon image='/images/brands/kia.png' />
                <VehicleFilterIcon image='/images/brands/ford.png' />
                <VehicleFilterIcon image='/images/brands/hyundai.png' />
            </div>
        </div>
    )
}

export default VehicleBrands;