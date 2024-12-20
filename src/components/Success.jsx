import React from 'react'

const Success = () => {
  return (
    <div className="success lg:py-[100px] py-[50px]">
        <div className="contain max-w-container mx-auto flex justify-between bg-[#E0FFF9] py-[70px] l:px-[50px] px-[10px] rounded-[20px]">
            <div className="txt w-[30%]">
                <p className='text-[#6A4DF4] lg:text-[25px] text-[20px]'>Our Success</p>
                <h3 className='lg:text-[35px] text-[24px] font-semibold'>West cost Brand makers-Global Edge</h3>
            </div>
            <div className="count flex justify-between w-[65%] items-center">
                <div className="item">
                    <h3 className='lg:text-[50px] text-[28px] font-bold'>200+</h3>
                    <p className='text-[#555]'>Customer Satisfied</p>
                </div>
                <div className="item">
                    <h3 className='lg:text-[50px] text-[28px] font-bold'>4.5</h3>
                    <p className='text-[#555]'>200+ Avg rating</p>
                </div>
                <div className="item">
                    <h3 className='lg:text-[50px] text-[28px] font-bold'>351+</h3>
                    <p className='text-[#555]'>Project Delivered</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success