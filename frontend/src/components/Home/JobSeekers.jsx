import React from 'react'
import { Link } from 'react-router-dom'

const JobSeekers = () => {
  return (
    <div className='bg-white px-8 text-black py-20 md:flex'>
        <div className='md:w-6/12'>
            <img src="https://job-hunter.noobnarayan.in/assets/happy-qmYJi4jH.svg" alt="img" />
        </div>
        <div className='md:w-6/12 flex flex-col items-start gap-2 justify-center md:gap-4'>
        <div className="text-black flex flex-col md:items-start gap-10 mt-10">
            <h2 className='text-xl font-semibold'>GOT TALENT?</h2>
            <h1 className='text-4xl font-bold font-sans'>Why job seekers love us</h1>
        </div>
        <div className="flex flex-col md:items-start gap-8 text-left">
          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" />
            <p>
              Unique jobs at <span className="font-semibold">startups</span> and
              <span className="font-semibold"> tech companies</span> you can't
              find anywhere else
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" />
            <p>
              Say goodbye to cover letters - your profile is all you need.
              <span className="font-semibold"> One click to apply</span> and
              you're done.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" />
            <p>
              Everything you need to know to job search - including seeing
              <span className="font-semibold"> salary</span> and
              <span className="font-semibold"> stock options</span> upfront when
              looking
            </p>
          </div>

          <div className=" flex items-center justify-center gap-4">
            <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" />
            <p>
              Connect directly with
              <span className="font-semibold"> founders</span> at top startups -
              no third party recruiters allowed
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="my-10">
          <Link to="/login">
            <button className="border border-gray-300 text-black font-medium py-2 px-5 rounded-xl md:shadow hover:bg-green-300 hover:border-green-500 duration-500 mr-5 md:hover:scale-105">
              Learn more
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-black text-white font-medium py-2 px-5 rounded-xl  hover:bg-green-700 duration-500 md:hover:scale-105 md:shadow">
              Sign up now
            </button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default JobSeekers