import React from 'react'
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineHome } from "react-icons/ai" 
import { MdLocationPin } from "react-icons/md"
import { useState } from 'react';

const Search = () => {

  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleClearClick1 = () => {
    setInputValue1('');
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleClearClick2 = () => {
    setInputValue2('');
  };

  const clearAllClick = () => {
    setInputValue(''), setInputValue1(''),setInputValue2('')
  };

  return(
  <div className='grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
    <form action="#">

      <div className='flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

        <div className='flex gap-2 items-center'>
         <AiOutlineSearch className='text-[25px] icon'/>
         <input type="text" value={inputValue} onChange={handleInputChange} className=' text-blue-500 focus:outline-none w-[100%] ' placeholder='Search Job ...'/>
          <AiOutlineCloseCircle className={'text-[30px] text-slate-500 hover:text-textColor icon'} onClick={handleClearClick}/>
        </div>

        <div className='flex gap-2 items-center'>
         <AiOutlineHome className='text-[25px] icon'/>
         <input type="text" value={inputValue1} onChange={handleInputChange1} className=' text-blue-500 focus:outline-none w-[100%] ' placeholder='Search by Company ...'/>
          <AiOutlineCloseCircle className={'text-[30px] text-slate-500 hover:text-textColor icon'} onClick={handleClearClick1}/>
        </div>

        <div className='flex gap-2 items-center'>
         <MdLocationPin className='text-[25px] icon'/>
         <input type="text" value={inputValue2} onChange={handleInputChange2} className=' text-blue-500 focus:outline-none w-[100%] ' placeholder='Search by Location ...'/>
          <AiOutlineCloseCircle className={'text-[30px] text-slate-500 hover:text-textColor icon'} onClick={handleClearClick2}/>
        </div>

        <button className='bg-blueColor p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
          Search
        </button>

      </div>
      
    </form>

      <div className='flex items-center gap-10 justify-center'>
        <div className='flex items-center gap-2'>
          <label htmlFor="#" className='text-slate-500 font-semibold'>Sort by : </label>
          <select name="#" id="#" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="#">Relevance</option>
            <option value="#">Inclusive</option>
            <option value="#">Starts With</option>
            <option value="#">Contains</option>
          </select>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="#" className='text-slate-500 font-semibold'>Type : </label>
          <select name="#" id="#" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="#">Full-Time</option>
            <option value="#">Remote</option>
            <option value="#">Contract</option>
            <option value="#">Part-Time</option>
          </select>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="#" className='text-slate-500 font-semibold'>Sort by : </label>
          <select name="#" id="#" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="#">Beginner</option>
            <option value="#">Junior</option>
            <option value="#">Senior</option>
            <option value="#">Specialist</option>
          </select>
        </div>
        <button className='text-white hover:bg-black p-2 bg-slate-500 rounded-md' onClick={clearAllClick}>Clear All</button>
      </div>
      
  </div>
)}

export default Search