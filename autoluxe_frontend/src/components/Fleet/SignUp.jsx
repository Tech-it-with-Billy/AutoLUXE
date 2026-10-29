import React, { useState } from "react";
import "../../index.css"; 
import NavBar from "../navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";


function FleetSignUp() {
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        setError('');
        setSuccess('');
        setLoading(true);

        const nameParts = formData.name.trim().split(/\s+/);

        if (!nameParts[0]) {
            setError('Please enter your name.');
            setLoading(false);
            return;
        }

        const userData = {
            name: nameParts[0],
            email: formData.email.trim(),
            password: formData.password,
        };

        try {
            await registerUser(userData);
            setSuccess('Account created successfully, please login!')
            setTimeout(() => navigate('/login'), 1000);
        } catch (err) {
            const data = err.data
            if (data?.email) {
                setError(`Email: ${data.email.join(' ')}`);
            } else if (data?.password) {
                setError(`Password: ${data.password.join(' ')}`);
            } else if (data?.detail) {
                setError(data.detail);
            } else if (data && Object.keys(data).length > 0) {
                setError(
                    Object.entries(data)
                        .map(([field, messages]) =>
                            `${field}: ${
                                Array.isArray(messages)
                                    ? messages.join(" ")
                                    : String(messages)
                            }`
                        )
                        .join(" ")
                );
            } else {
                setError("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <NavBar />
            <div className="flex flex-row justify-center items-center p-5 gap-5">
                <div className="w-120">
                    <img className="w-full h-150 rounded-xl" src="/images/cars/regdark.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-5 w-120 p-20 h-150  justify-center">
                    <h1 className="text-2xl font-bold">Sign up for AutoLUXE Fleet</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name*</label>
                        <input 
                            className="border-1 w-70 block mb-4 p-2 rounded-md" 
                            type="text" 
                            id="name" 
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="email">Email*</label>
                        <input 
                            className="border-1 w-70 block mb-4 p-2 rounded-md" 
                            type="email" 
                            id="email" 
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <label htmlFor="password">Password*</label>
                        <input 
                            className="border-1 w-70 block mb-4 p-2 rounded-md" 
                            type="password" 
                            id="password" 
                            name="password" 
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        {error && (
                            <p role="alert" className="text-red-600 mb-3">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p role="status" className="text-green-600 mb-3">
                                {success}
                            </p>
                        )}
                        
                        <button 
                            className="w-70 bg-black text-white p-3 rounded-3xl mt-2" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Creating account...' : 'Register'}
                        </button>
                    
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FleetSignUp;