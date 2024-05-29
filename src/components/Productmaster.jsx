import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { createNewProductMaster } from '../services/MasterService';
import '../assets/css/font.css'

const Productmaster = () => {



    const [productCode, setProductCode] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productUom, setProductUom] = useState('');

    const navigator = useNavigate();


    function saveProductMaster(e){

        e.preventDefault();

        const product = {productCode, productDescription, productCategory, productUom};

        console.log(product);


        createNewProductMaster(product).then((response) => {

            console.log(response.data);

            navigator('/addedProduct');
        }).catch((error) => {
            console.error('Error creating product master:', error);
        })
    }



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
            <label htmlFor="productCode" className='text-sm mr-[52.5px] ml-2'>Product Code</label>
            : <input type="text" id='productCode' name='productCode' value={productCode} onChange={(e) => setProductCode(e.target.value)}  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productDescription" className='text-sm mr-[9.5px] ml-2'>Product Descriptions</label>
            : <input type="text" id='productDescription' name='productDescription' value={productDescription} onChange={(e) => setProductDescription(e.target.value)}  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productCategory" className='text-sm mr-[29px] ml-2'>Product Category</label>
            : <input type="text" id='productCategory' name='productCategory' value={productCategory} onChange={(e) => setProductCategory(e.target.value)}  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

        <div className='input-ldgr    '  >
            <label htmlFor="productUom" className='text-sm mr-[53px] ml-2'>Product UOM</label>
            : <input type="text" id='productUom' name='productUom' value={productUom} onChange={(e) => setProductUom(e.target.value)}  className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off'    />
        </div>

            </form>
            
        </div>

        <div className='flex justify-center mt-[380px]'>

            <button type='submit' className='text-sm px-8 py-1 mt-3 border hover:bg-slate-400'  onClick={saveProductMaster}  >A: Accept</button>

        </div>


    </div>
  )
}

export default Productmaster