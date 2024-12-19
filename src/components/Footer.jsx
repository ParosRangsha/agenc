import React from 'react'
import logo from '../img/logo.png'

const Footer = () => {
  return (
    <div className="footer py-[150px] bg-[#F3F3F3]">
      <div className="contain max-w-container mx-auto flex">
        <div className="company w-[30%]">
          <img src={logo} alt="logo" />
          <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        </div>
        <div className="details w-[70%] px-[50px] flex justify-between">
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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer