import React from 'react'
import { IoClose } from 'react-icons/io5'

const Productmaster = () => {
  return (
    <div className='w-1/2 border'>

        <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[750px] mt-10 '>
            <h2 className='ml-[200px]'>Product Master</h2>
            <span className='cursor-pointer mt-[5px] mr-2'>
                <IoClose />
            </span>
        </div>

        <div className='w-[550px] h-[20vh] border border-gray-500 ml-[750px]  '>


            <form>
                

            <div className='input-ldgr mt-3   '  >
            <label htmlFor="productCode" className='text-sm mr-[51px] ml-2'>Product Code</label>
            : <input type="text" id='productCode' name='productCode'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productDescription" className='text-sm mr-[9px] ml-2'>Product Descriptions</label>
            : <input type="text" id='productDescription' name='productDescription'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productCategory" className='text-sm mr-[28px] ml-2'>Product Category</label>
            : <input type="text" id='productCategory' name='productCategory'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productUom" className='text-sm mr-[47px] ml-2'>Product UOM</label>
            : <input type="text" id='productUom' name='productUom'  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

            </form>
            
        </div>

        <div className='flex justify-center mt-[380px]'>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'    >A: Accept</button>

        </div>


    </div>
  )
}

export default Productmaster