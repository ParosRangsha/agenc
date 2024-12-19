import React from 'react'
import quote from '../img/quote.png'
import man from '../img/man.png'
import { FaStar } from "react-icons/fa";



const Reviews = () => {
  return (
    <div className="reviews">
        <div className="contain max-w-container mx-auto py-[50px]">
            <div className="heading w-[50%] mx-auto">
                <h1 className='text-[45px] font-bold text-center py-[20px]'>Some Client Reviews</h1>
                <p className='text-center text-[#555]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            </div>
            <div className="boxes flex justify-between">
                <div className="items w-[32%] hover:bg-[#ddd] transition duration-[0.5s] p-[60px] rounded-[30px] my-[20px]">
                    <img src={quote} alt="quote" className='py-[15px]' />
                    <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    <div className="star flex justify-between w-[30%] py-[20px] text-[#F9BD2C]">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <div className="profile flex gap-2 items-center">
                        <div className="thumb">
                            <img src={man} alt="man" />
                        </div>
                        <div className="title">
                            <h3 className='text-[20px] font-semibold'>Eric Drake</h3>
                            <p className='text-[#555]'>Digital Marketor</p>
                        </div>
                    </div>
                </div>
                <div className="items w-[32%] hover:bg-[#ddd] transition duration-[0.5s] p-[60px] rounded-[30px] my-[20px]">
                    <img src={quote} alt="quote" className='py-[15px]' />
                    <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    <div className="star flex justify-between w-[30%] py-[20px] text-[#F9BD2C]">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <div className="profile flex gap-2 items-center">
                        <div className="thumb">
                            <img src={man} alt="man" />
                        </div>
                        <div className="title">
                            <h3 className='text-[20px] font-semibold'>Eric Drake</h3>
                            <p className='text-[#555]'>Digital Marketor</p>
                        </div>
                    </div>
                </div>
                <div className="items w-[32%] hover:bg-[#ddd] transition duration-[0.5s] p-[60px] rounded-[30px] my-[20px]">
                    <img src={quote} alt="quote" className='py-[15px]' />
                    <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    <div className="star flex justify-between w-[30%] py-[20px] text-[#F9BD2C]">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <div className="profile flex gap-2 items-center">
                        <div className="thumb">
                            <img src={man} alt="man" />
                        </div>
                        <div className="title">
                            <h3 className='text-[20px] font-semibold'>Eric Drake</h3>
                            <p className='text-[#555]'>Digital Marketor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews