import React from "react";
import "../index.css";
import NavBar from "./navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div>
            <NavBar />
            <div className="flex flex-row justify-center items-center p-5 gap-5">
                <div className="w-120">
                    <img className="w-full h-150 rounded-xl" src="/images/cars/regdark.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-5 w-120 p-20 h-150  justify-center">
                    <h1 className="text-2xl font-bold">Sign up for AutoLUXE</h1>
                    <form action="submit">
                        <label htmlFor="name">Name*</label>
                        <input className="border-1 w-70 block mb-4 p-2 rounded-md" type="text" id="name" name="name" required />
                        <label htmlFor="email">Email*</label>
                        <input className="border-1 w-70 block mb-4 p-2 rounded-md" type="email" id="email" name="email" required />
                        <label htmlFor="password">Password*</label>
                        <input className="border-1 w-70 block mb-4 p-2 rounded-md" type="password" id="password" name="password" required />
                        <button className="w-70 bg-black text-white p-3 rounded-3xl mt-2" type="submit">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;