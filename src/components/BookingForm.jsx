import React from 'react'
import NavBar from './navbar';
import Footer from './Footer'
import locationIcon from '/images/Location.png'
import { Link } from 'react-router-dom';

function BookingForm() {
    return (
        <div>
            <NavBar />
            <div className='flex justify-center items-center bg-black p-5 h-5/6'>
                <div className='flex justify-center items-center bg-white border rounded-2xl p-5  w-4/6'>
                    <form action="submit" className='flex flex-col gap-2'>
                        <fieldset className='flex flex-col'>
                            <label htmlFor="name" className='font-semibold'>Name:</label>
                            <input 
                                type="text" id='name' name='name' 
                                placeholder='Enter name' 
                                className='border border rounded p-1'
                            />
                        </fieldset>
                        
                        <fieldset className='flex flex-col'>
                            <label htmlFor="email" className='font-semibold'>Email:</label>
                            <input 
                                type="email" id='email' name='email' 
                                placeholder='Enter email' 
                                className='border border rounded p-1'
                            />
                        </fieldset>

                        <fieldset className='flex flex-col'>
                            <label htmlFor="start-date" className='font-semibold'>From:</label>
                            <input 
                                type="date" id='start-date' 
                                className='border border rounded p-1'
                            />
                        </fieldset>

                        <fieldset className='flex flex-col'>
                            <label htmlFor="return-date" className='font-semibold'>To:</label>
                            <input 
                                type="date" id='return-date' 
                                className='border border rounded p-1'
                            />
                        </fieldset>

                        <fieldset className='flex flex-col gap-2'>
                            <label htmlFor="pick-up-location" className='font-semibold'>Pick-up Location</label>
                            <input 
                                type="text" id='pick-up-location' 
                                name='pick-up-location' placeholder='Search' 
                                className='border rounded p-1 bg-no-repeat bg-left pl-6'
                                style={{backgroundImage: `url(${locationIcon})`}}
                            />
                        </fieldset>

                        <fieldset className='flex flex-col gap-2'>
                            <label htmlFor="drop-off-location" className='font-semibold'>Drop-off Location</label>
                            <input 
                                type="text" id='drop-off-location' 
                                name='drop-off-location' placeholder='Search' 
                                className='border rounded p-1 bg-no-repeat bg-left pl-6'
                                style={{backgroundImage: `url(${locationIcon})`}}
                            />
                        </fieldset>

                        <fieldset className='flex flex-col gap-2'>
                            <label htmlFor="driving-license" className='font-semibold'>Driving License</label>
                            <input 
                                type="file" name='driving-license' 
                                accept="image/*, .pdf, .doc, .docx" 
                                className='border border rounded p-1'
                            />
                        </fieldset>

                        <Link to={'/booking-summary'}>
                            <button className='border w-full rounded-2xl p-1 bg-black text-white'>Submit</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookingForm;