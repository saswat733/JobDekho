import React from "react";

const Hero = () => {
  return (
    <div className="pt-10 flex">
      <div className="bg-[#E5E7EB] w-full md:w-6/12 text-black pt-10">
        <div className="ml-8 flex flex-col gap-4 md:gap-10">
          <h5 className="text-lg md:text-xl font-semibold">-/ Get Hired</h5>
          <div className="font-bold ">
            <h1 className="text-5xl md:text-6xl tracking-wide ">
              The Quickest Way
            </h1>
            <h1 className="text-5xl md:text-6xl tracking-wide"> to Hire!</h1>
          </div>
          <div className="text-wrap w-full text-lg font-semibold text-gray-800">
            <h6>
              We'll help you find{" "}
              <span className="text-black">Great Opportunities</span>, <br />{" "}
              Receive your top new job matches directly in your inbox.
            </h6>
          </div>

          <div className="md:flex md:gap-16">
            <div className="border-2 border-black w-fit p-4 font-bold tracking-wide flex justify-center items-center gap-6 mx-auto md:mx-0">
              <button className="">Join Our Platform</button>
              {/* Using Font Awesome 6 syntax for arrow icon */}
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="border text-center mt-4">
              <a className="font-bold underline">Download App</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-8 my-16 md:my-8">
            <div className=" p-4 border-2 border-black">
              {/* Using Font Awesome 5 syntax for star icon */}
              <i className="fa-regular fa-star text-4xl text-black"></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-3xl font-bold">1.4 Million</p>
              <p className=" text-sm font-semibold tracking-wide text-gray-700 ">
                Candidate Placed to Top <br /> Companies
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#22C55E] md:w-6/12 hidden md:block">
        <img
          src="https://job-hunter.noobnarayan.in/assets/heroImage-vwiRALxP.png"
          alt="hands"
        />
      </div>
    </div>
  );
};

export default Hero;
