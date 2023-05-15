import React,{useState} from 'react';
import Select from 'react-select';
import Image from 'next/image';
import ZimoCareer from '../public/images/zimo-careers.png';
import ZimoTeam from '../public/images/zimo-team.png'
import ZimoInternship from '../public/images/zimo-internship.png'
import { useSelector,useDispatch } from 'react-redux';
import BackArrow from '../public/images/back-arrow.png'
const Home = () => {
  const options = [
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'united states', label: 'United States' },
    { value: 'united kingdome', label: 'Uniked Kingdome' },
  ];

  const dispatch = useDispatch();
  const {c} = useSelector((state)=>state.custom)
  console.log(c)

  const addBtn = ()=>{
  dispatch(
{    type: "increament",}
  );
};

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 400,
      height: 40,
      borderRadius: 10,
      borderColor: '#BE9F56',
    }),
    placeholder: (provided) => ({
      ...provided,
      textTransform: 'uppercase',
      fontSize: '20px',
      textAlign: 'center',
    }),
  };

  const defaultOption = { value: 'default', label: 'SELECT YOUR COUNTRY' };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      // Validation passed, submit the form
      addBtn();
      console.log('Form submitted with option:', selectedOption);
      
      // Call your API or perform any other necessary actions here
    } else {
      // Validation failed, show an error message or highlight the Select component
      console.log('Please select an option');
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
      <div className="w-[20%] ">
        <div className="text-black text-2xl py-2 px-4 mt-4  mb-10 font-Lato font-[20px] cursor-pointer">
          APPLY
        </div>
        <button >
          {" "}
          <div className="text-black text-2xl py-2 hidden px-4 mt-4 font-Lato font-[20px] cursor-pointer">
            <Image src={BackArrow} alt="" height={10} width={15} /> BACK
          </div>
        </button>
      </div>
      <div className='w-full flex justify-center'>
        <div className="relative flex flex-col justify-around items-center font-Lato border-2 rounded-xl border-custom-golden sm:w-[400px]  md:w-[700px] h-[400px] border-3 border-custom-golden">
          <div className='font-[20px] font-Lato uppercase mt-3 mb-5 tracking-[2px]'> START YOUR APPLICATION </div>
          <Image src={ZimoCareer} alt='Zimo Career' className='mt-10 mb-10' />
            <form onSubmit={handleSubmit}>
          <Select
            options={options}
            defaultValue={defaultOption}
            styles={customStyles}
            placeholder="SELECT YOUR COUNTRY"
            isSearchable={false}
            onChange={handleChange}
            className='mb-5 '
            isRequired
          />
          <button type='submit' > 
          <div className='absolute w-[100x] h-[100px] p-10 pt-17 pb-17 rounded-lg right-[50px] bottom-[-70px]  md:right-[-60px] md:bottom-2 text-white bg-black font-[20px] font-Lato uppercase text-center justify-center'>Start</div></button>
          </form>
        </div>
      </div>
      <div className='w-full flex justify-around my-10 mt-20'> 
      <div>
      <Image src={ZimoTeam} alt='Zimo Career' width={300} height={45} className='mt-10 mb-10 ml-4' />
      </div>
      <div className='w-[30%]'>
        
      </div>
      <div>
      <Image src={ZimoInternship} alt='Zimo Career' width={120} height={100} className='mt-10 mb-10' />
      </div>
      </div>
    </>
  );
};

export default Home;
