import React from 'react'

const Message = () => {
  return (
    <div className="message py-[100px] bg-[#ddd] lg:px-[0] px-[10px]">
        <div className="contain max-w-container mx-auto flex justify-between">
            <div className="txt w-[45%]">
                <h3 className='lg:text-[45px] text-[28px] font-bold'>We Do design, Code & Development</h3>
                <p className='text-[#555]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority. I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
            <div className="send w-[50%]">
                <div className="box bg-[#fff] lg:p-[45px] p-[20px] rounded-[20px]">
                    <h3 className='lg:text-[30px] text-[20px] font-bold'>Get a free quote now</h3>
                    <label htmlFor="uName" className='py-[10px] block'>Name</label>
                    <input type="text" id='uName'  placeholder='Enter your name' className='lg:py-[20px] py-[8px] lg:px-[24px] px-[10px] w-full border-[1px] border-[#ddd]'/>

                    <label htmlFor="uMail" className='py-[10px] block'>Name</label>
                    <input type="text" id='uMail'  placeholder='Enter your email' className='lg:py-[20px] py-[8px] lg:px-[24px] px-[10px] w-full border-[1px] border-[#ddd]'/>
                    
                    <label htmlFor="uPhone" className='py-[10px] block'>Name</label>
                    <input type="text" id='uPhone'  placeholder='Enter your phone number' className='lg:py-[20px] py-[8px] lg:px-[24px] px-[10px] w-full border-[1px] border-[#ddd]'/>
                    <button className='w-full bg-[#6A4DF4] rounded-[10px] lg:py-[20px] py-[10px] text-center font-bold text-[#fff] my-[50px]'>Get Pricing Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message