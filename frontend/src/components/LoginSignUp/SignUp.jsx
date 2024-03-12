import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userType, setUserType] = useState("jobSeeker");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="h-screen">
      <div className="hidden md:block bg-white p-2">
        <h1 className="text-2xl font-bold">_/Logo</h1>
      </div>
      <div className="bg-white text-black md:flex md:pl-16 md:h-screen">
        <div className="bg-black md:rounded-t-xl md:w-3/4 md:flex md:justify-end text-[#22C55E] p-3 text-center">
          <div className=" md:flex md:flex-col md:items-end">
            <h1 className="text-2xl md:mt-40 md:w-5/6 md:text-right  md:text-6xl font-bold">
              {
                userType==="employer"?"Unearth the gem your organization needs.":"Find the job made for you."
              }
            </h1>
            <h3 className="text-white mt-3 text-xl hidden md:block">
              {userType === "jobSeeker"
                ? "Browse over 130K jobs at top companies and fast-growing startups."
                : userType === "employer" &&
                  (Math.random() > 0.5
                    ? "Discover the perfect fit for your team."
                    : "Unreath the gem your organization needs.")}
            </h3>
          </div>
        </div>
        <div className="px-4 md:w-6/12 md:mx-6 pt-6 font-bold">
          <div className="flex flex-col gap-4 text-center mx-auto  text-lg md:flex md:flex-row md:w-full md:gap">
            <div
              className={`rounded-md px-5 py-1 cursor-pointer ${
                userType === "jobSeeker" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setUserType("jobSeeker")}
            >
              I am a Job seeker
            </div>
            <div
              className={`rounded-md px-5 py-1 cursor-pointer ${
                userType === "employer" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setUserType("employer")}
            >
              I am a Employer
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold ">Create Account</h1>
            <h6 className="text-lg">
              {userType === "employer"
                ? "Find the best talents!"
                : "Find your next opportunity!"}
            </h6>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col gap-3 mt-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-lg">
                {userType === "employer" ? "Company Name:" : "Full Name:"}
              </label>
              <input
                type="text"
                value={inputs.name}
                onChange={(e) =>
                  setInputs({ ...inputs, name: e.target.value })
                }
                className="bg-white border border-gray-700 p-2 rounded-lg font-semibold"
                placeholder={`Enter ${
                  userType === "employer" ? "company name" : "name"
                }`}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-lg">Email Address:</label>
              <input
                type="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className="bg-white border border-gray-700 p-2 rounded-lg font-semibold"
                placeholder="user@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-bold text-lg">
                Password:
              </label>
              <input
                value={inputs.password}
                type="password"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className="bg-white border border-gray-700 p-2 rounded-lg font-semibold"
                placeholder="min 8 characters"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-bold text-lg">
                Confirm Password:
              </label>
              <input
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className="bg-white border border-gray-700 p-2 rounded-lg font-semibold"
                placeholder="confirm password"
                required
              />
            </div>

            <div className="">
              <button className="w-full bg-black text-white p-2 rounded-lg">
                Create Account
              </button>
            </div>

            <div className="text-center mt-2 text-lg mb-12 md:mb-0 font-normal ">
              <p>
                Already have an account?{" "}
                <Link className="underline" to={"/login"}>
                  Login here
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
