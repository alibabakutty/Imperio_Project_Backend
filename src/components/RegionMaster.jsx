import React from 'react'
import { IoClose } from 'react-icons/io5'




const RegionMaster = () => {


  


  return (
    <div className='w-1/2 border '>

        <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[750px] mt-10'>
            <h2 className='ml-2'>Region Master</h2>
            <span className='cursor-pointer mt-[5px] mr-2'>
                <IoClose />
            </span>
        </div>

        <div className='w-[550px] h-[20vh] border border-gray-500 ml-[750px] '>


            <form>
                

                <div className='input-ldgr  mr-4 mt-3 ' >
                    <label htmlFor="regionMasterId" className='text-sm mr-12 ml-2'>Region Master ID</label>
                    : <input type="text" id='regionMasterId' name='regionMasterId'   className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none ' autoComplete='off'  /> <br />
                    
                </div>

                <div className='input-ldgr  mr-4 mt-1 ' >
                    <label htmlFor="regionName" className='text-sm mr-[71px] ml-2' >Region Name</label>
                    : <input type="text" id='regionName' name='regionName'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'   />
                    
                </div>


                <div className='input-ldgr   '  >
                    <label htmlFor="RegionState" className='text-sm mr-[78px] ml-2'>Region State</label>
                    : <input type="text" id='regionState' name='regionState'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>

                <div className='input-ldgr   '  >
                    <label htmlFor="country" className='text-sm mr-[107px] ml-2'>Country</label>
                    : <input type="text" id='country' name='country'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>




                

                

                

                
                


            </form>
            
        </div>

        <div className='flex justify-center mt-[380px]'>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'    >A: Accept</button>

        </div>   
        
    </div>
  )
}

export default RegionMaster