import React from 'react'
import Twb from '../img/web.png'
import Tui from '../img/ui.png'
import Tdv from '../img/dev.png'
import Tmo from '../img/motion.png'
import Ttd from '../img/3d.png'
import Tdm from '../img/dm.png'

const Provide = () => {
  return (
    <div className="provide py-[100px]">
        <div className="contain max-w-container mx-auto">
            <div className="heading w-[50%] mx-auto">
                <h2 className='text-[45px] font-bold text-center'>Our Provided Services</h2>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className="boxes flex flex-wrap py-[50px] justify-between">
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Twb} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tui} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tdv} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tmo} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Ttd} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className="items p-[50px] w-[32%] my-[5px] flex flex-col justify-center items-center border-[1px] border-[#ddd] rounded-[20px] hover:bg-[#ddd] transition duration-[0.5s]">
                    <img src={Tdm} alt="web" />
                    <h3 className='text-[25px] font-bold py-[20px]'>Web Design</h3>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Provide