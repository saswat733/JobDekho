import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setloading(true);

        try {
            const response = await axios.post('api/v1/users/login', inputs);
            console.log(response);
            setSuccess(true);
        } catch (error) {
            console.log("error in login:", error.message);
            setError("Failed to login. Please check your credentials.");
        }
    };

    if (success) {
        return <Navigate to={'/home'} />;
    }

    return (
        <>
            <div className="hidden md:block bg-white p-2">
                <h1 className='text-2xl font-bold'>_/Logo</h1>
            </div>
            <div className='bg-white text-black h-screen md:flex md:pl-16'>
                <div className="bg-black md:rounded-t-xl md:w-3/4 md:flex md:justify-end text-[#22C55E] p-3 text-center">
                    <div className="">
                        <h1 className='text-2xl md:mt-40 md:w-5/6 md:text-right  md:text-6xl font-bold'>Find the job made for you.</h1>
                        <h3 className='text-white mt-3 text-xl hidden md:block'>Browse over 130K jobs at top companies and fast-growing startups.</h3>
                    </div>
                </div>
                <div className="px-4 md:w-6/12 md:mx-6 pt-6">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold '>Login</h1>
                        <h6 className='text-lg'>Find the job made for you!</h6>
                    </div>
                    <form onSubmit={handleLogin} className='flex flex-col gap-3 mt-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-bold text-lg'>Email:</label>
                            <input type="email" name="email" value={inputs.email} onChange={handleInputChange} className='bg-white border border-gray-700 p-2 rounded-lg font-semibold' placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='font-bold text-lg'>Password:</label>
                            <input type="password" name="password" value={inputs.password} onChange={handleInputChange} className='bg-white border border-gray-700 p-2 rounded-lg font-semibold' placeholder='Password' />
                        </div>
                        <div className='flex justify-end underline tracking-wide '>
                            <Link to={'/forgotPassword'}>Forget Password?</Link>
                        </div>
                        <div className=''>
                            
                            <button type="submit" className=' w-full bg-black text-white p-2 rounded-lg'>
                                {
                                    loading?('Loading...'):('Login')
                                }
                            </button>
                            
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                        <div className=' text-center mt-2 text-lg '>
                            <p>Don't have an account? <Link className='underline' to={'/signup'}>Sign up</Link> </p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Login;
