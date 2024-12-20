import React from 'react'
import meeting from '../img/meeting.png'
import light from '../img/light.png'
const Choose = () => {
  return (
    <div className="choose">
        <div className="contain max-w-container mx-auto lg:px-0 px-[10px]">
            <div className="heading lg:w-[50%] w-full mx-auto">
                <h1 className=' lg:text-[75px] text-[28px] font-bold text-center py-[20px]'>Why You Should Choose Agenc</h1>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="details lg:flex py-[50px] items-center">
                <div className="txt lg:w-[70%] w-full flex flex-wrap justify-between">
                    <div className="box w-[48%] lg:p-[30px] p-[20px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] lg:p-[30px] p-[20px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] lg:p-[30px] p-[20px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] lg:p-[30px] p-[20px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                </div>
                <div className="thumb lg:w-[30%] h-full">
                    <img src={meeting} alt="meeting" className='w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose