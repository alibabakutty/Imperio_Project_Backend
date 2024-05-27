import React from 'react'
import { Link } from 'react-router-dom'

const ListofMasters = () => {
  return (
    <div>

        <div className='w-[250px] ml-[950px] mt-20 border border-gray-600'>

                    
        <div className='bg-[#C0D6E8] h-[50vh]'>

            <h2 className=' p-1 bg-[#074173] text-white text-center text-[14px]'>List of Masters</h2>

            <Link to="/region" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-10 mb-1'>
                <p className='m-0'>Region Master</p>
            </Link>

            <Link to="/executive" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                <p className='m-0'>Executive Master</p>
            </Link>

            <Link to="/distributor" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                <p className='m-0'>Distributor Master</p>
            </Link>
            
            <Link to="/product" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mt-1 mb-1'>
                <p className='m-0'>Product Master</p>
            </Link>
            
            
        </div>


        </div>


    </div>
  )
}

export default ListofMasters