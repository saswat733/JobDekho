import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [inputs, setinputs] = useState({
        email:"",
        password:"",
    })
    const handleLogin=()=>{

    }
  return (
    <>
    <div className="hidden md:block bg-white p-2">
        <h1 className='text-2xl font-bold'>_/Logo</h1>
    </div>
    <div className='bg-white text-black h-screen md:flex  md:pl-16'>
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
            <form action={handleLogin} className='flex flex-col gap-3 mt-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-bold text-lg'>Email:</label>
                    <input type="email" onClick={(e)=>setinputs({...inputs,email:e.target.value})} className='bg-white border border-gray-700 p-2 rounded-lg font-semibold' placeholder='Email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='font-bold text-lg'>Password:</label>
                    <input type="password" onClick={(e)=>setinputs({...inputs,password:e.target.value})} className='bg-white border border-gray-700 p-2 rounded-lg font-semibold' placeholder='Password' />
                </div>
                <div className='flex justify-end underline tracking-wide '>
                    <Link to={'/forgotPassword'}>Forget Password?</Link>
                </div>
                <div className=''>
                    <button className=' w-full bg-black text-white p-2 rounded-lg'>Login</button>
                </div>

                <div className=' text-center mt-2 text-lg '>
                    <p>Don't have an account? <Link className='underline' to={'/signup'}>Sign up</Link> </p>
                </div>
            </form>
        </div>
      
    </div>
    </>
  )
}

export default Login
