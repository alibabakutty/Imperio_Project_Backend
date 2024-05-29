import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/font.css'

const Gateway = () => {
  return (
    <div className='flex'>

        <div className='w-[45%] bg-[#DDDDDD] h-[100vh]'>
            
        </div>



        <div className='w-[45%] bg-[#EEEEEE] h-[100vh] flex justify-center'>
            
            <div className='w-[350px] h-[70vh] bg-[#def1fc]  mt-20 border border-[#5BBCFF]'>

                <h2 className=' p-1 bg-[#2a67b1] text-white text-center text-[14px]'>Gateway to DOMSS</h2>

                <p className='text-[12px] text-center mt-3 mb-2 text-[#686D76]'>MASTERS</p>

                <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                    <p className='m-0'>Create</p>
                </Link>

                <Link to="/display" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                    <p className='m-0'>Display</p>
                </Link>

                <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                    <p className='m-0'>Alter</p>
                </Link>

                <p className='text-[12px] text-center mt-3 mb-2 text-[#686D76]'>TRANSACTIONS</p>

                <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                    <p className='m-0'>Vouchers</p>
                </Link>

                <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                    <p className='m-0'>DayBook</p>
                </Link>

            </div>

        </div>



        <div className='w-[10%] bg-[#DDDDDD] h-[100vh]'>

        </div>

        
        
        
    </div>
  )
}

export default Gateway