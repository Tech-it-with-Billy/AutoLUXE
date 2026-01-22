import React from 'react'
import '../index.css'
import VehicleFilterIcon from './VehicleFilterIcon';
import { Link } from 'react-router-dom';

function VehicleBodyType() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between p-15'>
                <h2 className='text-lg font-bold'>Rent by body type</h2>
                <Link to={'/vehicles'}>
                    <button className='flex gap-3 items-center'>
                        View all
                        <img src="/images/ArrowBlack.png" alt="" className='h-3 ' />
                    </button>
                </Link>
            </div>
            <div className='grid grid-cols-6 px-15 gap-5'>
                <VehicleFilterIcon image='/images/bodytype/compact.png' />
                <VehicleFilterIcon image='/images/bodytype/convertible.png' />
                <VehicleFilterIcon image='/images/bodytype/coup.png' />
                <VehicleFilterIcon image='/images/bodytype/crossover.png' />
                <VehicleFilterIcon image='/images/bodytype/family.png' />
                <VehicleFilterIcon image='/images/bodytype/lemo.png' />
                <VehicleFilterIcon image='/images/bodytype/sedan.png' />
                <VehicleFilterIcon image='/images/bodytype/sports.png' />
                <VehicleFilterIcon image='/images/bodytype/suv.png' />
                <VehicleFilterIcon image='/images/bodytype/truck.png' />
                <VehicleFilterIcon image='/images/bodytype/wagon.png' />
                <VehicleFilterIcon image='/images/bodytype/sports.png' />
            </div>
        </div>
    )
}

export default VehicleBodyType;