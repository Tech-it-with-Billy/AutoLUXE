import React from 'react'
import '../index.css';
import NavBar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function BookingSummary() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className='relative flex justify-center items-center h-screen w-full overflow-hidden'>
                <video 
                    autoPlay muted loop playsInline 
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover">
                    <source src="/images/checkoutvid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 flex flex-col items-center justify-center w-4/6 rounded-2xl h-5/6 bg-black/20 text-black">
                    <h1 className="text-4xl text-center font-bold">Booking Summary</h1>
                    <p className="mt-4 text-lg font-bold">Confirm your details below</p>
                    <div>
                        <p>Name:</p>
                        <p>Vehicle:</p>
                        <p>From: To: </p>
                        <p>Total amount: </p>
                    </div>
                    <Link to={'/checkout'}>
                        <button className="w-45 rounded-2xl text-white bg-black mt-10 p-1">
                            Place Order
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookingSummary;