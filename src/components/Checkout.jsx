import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useBookingStore } from "./BookingStore";

function Checkout() {

    const { bookingDetails, updateBookingDetails } = useBookingStore();
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div >
            <NavBar />
            <div className="flex bg-[url(/images/gif.jpg)] h-screen bg-cover bg-center items-center justify-center">
                <div className="flex flex-col bg-white/70 items-center justify-start w-120 h-150 rounded-xl gap-10 m-10 p-10">
                    <div className="flex flex-col w-100" >
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-3xl font-bold mb-3 text-center">Checkout</h1>
                            <div className="flex flex-col">
                                <label htmlFor="Customer">Full Name</label>
                                <input 
                                    className="border-2 border-black rounded-md mb-5" 
                                    type="text" id="Customer" name="Customer"  
                                    value= {bookingDetails.name}
                                    onChange={(e) => updateBookingDetails({name: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Customer">Email</label>
                                <input 
                                    className="border-2 border-black rounded-md mb-5" 
                                    type="email" id="Customer" name="Customer" 
                                    value={bookingDetails.email}
                                    onChange={(e) => updateBookingDetails({email: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Address">Address</label>
                                <input 
                                    className="border-2 border-black rounded-md mb-5" 
                                    type="text" id="Address" name="Address" 
                                    value={bookingDetails.address}
                                    onChange={(e) => updateBookingDetails({address: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="location">Pick-up location</label>
                                <input 
                                    className="border-2 border-black rounded-md mb-5" 
                                    type="text" id="location" name="location" 
                                    value={bookingDetails.pickupLocation}
                                    onChange={(e) => updateBookingDetails({pickupLocation: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="date">From:</label>
                                    <input 
                                        className="border-2 border-black rounded-md mb-5" 
                                        type="date" id="date" name="date" 
                                        value={bookingDetails.startDate}
                                        onChange={(e) => updateBookingDetails({startDate: e.target.value})}
                                        required 
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="date2">To:</label>
                                    <input 
                                        className="border-2 border-black rounded-md mb-5" 
                                        type="date" id="date2" name="date2" 
                                        value={bookingDetails.endDate}
                                        onChange={(e) => updateBookingDetails({endDate: e.target.value})}
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="payment">Payment info:</label>
                                <input 
                                    className="border-2 border-black rounded-md mb-5" 
                                    type="text" id="payment" name="payment" placeholder=" Visa card " 
                                    value={bookingDetails.payment}
                                    onChange={(e) => updateBookingDetails({payment: e.target.value})}
                                    required 
                                />
                            </div>
                            <Link to={'/booking'}>
                                <button className="bg-black text-white p-2 rounded-3xl mt-3 w-full" type="submit">
                                    Submit
                                </button>
                            </Link>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout;