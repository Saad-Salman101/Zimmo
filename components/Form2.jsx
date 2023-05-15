import React, { useState } from "react";
import Image from "next/image";
import ZimoTeam from "../public/images/zimo-team.png";
import ZimoInternship from "../public/images/zimo-internship.png";
import BackArrow from "../public/images/back-arrow.png";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    confirmemail: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    firstname: Yup.string()
        .required('first name is required'),
    lastname: Yup.string()
        .required('last name is required'),
    date: Yup.string()
        .required('Date is required'),
});


const Form2 = () => {
    const dispatch = useDispatch();
    const { c } = useSelector((state) => state.custom);
    console.log(c);

    const subBtn = () => {
        dispatch({ type: "decrement" });
    };
    console.log(subBtn);

    // const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(selectedOption)

    // const handlePhoneChange = (event) => {
    //     setPhone(event.target.value);
    // };

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

    return (
        <>
            <div className="flex md:flex-start">
                <div className="w-[20%]">
                    <div className="text-black md:text-2xl text-lg   py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
                        APPLY
                    </div>
                    <button onClick={subBtn}>
                        <div className="text-black md:text-2xl text-lg  l py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
                            <Image src={BackArrow} alt="" height={10} width={15} /> BACK
                        </div>
                    </button>
                </div>
            


                <div className="w-[70%] flex justify-center mt-5">
                <div className="relative flex flex-col justify-around items-center font-Lato  w-[50rem] ">

                    <div className="mb-20">
                        <div className="md:text-2xl text-lg  font-Lato font -uppercase mb-5 tracking-[2px]">
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

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <Field type="email" name="email" placeholder="Email" className="tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="email" />
                                </div>
                                <div>
                                    <Field type="email" name="conformemail" placeholder="Confirm Email" className="tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="conform email" />
                                </div>

                                <div>
                                    <Field type="text" name="firstname" placeholder="First Name" className="tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="firstname" />
                                </div>
                                <div className="text-[14px] md:text-[12px] text-[#737373] 2xl:static text-center ">
                                    Use your legal name as it appears on your official documents
                                </div>
                                <div>
                                    <Field type="text" name="lastname" placeholder="LAST NAME INCLUDING MIDDLE NAME" className="tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="lastname" />
                                </div>

                                <div>
                                    <Field type="date" name="date" placeholder="DD/MM/YYYY" className="tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="date" />
                                </div>
                                <div className="my-2">
                                    <div className="text-black font-normal text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[12rem] md:w-[35rem] max-w-[700px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
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
                                    <Field type="tel" name="phone" placeholder="Phone number" className=" ml-2 w-[10rem] md:w-[25rem] tracking-[2px] md:tracking-[2px] md:w-[35rem] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                    <ErrorMessage name="phone" />
                                </div>


                                <button type="submit" disabled={isSubmitting} className="absolute right-[150px] md:right-[-60px] md:bottom-2 lg:flex items-center justify-center  h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                    CONTINUE
                                </button>
                            </Form>
                        )}
                    </Formik>

                </div>
                </div>
            </div>


            <div className="w-full flex justify-around my-10 mt-32">
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

export default Form2;
