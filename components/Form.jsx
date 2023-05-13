import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";
import ZimoTeam from "../public/images/zimo-team.png";
import ZimoInternship from "../public/images/zimo-internship.png";
const Home = () => {
  const options = [
    { value: "project coordinator", label: "PROJECT COORDINATOR" },
    { value: "frontend next js", label: "FRONTEND NEXT JS" },
    { value: "backend laravel & node js", label: "BACKEND LARAVEL & NODE JS" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 400,
      height: 40,
      borderRadius: 10,
      borderColor: "#BE9F56",
    }),
    placeholder: (provided) => ({
      ...provided,
      textTransform: "uppercase",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
    }),
  };

  const defaultOption = { value: "default", label: "CHOOSE YOUR ROLE (FIELD)" };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      // Validation passed, submit the form
      console.log("Form submitted with option:", selectedOption);
      // Call your API or perform any other necessary actions here
    } else {
      // Validation failed, show an error message or highlight the Select component
      console.log("Please select an option");
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
      <div className="w-full">
        <div className="text-black py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
          APPLY
        </div>
        <div className="text-black py-2 px-4  font-Lato font-[20px] cursor-pointer">
          {" "}
          BACK
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative flex flex-col justify-around items-center font-Lato border-2 rounded-xl border-custom-golden w-[700px] h-[400px] border-3 border-red-700">
          <div className="font-[20px] font-Lato uppercase mt-3 mb-5 tracking-[2px]">
            {" "}
            YOUR APPLICATION{" "}
          </div>

          <form onSubmit={handleSubmit}>
            <div className=" w-[500px] h-[50px] rounded-lg border-gray-500">
            <input type="email" placeholder="EMAIL ADDRESS" required style={{ border: '1px solid #ccc', color: '#000' }} />

            </div>
            <div>
            <input type="email" placeholder="Confirm Email Address" required />
            </div>
            <div>
            <input type="text" placeholder="First Name" required />
            </div>
            <div>
            <input
              type="text"
              placeholder="Last Name (Including Middle Name)"
              required
            />
            </div>
            <div>
            <input type="text" placeholder="DD/MM/YYYY" required />
            </div>
            <Select
              options={options}
              defaultValue={defaultOption}
              styles={customStyles}
              placeholder="Phone code"
              isSearchable={false}
              onChange={handleChange}
              className="mb-5 "
              isRequired
            />
            <div className="flex items-center">
              <input type="tel" placeholder="Phone Code" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <button type="submit">
              <div className="absolute w-[100x] h-[100px] p-10 pt-17 pb-17 rounded-lg right-[-60px] bottom-2 text-white bg-black font-[20px] font-Lato uppercase text-center justify-center">
                APPLY
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-around my-10">
        <div>
          <Image
            src={ZimoTeam}
            alt="Zimo Career"
            width={300}
            height={45}
            className="mt-10 mb-10 ml-4"
          />
        </div>
        <div className="w-[30%]"></div>
        <div>
          <Image
            src={ZimoInternship}
            alt="Zimo Career"
            width={120}
            height={100}
            className="mt-10 mb-10"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
