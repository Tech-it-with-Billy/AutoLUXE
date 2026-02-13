import React, { useState, useEffect } from 'react'
import '../index.css';
import NavBar from './navbar';
import Footer from './Footer';
import { useBookingStore } from '../context/BookingStore';

function BookingSummary() {
    const { vehicle, bookingDetails, updateBookingDetails} = useBookingStore();
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        if (!bookingDetails.from || !bookingDetails.to || !vehicle) return;

        const start = new Date(bookingDetails.from);
        const end = new Date(bookingDetails.to);

        const diffTime = end - start;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) return;

        const totalCost = (diffDays * Number(vehicle.cost)).toFixed(2);

        updateBookingDetails({
            days: diffDays,
            total: totalCost,
        });
    }, [bookingDetails.from, bookingDetails.to, vehicle, updateBookingDetails]);

    async function handlePlaceOrder () {
        if (!vehicle) return;

        setLoading(true);

        const payload = {
            vehicle_id: vehicle.id, ...bookingDetails,
        }

        try {
            const response = await fetch('/booking', {
                method: 'POST',
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                throw new Error('Failed to place order.')
            }

            const data = await response.json()

            alert('Order placed successfully!')
            resetBooking()
            
            return data;
        } catch (error) {
            console.error('Error placing order:', error)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <div className="flex flex-col min-h-screen">
            <div className='relative z-50'>
                <NavBar />
            </div>
            <div className='relative flex justify-center items-center h-screen w-full overflow-hidden'>
                <video 
                    autoPlay muted loop playsInline 
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover">
                    <source src="/images/checkoutvid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 flex flex-col items-center justify-center w-5/6 rounded-2xl h-5/6 bg-white/40 text-black">
                    <h1 className="text-4xl text-center font-bold">Booking Summary</h1>
                    <p className="mt-4 text-xl font-bold">Confirm your details below</p>
                    <div className=' flex flex-col p-3 gap-3'>
                        <div className='flex gap-5'>
                            <p className='font-bold'>Name: </p>
                            <p>{bookingDetails.name}</p>
                        </div>
                        <div className='flex gap-5'>
                            <p className='font-bold'>Vehicle: </p>
                            <p>{vehicle.name}</p>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex gap-3'>
                                <p className='font-bold'>From:</p>
                                <p>{bookingDetails.from}</p>
                            </div>
                            <div className='flex gap-3'>
                                <p className='font-bold'>To:</p>
                                <p>{bookingDetails.to}</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <p className='font-bold'>Total: </p>
                            <p>${bookingDetails.total}</p>
                        </div>
                    </div>
                    <button onClick={handlePlaceOrder} className="w-45 rounded-2xl text-white bg-black mt-10 p-1">
                        Place Order
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookingSummary;