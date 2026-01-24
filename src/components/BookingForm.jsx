import React from 'react'
import NavBar from './navbar';
import Footer from './Footer'
import locationIcon from '/images/Location.png'
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../context/BookingStore';

function BookingForm() {
    const { bookingDetails, updateBookingDetails} = useBookingStore();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/booking-summary')
    }

    return (
        <div>
            <NavBar />
            <div className='flex justify-center items-center bg-black h-5/6'>
                <div className='flex m-5 justify-center items-center bg-white border rounded-2xl w-5/6 md:w-4/6'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-5 w-70 md:w-120'>
                        <fieldset className='flex flex-col'>
                            <label htmlFor="name" className='font-semibold'>Name:</label>
                            <input 
                                type="text" id='name' name='name' 
                                placeholder='Enter name' 
                                className='border border rounded p-1'
                                value={bookingDetails.name}
                                onChange={(e) => updateBookingDetails({name: e.target.value})}
                                required
                            />
                        </fieldset>
                        
                        <fieldset className='flex flex-col'>
                            <label htmlFor="email" className='font-semibold'>Email:</label>
                            <input 
                                type="email" id='email' name='email' 
                                placeholder='Enter email' 
                                className='border border rounded p-1'
                                value={bookingDetails.email}
                                onChange={(e) => updateBookingDetails({email: e.target.value})}
                                required
                            />
                        </fieldset>

                        <fieldset className='flex flex-col'>
                            <label htmlFor="start-date" className='font-semibold'>From:</label>
                            <input 
                                type="date" id='start-date' 
                                className='border border rounded p-1'
                                value={bookingDetails.from}
                                onChange={(e) => updateBookingDetails({from: e.target.value})}
                                required
                            />
                        </fieldset>

                        <fieldset className='flex flex-col'>
                            <label htmlFor="return-date" className='font-semibold'>To:</label>
                            <input 
                                type="date" id='return-date' 
                                className='border border rounded p-1'
                                value={bookingDetails.to}
                                onChange={(e) => updateBookingDetails({to: e.target.value})}
                                required
                            />
                        </fieldset>

                        <fieldset className='flex flex-col gap-2'>
                            <label htmlFor="pick-up-location" className='font-semibold'>Pick-up Location</label>
                            <input 
                                type="text" id='pick-up-location' 
                                name='pick-up-location' placeholder='Search' 
                                className='border rounded p-1 bg-no-repeat bg-left pl-6'
                                style={{backgroundImage: `url(${locationIcon})`}}
                                value={bookingDetails.pick_up}
                                onChange={(e) => updateBookingDetails({pick_up: e.target.value})}
                                required
                            />
                        </fieldset>

                        <fieldset className='flex flex-col gap-2'>
                            <label htmlFor="drop-off-location" className='font-semibold'>Drop-off Location</label>
                            <input 
                                type="text" id='drop-off-location' 
                                name='drop-off-location' placeholder='Search' 
                                className='border rounded p-1 bg-no-repeat bg-left pl-6'
                                style={{backgroundImage: `url(${locationIcon})`}}
                                value={bookingDetails.drop_off}
                                onChange={(e) => updateBookingDetails({drop_off: e.target.value})}
                                required
                            />
                        </fieldset>

                        <button type='submit' className='border w-full rounded-2xl p-1 bg-black text-white'>Submit</button>
                        
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookingForm;