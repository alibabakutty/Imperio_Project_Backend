import React from 'react'
import { Link } from 'react-router-dom'

const Gateway = () => {
  return (
    <div >

        <div className='w-[250px] h-[50vh] bg-[#C0D6E8] ml-[950px] mt-20 border border-[#5BBCFF]'>

            <h2 className=' p-1 bg-[#074173] text-white text-center text-[14px]'>Gateway to DOMSS</h2>

            <p className='text-[12px] text-center mt-3 mb-2 text-[#5BBCFF]'>MASTERS</p>

            <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                <p className='m-0'>Create</p>
            </Link>
 
            <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                <p className='m-0'>Display</p>
            </Link>

            <Link to="/list" className='block text-center text-[14px] focus:bg-[#FEB941] outline-none mb-1'>
                <p className='m-0'>Alter</p>
            </Link>

        </div>
        
        
    </div>
  )
}

export default Gateway