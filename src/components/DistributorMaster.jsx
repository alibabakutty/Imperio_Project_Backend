import React from 'react'
import { IoClose } from 'react-icons/io5'

const DistributorMaster = () => {
  return (
    <div className='w-1/2 border'>

        <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[750px] mt-10 '>
            <h2 className='ml-2'>Distributor Master</h2>
            <span className='cursor-pointer mt-[5px] mr-2'>
                <IoClose />
            </span>
        </div>

        <div className='w-[550px] h-[42vh] border border-gray-500 ml-[750px]'>


            <form>
                

            <div className='input-ldgr  mr-4 mt-3   '  >
            <label htmlFor="distributorCode" className='text-sm mr-[75px] ml-2'>Distributor Code</label>
            : <input type="text" id='distributorCode' name='distributorCode'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="distributorCompanyName" className='text-sm mr-2 ml-2'>Distributor Company Name</label>
                : <input type="text" id='distributorCompanyName' name='distributorCompanyName'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="distributorOwnerName" className='text-sm  mr-[26px] ml-2'>Distributor Owner Name</label>
                : <input type="text" id='distributorOwnerName' name='distributorOwnerName'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="mobileNo" className='text-sm  mr-[112px] ml-2'>Mobile No</label>
                : <input type="text" id='mobileNo' name='mobileNo'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="executiveCode" className='text-sm  mr-[84px] ml-2'>Executive Code</label>
                : <input type="text" id='executiveCode' name='executiveCode'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="executiveMaster" className='text-sm  mr-[74px] ml-2'>Executive Master</label>
                : <input type="text" id='executiveMaster' name='executiveMaster'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="regionCode" className='text-sm  mr-[100px] ml-2'>Region Code</label>
                : <input type="text" id='regionCode' name='regionCode'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="regionMaster" className='text-sm  mr-[90px] ml-2'>Region Master</label>
                : <input type="text" id='regionMaster' name='regionMaster'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="contactPersonName" className='text-sm  mr-[46px] ml-2'>Contact Person Name</label>
                : <input type="text" id='contactPersonName' name='contactPersonName'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>

            <div className='input-ldgr    '  >
                <label htmlFor="contactMobileNo" className='text-sm  mr-[63px] ml-2'>Contact Mobile No</label>
                : <input type="text" id='contactMobileNo' name='contactMobileNo'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
            </div>





            </form>
            
        </div>

        <div className='flex justify-center mt-[250px] '>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'    >A: Accept</button>

        </div>


    </div>
  )
}

export default DistributorMaster