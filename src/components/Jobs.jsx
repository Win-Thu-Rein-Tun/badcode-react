import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { Data } from '../constants';

const Jobs = () => (
  <div>
    <div className='flex gap-10 justify-center items-center py-10 flex-wrap'>

      {Data.map(({id,image,title,time,location,desc,company}) => {
        return (
          <div key={id} className='group w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg group-hover:text-white'>

        <span className='flex justify-between items-center gap-4'>
          <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
          <span className='flex items-center gap-1 text-[#ccc]'>
          <BiTimeFive /> {time}
          </span>
        </span>
        <h6 className='text-[#ccc]'>{location}</h6>

        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
          {desc}
        </p>

        <div className='flex gap-2 items-center'>
          <img src={ image } alt="" className='w-[10%]'/>
          <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
        </div>

        <button className='border-[2px] rounded-[10px] w-full py-[10px] hover:bg-white '>
          Apply Now
        </button>

        </div>
        )
      })}

    </div>
  </div>
);


export default Jobs