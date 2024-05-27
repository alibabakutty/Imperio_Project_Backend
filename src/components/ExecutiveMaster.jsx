import React from 'react'
import { IoClose } from 'react-icons/io5'

const ExecutiveMaster = () => {
  return (
    <div className='w-1/2 border'>

        <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[750px] mt-10'>
            <h2 className='ml-2'>Executive Master</h2>
            <span className='cursor-pointer mt-[5px] mr-2'>
                <IoClose />
            </span>
        </div>

        <div className='w-[550px] h-[30vh] border border-gray-500 ml-[750px] '>


            <form>
                

                <div className='input-ldgr  mr-4 mt-3 ' >
                    <label htmlFor="executiveCode" className='text-sm mr-7 ml-2'>Executive Code</label>
                    : <input type="text" id='executiveCode' name='executiveCode'   className='w-[300px] ml-[6px] h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none ' autoComplete='off'  /> <br />
                    
                </div>

                <div className='input-ldgr  mr-4 mt-1 ' >
                    <label htmlFor="executiveMaster" className='text-sm mr-[17px] ml-2' >Executive Master</label>
                    : <input type="text" id='executiveMaster' name='executiveMaster'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'   />
                    
                </div>


                <div className='input-ldgr    '  >
                    <label htmlFor="dateOfJoin" className='text-sm mr-[48px] ml-2'>Date of Join</label>
                    : <input type="text" id='dateOfJoin' name='dateOfJoin'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>

                <div className='input-ldgr    '  >
                    <label htmlFor="mobileNo" className='text-sm mr-[56px] ml-2'>Mobile No</label>
                    : <input type="text" id='mobileNo' name='mobileNo'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>


                <div className='input-ldgr    '  >
                    <label htmlFor="emailId" className='text-sm mr-[72px] ml-2'>Email ID</label>
                    : <input type="text" id='emailId' name='emailId'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>

                
                <div className='input-ldgr    '  >
                    <label htmlFor="status" className='text-sm mr-[85px] ml-2'>Status</label>
                    : <input type="text" id='status' name='status'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>
                

                


            </form>
            
        </div>

        <div className='flex justify-center mt-[300px]'>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'    >A: Accept</button>

        </div>



    </div>
  )
}

export default ExecutiveMaster