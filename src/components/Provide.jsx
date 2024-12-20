import React from 'react'
import Twb from '../img/web.png'
import Tui from '../img/ui.png'
import Tdv from '../img/dev.png'
import Tmo from '../img/motion.png'
import Ttd from '../img/3d.png'
import Tdm from '../img/dm.png'

const Provide = () => {
  return (
    <div className="provide lg:py-[100px] py-[50px]">
        <div className="contain max-w-container mx-auto">
            <div className="heading w-[50%] mx-auto">
                <h2 className=' lg:text-[75px] text-[28px] font-bold text-center'>Our Provided Services</h2>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className="boxes flex flex-wrap py-[50px] justify-between">
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Twb} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tui} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tdv} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tmo} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Ttd} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items lg:p-[50px] p-[15px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tdm} alt="web" className='w-[30%]' />
                    <h3 className='lg:text-[25px] text-[20px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Provide