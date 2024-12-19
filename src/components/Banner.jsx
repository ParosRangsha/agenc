import React from 'react'
import Ban from '../img/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner bg-cover" style={{backgroundImage:`url(${Ban})`}}>
        <div className="shade bg-[#00000090] py-[315px]">
            <div className="contain  max-w-container mx-auto flex flex-col justify-center items-center">
                <h1 className='text-center text-[75px] font-bold text-[#fff] w-[75%]'>We Help brands with high quality services</h1>
                <p className='text-center text-[#fff] w-[60%] py-[20px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                <Link to='/service' className='py-[15px] px-[42px] bg-[#6A4DF4] rounded-[10px] text-[#fff] font-bold'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Banner