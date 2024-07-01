import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

const DisplayProductMaster = () => {

    const {productCode} = useParams();

    const [product, setProduct] = useState({
        productCode: "",
        productDescription: "",
        productCategory: "",
        productUom: ""
    });

    const onInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/api/master/displayProduct/${productCode}`);
            setProduct(result.data);
        }catch(error){
            console.error("Error fetching the executive data",error);
        }
    }



  return (
    <div>
        <div className='flex'>
                <div className='w-1/2 h-[100vh] border border-bg-gray-500'>

                </div>

                <div className='w-1/2 border border-bg-gray-500'>

                    <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[80px] mt-10 border border-gray-500 border-b-0'>
                        <h2 className='ml-[200px]'>Product Master</h2>
                        <span className='cursor-pointer mt-[5px] mr-2'>
                            <IoClose />
                        </span>
                    </div>

                    <div className='w-[550px] h-[20vh] border border-gray-500 ml-[80px] '>
                        <form>
                            <div className='input-ldgr mt-3'>
                                <label htmlFor="productCode" className='text-sm ml-2 mr-[59px]'>Product Code</label>
                                : <input type="text" id='productCode' name='productCode' value={product.productCode} onChange={(e) =>onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none' /> <br />
                            </div>

                            <div className='input-ldgr mt-1'>
                                <label htmlFor="productDescriptions" className='text-sm mr-[15px] ml-2'>Product Descriptions</label>
                                : <input type="text" id='productDescriptions' name='productDescriptions' value={product.productDescription} onChange={(e) =>onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="productCategory" className='text-sm mr-[36px] ml-2'>Product Category</label>
                                : <input type="text" id='productCategory' name='productCategory' value={product.productCategory} onChange={(e) =>onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="productUom" className='text-sm mr-[60px] ml-2'>Product UOM</label>
                                : <input type="text" id='productUom' name='productUom' value={product.productUom} onChange={(e) =>onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>

                             
                        </form>
                        
                    </div>

                    <div className='mt-[405px] ml-[30px]'>
                    <Link to={"/productFilter"} className='border px-11 py-[5px] text-sm bg-slate-600 hover:bg-slate-800 '>Back</Link>
                </div>

                    

                </div>
                
            </div>
    </div>
  )
}

export default DisplayProductMaster