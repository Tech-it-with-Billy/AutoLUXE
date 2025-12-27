import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useBookingStore } from "./BookingStore";

function BookingSummary() {

    const { vehicle, bookingDetails, resetBooking } = useBookingStore();

    const handlePlaceOrder = async() => {
        const payload = {
            vehicle,
            bookingDetails,
        }

        await fetch("url", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })

        resetBooking()
    }
    
    return (
        <div >
            <NavBar />
            <div className="flex bg-[url(/images/gif.jpg)] h-screen bg-cover bg-center items-center justify-center">
                <div className="flex flex-col bg-white/70 items-center justify-start w-120 h-140 rounded-xl m-5 p-10">
                    <div className="flex flex-col w-80 h-150 items-center justify-center border-2 border-black rounded-md p-5">
                        <h1 className="text-xl font-bold">Booking Summary</h1>
                        <p>Name: {bookingDetails.name}</p>
                        <p className="mt-5">Vehicle: {vehicle.name}</p>
                        <p>From: {bookingDetails.startDate} To: {bookingDetails.startDate}</p>
                        <p className="mt-5">Total amount: {}</p>
                        <button 
                            className="w-50 rounded-3xl text-white bg-black mt-10 p-2"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSummary;