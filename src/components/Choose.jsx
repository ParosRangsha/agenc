import React from 'react'
import meeting from '../img/meeting.png'
import light from '../img/light.png'
const Choose = () => {
  return (
    <div className="choose">
        <div className="contain max-w-container mx-auto">
            <div className="heading w-[50%] mx-auto">
                <h1 className='text-[45px] font-bold text-center py-[20px]'>Why You Should Choose Agenc</h1>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="detais flex py-[50px] items-center">
                <div className="txt w-[70%] flex flex-wrap justify-between">
                    <div className="box w-[48%] p-[30px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] p-[30px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] p-[30px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                    <div className="box w-[48%] p-[30px] my-[5px]">
                        <img src={light} alt="" />
                        <h3 className='text-[25px] font-bold py-[20px]'>Innovative Ideas</h3>
                        <p>Because each project is different, we adapt to your business model.</p>
                    </div>
                </div>
                <div className="thumb w-[30%] h-full">
                    <img src={meeting} alt="meeting" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose