import React, { useEffect, useRef, useState } from 'react'

const RegionFilter = () => {


    const [regionMasterId, setRegionMasterId] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        
        inputRef.current.focus();

    })

  return (


    

    <div className='flex'>

        <div className='w-[45%] h-[100vh] bg-[#DDDDDD]'>

        </div>


        <div className='w-[45%] h-[100vh] bg-[#EEEEEE] flex flex-col items-center justify-start'>
            
           <div className='w-[50%] h-16 flex flex-col justify-center items-center border border-black bg-white border-b-0 '>
                <p className='text-[13px] font-semibold underline underline-offset-4 decoration-gray-400'>Region Display</p> 
                <input type="text" id='regionMasterId' name='regionMasterId' value={regionMasterId} onChange={(e) => setRegionMasterId(e.target.value)} ref={inputRef} className='w-[250px] ml-2 mt-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' />
           </div>

           <div className='w-[350px] h-[85vh] border border-gray-600 bg-[#def1fc] '>

                        
                <h2 className=' p-1 bg-[#2a67b1] text-white text-center text-[14px]'>List of Region</h2>

                

                


            </div>

            <div>
                <button type='submit' className='border bg-gray-500 px-5 mt-1'>Accept</button>
            </div>

        </div>

        <div className='w-[10%] bg-[#DDDDDD] h-[100vh]'>

        </div>
        

    </div>
  )
}

export default RegionFilter