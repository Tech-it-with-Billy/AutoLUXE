import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Checkout() {
    return (
        <div >
            <NavBar />
            <div className="flex bg-[url(/images/gif.jpg)] h-161 bg-cover bg-center items-center justify-center">
                <div className="flex bg-white/70 items-center justify-start w-250 h-150 rounded-xl gap-10 m-10 p-10">
                    <div className="flex flex-col w-120" >
                        <form action="submit">
                            <h1 className="text-3xl font-bold mb-3 text-center">Checkout</h1>
                            <div className="flex flex-col">
                                <label htmlFor="Customer">Email</label>
                                <input className="border-2 border-black rounded-md mb-5" type="email" id="Customer" name="Customer" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Address">Address</label>
                                <input className="border-2 border-black rounded-md mb-5" type="text" id="Address" name="Address" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="location">Pick-up location</label>
                                <input className="border-2 border-black rounded-md mb-5" type="text" id="location" name="location" required />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="date">From:</label>
                                    <input className="border-2 border-black rounded-md mb-5" type="date" id="date" name="date" required />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="date2">To:</label>
                                    <input className="border-2 border-black rounded-md mb-5" type="date" id="date2" name="date2" required />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="payment">Payment info:</label>
                                <input className="border-2 border-black rounded-md mb-5" type="text" id="payment" name="payment" placeholder="  Visa " required />
                            </div>
                            <button className="bg-black text-white p-2 rounded-3xl mt-3 w-full" type="submit">Confirm</button>
                        </form>
                    </div>
                    <div className="flex flex-col w-100 h-130 items-center justify-center border-2 border-black rounded-md p-5">
                        <h1 className="text-xl font-bold">Booking Summary</h1>
                        <p className="mt-5">Total amount: {}</p>
                        <p className="mt-5">Vehicle: {}</p>
                        <p className="mt-5">Days: {}</p>
                        <button className="w-50 rounded-3xl text-white bg-black mt-10 p-2">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;