import React from 'react'

const Success = () => {
  return (
    <div className="success py-[100px]">
        <div className="contain max-w-container mx-auto flex justify-between bg-[#E0FFF9] py-[70px] px-[50px] rounded-[20px]">
            <div className="txt w-[30%]">
                <p className='text-[#6A4DF4] text-[25px]'>Our Success</p>
                <h3 className='text-[35px] font-semibold'>West cost Brand makers-Global Edge</h3>
            </div>
            <div className="count flex justify-between w-[65%] items-center">
                <div className="item">
                    <h3 className='text-[50px] font-bold'>200+</h3>
                    <p className='text-[#555]'>Customer Satisfied</p>
                </div>
                <div className="item">
                    <h3 className='text-[50px] font-bold'>4.5</h3>
                    <p className='text-[#555]'>200+ Avg rating</p>
                </div>
                <div className="item">
                    <h3 className='text-[50px] font-bold'>351+</h3>
                    <p className='text-[#555]'>Project Delivered</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success