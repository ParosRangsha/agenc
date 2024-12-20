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
    <div className="header w-full fixed top-0 left-0 lg:px-[0px] px-[10px]">
        <div className="contain  max-w-container mx-auto flex py-[10px] items-center">
            <div className="logo w-[30%]">
                <img src={logo} alt="logo" />
            </div>
            <div className="menus w-[60%]">
                <ul className={`absolute top-[100%] right-0 w-[20%] bg-[#555] h-[100vh] transition duration-[1s] ${show ?  'scale-0': 'scale-1'}`} style={{borderRadius:'10px 0 0 10px'}}>
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
            <div>
                {show? <a onClick={handleshow} className='p-[10px] bg-[#555] inline-block z-10'><GiCrossedBones onClick={handleshow} className='text-[#fff] z-10'/></a> : <a onClick={handleshow} className='p-[10px] bg-[#555] inline-block z-10'><FaBars onClick={handleshow} className='text-[#fff] z-10'/></a>}
            </div>
        </div>
    </div>
  )
}

export default Header