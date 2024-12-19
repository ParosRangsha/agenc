import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header w-full fixed top-0 left-0 bg-[#555]">
        <div className="contain  max-w-container mx-auto flex py-[30px] items-center">
            <div className="logo w-[30%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="menus w-[60%]">
                <ul>
                    <li>
                        <Link to='/' className='py-[15px] px-[42px] text-[18px] font-bold text-[#fff]'>Home</Link>
                        <Link to='/about' className='py-[15px] px-[42px] text-[18px] font-bold text-[#fff]'>About</Link>
                        <Link to='/service' className='py-[15px] px-[42px] text-[18px] font-bold text-[#fff]'>Service</Link>
                        <Link to='/career' className='py-[15px] px-[42px] text-[18px] font-bold text-[#fff]'>Career</Link>
                        <Link to='/contact' className='py-[15px] px-[42px] text-[18px] font-bold text-[#fff]'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="contactBtn">
                <Link to='/contact' className='py-[15px] px-[42px] text-[18px] font-bold bg-[#6A4DF4] rounded-[10px] text-[#fff]'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header