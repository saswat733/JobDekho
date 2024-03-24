import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxLabel from "../common/FormComponents/CheckBoxLabel";
import SelectInput from "../common/FormComponents/SelectInput";
import InputField from "../common/FormComponents/InputField";
import CompanySearch from "../common/CompanySearch";
import Checkbox from "../common/FormComponents/CheckBox";

function UserOnboarding() {
  const InitialFormData = {
    location: "",
    primaryRole: "",
    yearsOfExperience: "",
    companyName: "",
    companyLogo: "",
    companyDomain: "",
    title: "",
    notEmployed: false,
    linkedin: "",
    website: "",
  };

  const navigate = useNavigate();
  const [showDropdown, setshowDropdown] = useState(true);
  const [formData, setformData] = useState(InitialFormData);
  const handleSubmission = () => {};

  const handleInputChange = (e) => {
    const { id, type } = e.target;

    if (type === "checkbox") {
      setformData((prevFormData) => ({
        ...prevFormData,
        [id]: !prevFormData[id],
      }));
    } else {
      const { value } = e.target;
      setformData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const locationOptions = [
    { value: "default", label: "Select Country" },
    { value: "india", label: "India" },
    { value: "united_states", label: "United States" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "australia", label: "Australia" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "japan", label: "Japan" },
    { value: "china", label: "China" },
    { value: "brazil", label: "Brazil" },
    { value: "south_africa", label: "South Africa" },
  ];

  const roleOptions = [
    {
      label: "Technical Roles",
      options: [
        { value: "software_engineer", label: "Software Engineer" },
        { value: "data_scientist", label: "Data Scientist" },
        { value: "system_admin", label: "System Administrator" },
      ],
    },
    {
      label: "Management Roles",
      options: [
        { value: "project_manager", label: "Project Manager" },
        { value: "product_manager", label: "Product Manager" },
        { value: "team_lead", label: "Team Lead" },
      ],
    },
    {
      label: "Design Roles",
      options: [
        { value: "ui_designer", label: "UI Designer" },
        { value: "ux_designer", label: "UX Designer" },
        { value: "graphic_designer", label: "Graphic Designer" },
      ],
    },
  ];

  const experienceOptions = [
    { value: "default", label: "Select years of experience" },
    { value: "0", label: "Less than 1 year" },
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "6", label: "More than 5 years" },
  ];

  return (
    <div className={`bg-[#EBEFF5] h-full`}>
      <div className="px-5 pb-10 md:px-10">
        <div className="pt-20 text-center text-black text-6xl font-semibold ">
          <h1 className="font-semibold">Create your profile</h1>
          <p className=" text-lg font-normal mt-7">
            Apply privately to thousands of tech companies & startups with one
            profile.
          </p>
        </div>
        <div className="w-full bg-white p-5 rounded-xl mt-10">
          <form onSubmit={handleSubmission}>
            <div className="">
              <div className="text-lg text-black font-semibold">
                <div className="">
                  <p className="flex gap-2 items-center">
                    <span className="text-green-500 font-bold">*</span>
                    <span>Where are you based?</span>
                  </p>
                  <p className="hidden">
                    Tip: You can choose a city, state, or country
                  </p>
                  <CheckBoxLabel text={formData.location} />
                  <SelectInput
                    id="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    options={locationOptions}
                    className={"w-full md:w-1/2"}
                  />
                </div>

                <div className="mt-4">
                  <p className="flex gap-2 items-center">
                    <span className="text-green-500 font-bold">*</span>
                    <span>What best describes your current role?</span>
                  </p>
                  <p className="hidden">
                    Tip: You can choose a city, state, or country
                  </p>
                  <CheckBoxLabel text={formData.primaryRole} />
                  <SelectInput
                    id="primaryRole"
                    value={formData.primaryRole}
                    onChange={handleInputChange}
                    options={roleOptions}
                    optgroup={true}
                    className={"w-full md:w-1/2"}
                  />
                </div>

                <div className="mt-4">
                  <p className="flex gap-2 items-center">
                    <span className="text-green-500 font-bold">*</span>
                    <span>
                      How many years of experience do you have in your current
                      role?
                    </span>
                  </p>
                  <p className="hidden">
                    Tip: You can choose a city, state, or country
                  </p>
                  <CheckBoxLabel
                    text={
                      formData.yearsOfExperience &&
                      `${formData.yearsOfExperience} years`
                    }
                  />
                  <SelectInput
                    id="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    options={experienceOptions}
                    className={"w-full md:w-1/2"}
                  />
                </div>

                <div className="mt-4 flex flex-col justify-center">
                  <p className="flex gap-2 items-center">
                    <span className="text-green-500 font-bold">*</span>
                    <span>Where do you currently work?</span>
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Your company will never see that you're looking for a job
                  </p>
                  <CheckBoxLabel text={formData.companyName} />
                  <div className={formData.notEmployed ? "hidden" : ""}>
                    <InputField
                      label="Title"
                      id="title"
                      onChange={handleInputChange}
                      value={formData.title}
                      isRequired={!formData.notEmployed}
                      placeholder="SDE 1"
                      className={"w-full md:w-1/2"}
                    />
                  </div>
                  <div className={showDropdown ? "" : "hidden"}>
                    <CompanySearch
                      handleDropdown={""}
                      width={"w-full md:w-1/2"}
                    />
                    <div className={showDropdown ? "" : "hidden"}>
                      <label htmlFor="">
                        Company
                        <span className="text-gray-500">*</span>
                      </label>
                      <div className="flex justify-between items-center my-2.5 p-2 bg-white rounded-md shadow-sm border">
                        <div className="flex items-center ">
                          <img
                            src={formData.companyLogo}
                            alt={formData.companyName}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <span className="font-semibold">
                            {formData.companyName}
                          </span>
                        </div>
                        <i
                          className="fa-solid fa-x text-gray-400 hover:cursor-pointer mr-3 text-xs"
                          onClick={() => handleDropdown({ name: "", logo: "" })}
                        ></i>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center my-3 ml-1.5">
                      <Checkbox
                        label={"I'm not currently employed"}
                        name="notEmployed"
                        id="notEmployed"
                        checked={formData.notEmployed}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="my-4  bg-gray-100 font-normal p-4 rounded-lg ">
                  <InputField
                    label={"Linkdin Profile"}
                    id={"linkdin"}
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder={"https://www.linkdin.com/in/username"}
                    className={"w-full mt-4 md:w-1/2 flex flex-col gap-3"}
                  />
                  <InputField
                    label={"Your website"}
                    id={"website"}
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder={"https://mypersonalwebsite.com"}
                    className={"w-full mt-4 md:w-1/2 flex flex-col gap-3"}
                  />
                </div>
                <button type="submit" className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full mt-4">Create your profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserOnboarding;
