import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { createNewExecutiveMaster } from '../services/MasterService';
import '../assets/css/font.css'


const ExecutiveMaster = () => {


    const [executiveCode, setExecutiveCode] = useState('');
    const [executiveMaster, setExecutiveMaster] = useState('');
    const [dateOfJoin, setDateOfJoin] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [emailId, setEmailId] = useState('');
    const [status, setStatus] = useState('');


    const navigator = useNavigate();

    function saveExecutiveMaster(e){
        e.preventDefault();

        const executive = {executiveCode, executiveMaster, dateOfJoin, mobileNo, emailId, status};

        console.log(executive);


        createNewExecutiveMaster(executive).then((response) => {
            console.log(response.data);
            navigator('/addedExecutive')
        }).catch((error) => {
            console.error('Error creating executive master:', error);
        })
    }



  return (
    <div className='w-1/2 border'>

        <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[750px] mt-10 border border-gray-500 border-b-0'>
            <h2 className='ml-[200px]'>Executive Master</h2>
            <span className='cursor-pointer mt-[5px] mr-2'>
                <IoClose />
            </span>
        </div>

        <div className='w-[550px] h-[30vh] border border-gray-500 ml-[750px] '>


            <form>
                

                <div className='input-ldgr  mr-4 mt-3 ' >
                    <label htmlFor="executiveCode" className='text-sm mr-[30px] ml-2'>Executive Code</label>
                    : <input type="text" id='executiveCode' name='executiveCode' value={executiveCode} onChange={(e) => setExecutiveCode(e.target.value)} className='w-[300px] ml-[6px] h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none ' autoComplete='off'  /> <br />
                    
                </div>

                <div className='input-ldgr  mr-4 mt-1 ' >
                    <label htmlFor="executiveMaster" className='text-sm mr-[21px] ml-2' >Executive Master</label>
                    : <input type="text" id='executiveMaster' name='executiveMaster' value={executiveMaster} onChange={(e) => setExecutiveMaster(e.target.value)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'   />
                    
                </div>


                <div className='input-ldgr    '  >
                    <label htmlFor="dateOfJoin" className='text-sm mr-[54px] ml-2'>Date of Join</label>
                    : <input type="text" id='dateOfJoin' name='dateOfJoin' value={dateOfJoin} onChange={(e) => setDateOfJoin(e.target.value)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>

                <div className='input-ldgr    '  >
                    <label htmlFor="mobileNo" className='text-sm mr-[64px] ml-2'>Mobile No</label>
                    : <input type="text" id='mobileNo' name='mobileNo' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>


                <div className='input-ldgr    '  >
                    <label htmlFor="emailId" className='text-sm mr-[77px] ml-2'>Email ID</label>
                    : <input type="text" id='emailId' name='emailId' value={emailId} onChange={(e) => setEmailId(e.target.value)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>

                
                <div className='input-ldgr    '  >
                    <label htmlFor="status" className='text-sm mr-[89px] ml-2'>Status</label>
                    : <input type="text" id='status' name='status'  value={status} onChange={(e) => setStatus(e.target.value)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
                </div>
                

                


            </form>
            
        </div>

        <div className='flex justify-center mt-[300px]'>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'  onClick={saveExecutiveMaster}  >A: Accept</button>

        </div>



    </div>
  )
}

export default ExecutiveMaster