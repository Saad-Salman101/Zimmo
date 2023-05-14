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
    { value: 'project coordinator', label: 'PROJECT COORDINATOR' },
    { value: 'frontend next js', label: 'FRONTEND NEXT JS' },
    { value: 'backend laravel & node js', label: 'BACKEND LARAVEL & NODE JS' },
  ];

  const dispatch = useDispatch();
  const {c} = useSelector((state)=>state.custom)
  console.log(c)
const addBtn = ()=>{
  dispatch(
{    type: "increament",}
  );
};
const subBtn = ()=>{
  dispatch(
{    type: "decrement",}
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
      fontWeight: 'bold',
      textAlign: 'center',
      
    }),
  };

  const defaultOption = { value: 'default', label: 'CHOOSE YOUR ROLE (FIELD)' };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      addBtn();
      console.log('Form submitted with option:', selectedOption);
    } else {
      console.log('Please select an option');
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
       <div className="w-32">
        <div className="text-black text-2xl py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer">
          APPLY
        </div>
        <button onClick={subBtn} > <div className="text-black text-2xl py-2 px-4 mt-4 font-Lato font-[20px] cursor-pointer"><Image src={BackArrow} alt="" height={10} width={15} /> BACK</div></button>
      </div>
      <div className='w-full flex justify-center'>
        <div className="relative flex flex-col justify-around items-center font-Lato border-2 rounded-xl border-custom-golden w-[700px] h-[400px] border-3 border-custom-golden">
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
          <button type='submit' > <div className='absolute w-[100x] h-[100px] p-10 pt-17 pb-17 rounded-lg right-[-60px] bottom-2 text-white bg-black font-[20px] font-Lato uppercase text-center justify-center'>APPLY</div></button>
          </form>
        </div>
      </div>
      <div className='w-full flex justify-around my-10'> 
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
