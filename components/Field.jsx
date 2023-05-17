/* eslint-disable @next/next/no-img-element */
// import React,{useState} from 'react';
// import Select from 'react-select';
import Image from 'next/image';
import ZimoCareer from '../public/images/zimo-careers.png';
import ZimoTeam from '../public/images/zimo-team.png'
import ZimoInternship from '../public/images/zimo-internship.png'
import { useSelector, useDispatch } from 'react-redux';
import BackArrow from '../public/images/back-arrow.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Feild = () => {

  const dispatch = useDispatch();
  const { c, role } = useSelector((state) => state.custom)
  console.log(c)
  { role !== null ? console.log(role) : console.log('0123') }

  // const setfield = ()=>{
  //   dispatch(
  // {    type: "setrole",}
  //   );
  // };

  const addBtn = () => {
    dispatch(
      { type: "increament", }
    );
  };
  const subBtn = () => {
    dispatch(
      { type: "decrement", }
    );
  };
  const setrole = (myvalue) => {
    dispatch(
      {
        type: "setrole",
        payload: myvalue
      }


    );
  };


  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);
    addBtn();
    setrole(values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.role) {
      errors.role = 'Please select a role';
    }
    return errors;
  };

  const roles = [
    { value: 'project coordinator', label: 'PROJECT COORDINATOR' },
    { value: 'frontend next js', label: 'FRONTEND NEXT JS' },
    { value: 'backend laravel & node js', label: 'BACKEND LARAVEL & NODE JS' },
  ];
  return (
    <div className=' flex-col justify-between '>
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


      <div className='w-full flex justify-center items-center  h-[60%] md:mt-0 mt-[200px]'>
        <div className="relative flex flex-col justify-around items-center font-Lato border-[1px] rounded-xl  w-[80%]  md:w-[700px] h-[400px] border-3 border-custom-golden">
          <div className='font-[20px] font-Lato uppercase mt-6 mb-5 tracking-[2px]'> START YOUR APPLICATION </div>
          <Image src={ZimoCareer} alt='Zimo Career' className='mt-10 mb-10' />
          <Formik
            initialValues={{ role: role ? role.role : '' }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  component='select'
                  name='role'
                  className="tracking-[2px] md:tracking-[2px] w-[40vw] md:w-[20vw] placeholder:uppercase placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                >
                  <option value='' disabled>Select your role</option>
                  {roles.map((myrole) => (
                    <option key={myrole.value} value={myrole.value}>
                      {myrole.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name='role'
                  component='div'
                  className='text-red-500 text-sm mt-1 '
                />
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='absolute w-[120px] h-[100px] md:w-[120px] md:h-[120px] p-10 pt-17 pb-17 rounded-lg right-1/3 bottom-[-100px]  md:right-[-60px] md:bottom-2 text-white bg-black font-[20px] font-Lato uppercase text-center justify-center'
                >
                  APPLY
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>


      <div className='w-full flex justify-between mt-[200px] md:mt-10  h-[10vw] '> 
      <div className='ml-10  flex-col flex-end md:w-[20%] h-auto w-[40%]'>
        <div> .</div>
        <div> .</div>
      <Image src={ZimoTeam} alt='Zimo Career' layout='responsive' className='mt-12 mb-10' />
      </div>
      <div className='w-[20%]'>
        
      </div>
      <div className='mr-10 mb-5  flex-col flex-end md:w-[10%] h-auto w-[20%]'>
  <Image src={ZimoInternship} alt='Zimo Career' layout='responsive' className='mt-2 mb-10' />
  <div>.</div>
  <div>.</div>
</div>
      </div>
    </div>
  );
};

export default Feild;
