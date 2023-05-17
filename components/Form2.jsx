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
        .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
        ">EMAIL IS REQUIRED</div>),
    email2: Yup.string()
        .email('Invalid email')
        .required(<div className="text-red-500 md:ml-[12rem] upper
    ">EMAIL IS REQUIRED</div>),
    firstname: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">FIRST NAME IS REQUIRED</div>),
    lastname: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">LAST NAME IS REQUIRED</div>),
    date: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">Date IS REQUIRED</div>),
    phonenumber: Yup.string()
        .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
        ">PHONE NUMBER IS REQUIRED</div>),
});


const Form2 = () => {
    const dispatch = useDispatch();
    const { c, country } = useSelector((state) => state.custom);
    console.log(c);
    console.log(country.country);

    const subBtn = () => {
        dispatch({ type: "decrement" });
    };
    // console.log(subBtn);

    // const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(selectedOption)

    // const handlePhoneChange = (event) => {
    //     setPhone(event.target.value);
    // };

    let defaultOption;
    if (country.country == "pakistan") {
        defaultOption =  { value: "+92", label: ( <div> <ReactCountryFlag countryCode="PK" svg style={{ width: "1em", height: "1em" }} title="+246" />{" "} +92 </div> )};
    } else if (country.country == "united states") {
        defaultOption =  { value: "+246", label: ( <div> <ReactCountryFlag countryCode="US" svg style={{ width: "1em", height: "1em" }} title="+246" />{" "} +246 </div> )};
    } else if (country.country == "united kingdom") {
        defaultOption =  { value: "+44", label: ( <div> <ReactCountryFlag countryCode="GB" svg style={{ width: "1em", height: "1em" }} title="+246" />{" "} +44 </div> )};
    } else {
        defaultOption = { value: "default", label: "Code" };
    }


    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };


    const options = [
        {value: "+92", label: (  <div><ReactCountryFlag countryCode="PK"  svg   style={{ width: "1em", height: "1em" }}  title="+246" />{" "} +92 </div> ), },
        {  value: "+44", label: ( <div> <ReactCountryFlag countryCode="GB" svg style={{ width: "1em", height: "1em" }}   title="+246"  />{" "}  +44 </div> ), },
        { value: "+246", label: ( <div> <ReactCountryFlag countryCode="US"svg style={{ width: "1em", height: "1em" }} title="+246" />{" "} +246 </div> ), },
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
        <div className='flex-col justify-between'>

            <div className="flex justify-between h-[100px] " >
                <div className="w-[20%]  h-[2vw]  ">
                    <div className="text-black text-2xl ml-8 mt-6  font-Lato text-[20px] tracking-[2px] cursor-pointer">
                        APPLY
                    </div>
                    <button onClick={subBtn}>
                        {" "}
                        <div className="text-black ml-8 mt-1 font-Lato text-[20px] tracking-[2px] cursor-pointer">
                            <Image src={BackArrow} alt="" height={15} width={20} /> BACK
                        </div>
                    </button>

                </div>

                <div className="md:mb-20 mr-32 md:mt-4">
                    <div className="md:text-2xl text-lg md:mr-32  md:mt-4 font-Lato font-uppercase mb-5 tracking-[2px]">
                        YOUR APPLICATION
                    
                    
                        <div className="flex items-center justify-center gap-x-2 my-2 md:mt-6">
                            <div className="bg-[#BE9f56] h-[2px] w-[2rem] lg:w-[3rem]"></div>
                            <div className="bg-black h-[2px] w-[2rem] lg:w-[3rem]"></div>
                            <div className="bg-black h-[2px] w-[2rem] lg:w-[3rem]"></div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    .
                </div>

            </div>

            <div className="w-full flex justify-center mt-[18vw] md:mt-[1rem]  h-[45rem] ">
                <div className="relative flex flex-col justify-around items-center font-Lato mt-4 max-w-[40rem] w-full px-6">



                    <div className="w-full flex" >
                        <Formik
                            initialValues={{ email: '', confirmemail: '', firstname: '', lastname: '', date: '', phonenumber: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({ isSubmitting }) => (
                                
                                <div className="overflow-x-hidden">
                                <Form>
                                    <div>
                                        <Field type="email" name="email" placeholder="Email address" className=" mb-2 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="email" />
                                    </div>
                                    <div>
                                        <Field type="email" name="email2" placeholder="Confirm Email address" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="email2" />
                                    </div>

                                    <div>
                                        <Field type="text" name="firstname" placeholder="First Name" className="tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="firstname" />
                                    </div>
                                    <div className="mb-3 text-[14px] w-[65vw] md:w-[40vw] md:text-[12px] text-[#737373] 2xl:static text-center  ">
                                        Use your legal name as it appears on your official documents
                                    </div>
                                    <div>
                                        <Field type="text" name="lastname" placeholder="LAST NAME INCLUDING MIDDLE NAME" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="lastname" />
                                    </div>

                                    
                                    <div>
                                    <Field
                                        type="date"
                                        name="date"
                                        placeholder="DD/MM/YYYY"
                                        style={{ textTransform: 'uppercase' }}
                                        className="tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black font-semibold placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                                    />
                                    <ErrorMessage name="date" />
                                    </div>



                                    <div className="my-2">
                                        <div className="text-black font-semibold placeholder:uppercase text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[70vw] md:w-[35rem] max-w-[700px]  outline-none bg-transparent  border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                                            {country.country}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center my-2 mr-[10vw] md:ml-2  md:w-[40vw] ">
                                        <Select
                                            options={options}
                                            defaultValue={defaultOption}
                                            styles={customStyles}
                                            placeholder="Phone code"
                                            isSearchable={false}
                                            onChange={handleChange}
                                            isRequired
                                        />
                                        <Field type="tel" name="phonenumber" placeholder="Phone number" className="  ml-2 w-[45vw]  tracking-[2px] md:tracking-[2px] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="phonenumber" />
                                    </div>


                                    <button type="submit" disabled={isSubmitting} className="absolute right-1/2  md:right-[-100px]  md:bottom-[120px] lg:flex items-center justify-center h-[90px] w-[100px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                        CONTINUE
                                    </button>
                                </Form>
                                </div>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>



            <div className='w-full flex justify-between mt-20  md:mt-10   '>
                <div className='ml-10  flex-col flex-end'>
                    <div> .</div>
                    <Image src={ZimoTeam} alt='Zimo Career' width={300} height={45} className='mt-12 mb-10' />
                </div>
                <div className='w-[30%]'>

                </div>
                <div className='mr-5 mb-5'>
                    <Image src={ZimoInternship} alt='Zimo Career' width={100} height={100} className='mt-5 mb-10' />
                </div>
            </div>
        </div>
    );
};

export default Form2;
