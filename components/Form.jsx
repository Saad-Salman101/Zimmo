import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";
import ZimoTeam from "../public/images/zimo-team.png";
import ZimoInternship from "../public/images/zimo-internship.png";
import BackArrow from "../public/images/back-arrow.png";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);
  console.log(c);

  const subBtn = () => {
    dispatch({ type: "decrement" });
  };

  const [email, setEmail] = useState("");
  const [confirmemail, setConfirmEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  const handleLastChange = (event) => {
    setLastName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const defaultOption = { value: "default", label: "Code" };
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const options = [
    {
      value: "+92",
      label: (
        <div>
          <ReactCountryFlag
            countryCode="PK"
            svg
            style={{ width: "1em", height: "1em" }}
            title="+246"
          />{" "}
          +92
        </div>
      ),
    },
    {
      value: "+44",
      label: (
        <div>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ width: "1em", height: "1em" }}
            title="+246"
          />{" "}
          +44
        </div>
      ),
    },
    {
      value: "+246",
      label: (
        <div>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ width: "1em", height: "1em" }}
            title="+246"
          />{" "}
          +246
        </div>
      ),
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 130,
      height: 50,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `First Name: ${firstname}, Last Name: ${lastname} , Email: ${email}, Confirm Email: ${confirmemail}, Date: ${date}, code ${selectedOption}`
    );
  };

  return (
    <>
    <div className="flex flex-start">
      <div className="w-[20%]">
        <div className="text-black text-2xl py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
          APPLY
        </div>
        <button onClick={subBtn}>
          {" "}
          <div className="text-black text-2xl py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
            <Image src={BackArrow} alt="" height={10} width={15} /> BACK
          </div>
        </button>
      </div>

      <div className="w-[70%] flex justify-center  mt-5">
        <div className="relative flex flex-col justify-around items-center font-Lato  w-[50rem] ">

          <div className="mb-20">
          <div className="text-2xl font-Lato font -uppercase mb-5 tracking-[2px]">            
            YOUR APPLICATION
          </div>
          <div>
            <div className="flex items-center justify-center gap-x-2 my-2">
              <div className="bg-[#BE9f56] h-[2px] w-[2rem] lg:w-[3rem]"></div>
              <div className="bg-black h-[2px] w-[2rem] lg:w-[3rem]"></div>
              <div className="bg-black h-[2px] w-[2rem] lg:w-[3rem]"></div>
            </div>
          </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <input
                type="email"
                id="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required=""
                placeholder="EMAIL ADDRESS"
                className="tracking-[2px] md:tracking-[0px] w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px]  placeholder:tracking-[2px]  max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="my-2">
              <input
                type="email"
                id="confirmEmail"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required=""
                placeholder="CONFIRM EMAIL ADDRESS"
                className="tracking-[2px] md:tracking-[2px] w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                onChange={handleConfirmEmailChange}
                value={confirmemail}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                id="name"
                required=""
                placeholder="FIRST NAME"
                className="tracking-[2px] md:tracking-[2px] w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstname}
              />
              <div className="text-[14px] md:text-[12px] text-[#737373] 2xl:static text-center ">
                Use your legal name as it appears on your official documents
              </div>
            </div>
            <div className="my-3">
              <input
                type="text"
                id="lastname"
                required=""
                placeholder="LAST NAME INCLUDING MIDDLE NAME"
                className="tracking-[2px] md:tracking-[2px] w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                onChange={handleLastChange}
                value={lastname}
              />{" "}
            </div>
            <div className="my-2">
              <input
                type="date"
                id="date"
                required=""
                placeholder="DD/MM/YYYY"
                className="tracking-[2px] md:tracking-[2px] w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                onChange={handleDateChange}
                value={date}
              />
            </div>

            <div className="my-2">
              <div className="text-black font-normal text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[35rem] max-w-[700px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                Pakistan
              </div>
            </div>

            <div className="flex items-center justify-center my-2 ">
              <Select
                options={options}
                defaultValue={defaultOption}
                styles={customStyles}
                placeholder="Phone code"
                isSearchable={false}
                onChange={handleChange}
                isRequired
              />
              <input
                type="tel"
                id="phone"
                required=""
                placeholder="PHONE NUMBER"
                className="tracking-[2px] ml-3 md:tracking-[2px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] w-[26rem] text-center  bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                onChange={handlePhoneChange}
                value={phone}
              />
            </div>

            <button
              type="submit"
              className="absolute md:right-[-60px] md:bottom-2 lg:flex items-center justify-center  h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
            >
              CONTINUE
            </button>
          </form>
        </div>
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

export default Form;
