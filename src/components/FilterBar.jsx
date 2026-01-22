import React from 'react'
import locationIcon from '/images/Location.png'
import { Link } from 'react-router-dom';

function FilterBar() {
    return (
        <div className='flex justify-center items-center'>
            <form action="submit" className='grid grid-cols-2 md:flex gap-5 items-center bg-gray-200 p-4 rounded-3xl -m-10'>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="pick-up-location">Pick-up Location</label>
                    <input 
                        type="text" id='pick-up-location' 
                        name='pick-up-location' placeholder='Search' 
                        className='border rounded p-1 bg-no-repeat bg-left pl-6 w-35'
                        style={{backgroundImage: `url(${locationIcon})`}}
                    />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="pick-up-date">Pick-up Date</label>
                    <input 
                        type="date" id='pick-up-date' 
                        name='pick-up-date' className='border rounded p-1 w-35'
                    />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="drop-off-location">Drop-off Location</label>
                    <input 
                        type="text" id='drop-off-location' 
                        name='drop-off-location' placeholder='Search' 
                        className='border rounded p-1 bg-no-repeat bg-left pl-6 w-35'
                        style={{backgroundImage: `url(${locationIcon})`}}
                    />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="drop-off-date">Pick-up Date</label>
                    <input 
                        type="date" id='drop-off-date' 
                        name='drop-off-date' className='border rounded p-1 w-35'
                    />
                </fieldset>
                <Link to={'/cars'}>
                    <button type='submit' className='flex text-white bg-black rounded-2xl w-40 h-10 items-center p-3 gap-2'>
                        Find you ride 
                        <img src="images/arrowR.png" className='h-3' alt="" />
                    </button>
                </Link>
                
            </form>
        </div>
    )
}

export default FilterBar;