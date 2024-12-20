import React, { useState } from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";



const Header = () => {
    let [show, setshow] = useState(false)
    let handleshow = ()=>{
        setshow(!show)
    }
  return (
    <div className="header w-full fixed top-0 left-0 bg-[#555] lg:px-[0px] px-[10px]">
        <div className="contain  max-w-container mx-auto flex py-[10px] items-center">
            <div className="logo w-[30%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="menus w-[60%]">
                <ul className={`absolute top-[100%] right-0 w-[30%] bg-[#555] h-[100vh] transition duration-[1s] ${show ?  'right-0': 'right-[-100%]'}`}>
                    <li>
                        <Link to='/' className='lg:py-[15px] py-[5px] block lg:px-[42px] text-[18px] font-bold text-[#fff] text-center'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='lg:py-[15px] py-[5px] block lg:px-[42px] text-[18px] font-bold text-[#fff] text-center'>About</Link>
                    </li>
                    <li>
                        <Link to='/service' className='lg:py-[15px] py-[5px] block lg:px-[42px] text-[18px] font-bold text-[#fff] text-center'>Service</Link>
                    </li>
                    <li>
                        <Link to='/career' className='lg:py-[15px] py-[5px] block lg:px-[42px] text-[18px] font-bold text-[#fff] text-center'>Career</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='lg:py-[15px] py-[5px] block lg:px-[42px] text-[18px] font-bold text-[#fff] text-center'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='text-[#fff]'>
                {show? <GiCrossedBones onClick={handleshow}/> : <FaBars onClick={handleshow}/>}
            </div>
        </div>
    </div>
  )
}

export default Header