import React from 'react'
import { Link } from 'react-router-dom'

const DisplayOFMasters = () => {
  return (
    <div className='flex'>

        <div className='w-[45%] h-[100vh] bg-[#DDDDDD]'>

        </div>


        <div className='w-[45%] h-[100vh] bg-[#EEEEEE]'>

            <div className='flex justify-center items-center flex-col'>

                <div className='w-[350px] h-[70vh] border border-gray-600 mt-20 bg-[#def1fc]'>

                            
                    <h2 className=' p-1 bg-[#2a67b1] text-white text-center text-[14px]'>List of Masters</h2>

                    <p className='text-[13px] ml-[120px] mt-12 text-[#686D76]'>DOMSS MASTER</p>

                    <Link to="/regionFilter" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-2 mb-1'>
                        <p className='m-0'>Region Master</p>
                    </Link>

                    <Link to="/executiveFilter" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                        <p className='m-0'>Executive Master</p>
                    </Link>

                    <Link to="/distributorFilter" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                        <p className='m-0'>Distributor Master</p>
                    </Link>

                    <Link to="/productFilter" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                        <p className='m-0'>Product Master</p>
                    </Link>


                </div>

                <div className='mt-[70px] '>
                    <Link to={"/"} className='border px-11 py-[5px] text-sm bg-slate-600 hover:bg-slate-800 '>Back</Link>
                </div>

            </div>


            

        </div>

        <div className='w-[10%] bg-[#DDDDDD] h-[100vh]'>

        </div>
        

    </div>
  )
}

export default DisplayOFMasters