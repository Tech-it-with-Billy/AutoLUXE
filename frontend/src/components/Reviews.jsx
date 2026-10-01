import React from "react";
import "../index.css";

function Reviews () {
    return (
        <div className="flex flex-col m-10 gap-10">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
                    <h1 className="text-3xl font-bold">What Our Customers Say</h1>
                </div>
                <div className="flex flex-row gap-2 lg:gap-5 w-20 lg:w-40 h-10">
                    <img src="/images/arrowL.png" alt="" />
                    <img src="/images/arrowRBlack.png" alt="" />
                </div>
            </div>
            <div>
                <p className="text-2xl" >“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”</p>
            </div>
            <div className="flex flex-row items-center gap-5">
                <img src="/images/reviewP1.png" alt="" />
                <div>
                    <h1 className="text-xl font-bold">Lokman Hossain</h1>
                    <p className="text-xs">From Texas</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;