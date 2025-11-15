import React from "react";
import "../index.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function BookingSummary() {
    return (
        <div >
            <NavBar />
            <div className="flex bg-[url(/images/gif.jpg)] h-screen bg-cover bg-center items-center justify-center">
                <div className="flex flex-col bg-white/70 items-center justify-start w-120 h-120 rounded-xl m-5 p-10">
                    <div className="flex flex-col w-80 h-130 items-center justify-center border-2 border-black rounded-md p-5">
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

export default BookingSummary;