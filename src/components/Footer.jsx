import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer py-[150px] bg-[#F3F3F3] px-[10px] lg:px-0">
      <div className="contain max-w-container mx-auto flex items-center">
        <div className="company w-[30%]">
          <img src={logo} alt="logo" />
          <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        </div>
        <div className="details w-[70%] px-[50px]">
          <div className="ullist lg:flex justify-between hidden">
            <ul className='flex flex-col gap-2'>
              <h3 className='text-[20px] font-bold'>About</h3>
              <li>About us</li>
              <li>Features</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
            <ul className='flex flex-col gap-2'>
              <h3 className='text-[20px] font-bold'>Company</h3>
              <li>Our Team</li>
              <li>Partner With Us</li>
              <li>FAQ</li>
              <li>Bing</li>
            </ul>
            <ul className='flex flex-col gap-2'>
              <h3 className='text-[20px] font-bold'>Support</h3>
              <li>About</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact us</li>
              <li>Accesbility</li>
            </ul>
            <ul className='flex flex-col gap-2'>
              <h3 className='text-[20px] font-bold'>Get in touch</h3>
              <li>info@gmail.com</li>
              <li>+880123456789</li>
              {/* This is Paros Rangsha Code */}
            </ul>
          </div>
          <div className="ullist lg:hidden flex w-[100%] justify-center items-start h-full">
            <ul>
              <h3 className='text-[24px] font-bold'>Know more</h3>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>Company</Link></li>
              <li><Link to='/'>Support</Link></li>
              <li><Link to='/'>Get in touch</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer