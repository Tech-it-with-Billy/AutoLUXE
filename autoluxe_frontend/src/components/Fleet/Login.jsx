import React, { useState } from "react";
import "../../index.css";
import NavBar from "../navbar";
import Footer from "../Footer";
import { Link, useNavigate, useLocation, replace } from "react-router-dom";
import { loginUser } from "../../services/api"; 

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const token = await loginUser({
                email: formData.email.trim(),
                password: formData.password,
            });
            if (!token.access || !token.refresh) {
                throw new Error("The server did not return both tokens");
            }
            sessionStorage.setItem('accessToken', token.access);
            sessionStorage.setItem('refreshToken', token.refresh);

            navigate('/fleet-dashboard', {replace: true});
        } catch (err) {
            if (err.status === 401) {
                setError("Invalid email or password.");
            } else if (err.data?.detail) {
                setError(err.data.detail);
            } else {
                setError(
                    err.message === "The server did not return both tokens."
                        ? err.message
                        : "Unable to log in. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <NavBar />
            <div className="flex flex-row justify-center items-center gap-5 p-5">
                <div className="w-120">
                    <img className="w-full h-150 rounded-xl" src="/images/cars/regdark.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-5 p-20 h-150  justify-center">
                    <h1 className="text-2xl font-bold">Login to AutoLUXE Fleet</h1>
                    {location.state?.message && (
                        <p role="status" className="text-green-700">
                            {location.state.message}
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
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
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        {error && (
                            <p role="alert" className="text-red-600 mb-3">
                                {error}
                            </p>
                        )}
                        
                        <button 
                            className="w-70 bg-black text-white p-3 rounded-3xl mt-2" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <div className="flex gap-3 mt-3">
                        <p>Don't have an account? </p>
                        <Link to={'/fleet-signup'} className="hover:text-blue font-bold">Sign up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;