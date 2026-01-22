import React from "react";
import "../index.css";
import NavBar from "./navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact () {
    return (
        <div className="h-screen bg-black">
            <NavBar />
            <div className="flex items-center justify-center h-5/6">
                <div className="flex flex-col lg:flex-row bg-white w-120 lg:w-240 h-150 gap-10 items-center justify-center rounded-xl">
                    <div className="flex flex-col w-100 gap-2">
                        <h1 className="text-3xl font-bold">Get in touch</h1>
                        <div>
                            <p className="font-bold">Email:</p>
                            <p>autoluxe@drive.com</p>
                        </div>
                        <div>
                            <p className="font-bold">Phone:</p>
                            <p>+0000000001</p>
                        </div>
                        <div>
                            <p className="font-bold">Address:</p>
                            <p>1234 Nairobi, Kenya</p>
                        </div>
                        <div className=" flex flex-col gap-1">
                            <p  className="font-bold">Follow us</p>
                            <div className="flex gap-4 w-35 h-5 items-center justify-center rounded-xl bg-black">
                                <img src="/images/ig.png" alt="" />
                                <img src="/images/web.png" alt="" />
                                <img src="/images/x.png" alt="" />
                                <img src="/images/youtube.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-100 gap-4">
                        <form className="flex flex-col gap-5" action="submit">
                            <div className="flex">
                                <div>
                                    <label htmlFor="name">Your name:</label>
                                    <input className="border-1 rounded" type="text" id="name" name="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email address:</label>
                                    <input className="border-1 rounded" type="email" id="email" name="email" required />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message">Message:</label>
                                <textarea className="border-1 rounded w-95" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="p-2 border-2 border-black rounded-3xl w-96 bg-black text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;