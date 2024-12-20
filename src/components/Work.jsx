import React from 'react'
import workA from '../img/work1.png'
import workB from '../img/work2.png'
import workC from '../img/work3.png'
import workD from '../img/work4.png'
import workE from '../img/work5.png'
import workF from '../img/work6.png'

const Work = () => {
  return (
    <div className="work lg:py-[100px] py-[50px]">
        <div className="contain max-w-container mx-auto">
            <div className="heading w-[50%] mx-auto">
                <h1 className=' lg:text-[75px] text-[28px] font-bold text-center py-[20px]'>Our Recent Work</h1>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className="boxes flex flex-wrap justify-between">
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workA} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workB} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workC} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workD} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workE} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
                <div className="items flex flex-col justify-center items-center w-[32%] hover:bg-[#ddd] p-[20px] rounded-[20px] transition duration-[0.5s] my-[5px]">
                    <img src={workF} alt="work" />
                    <h3 className='text-[20px] font-bold py-[15px]'>Task Management App</h3>
                    <p className='text-center'>This is a task management application that can help you be more </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work