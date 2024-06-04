import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

const DisplayRegionMaster = () => {


    const {regionMasterId} = useParams();

    const [region, setRegion] = useState({
        regionMasterId: "",
        regionName: "",
        regionState: "",
        country: ""
    });


    const onInputChange = (e) => {
        setRegion({...region, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadRegion();
    }, []);

    const loadRegion = async () => {

        try {
            const result = await axios.get(`http://localhost:8080/api/master/displayRegion/${regionMasterId}`);
            setRegion(result.data);
        } catch (error) {
            console.error("Error fetching the region data", error);
        }
    };



    return (
        <div>
            <div className='flex'>
                <div className='w-1/2 h-[100vh] border border-bg-gray-500'>

                </div>

                <div className='w-1/2 border border-bg-gray-500'>

                    <div className='w-[550px] h-[30px] flex justify-between text-[20px] bg-[#F1E5D1] ml-[80px] mt-10 border border-gray-500 border-b-0'>
                        <h2 className='ml-[200px]'>Region Master</h2>
                        <span className='cursor-pointer mt-[5px] mr-2'>
                            <IoClose />
                        </span>
                    </div>

                    <div className='w-[550px] h-[20vh] border border-gray-500 ml-[80px] '>
                        <form>
                            <div className='input-ldgr mt-3'>
                                <label htmlFor="regionMasterId" className='text-sm ml-2 mr-[49px]'>Region Master ID</label>
                                : <input type="text" id='regionMasterId' name='regionMasterId' value={region.regionMasterId} onChange={(e) => onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none' /> <br />
                            </div>

                            <div className='input-ldgr mt-1'>
                                <label htmlFor="regionName" className='text-sm mr-[71px] ml-2'>Region Name</label>
                                : <input type="text" id='regionName' name='regionName' value={region.regionName} onChange={(e) => onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="RegionState" className='text-sm mr-[76px] ml-2'>Region State</label>
                                : <input type="text" id='regionState' name='regionState' value={region.regionState} onChange={(e) => onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>

                            <div className='input-ldgr'>
                                <label htmlFor="country" className='text-sm mr-[106px] ml-2'>Country</label>
                                : <input type="text" id='country' name='country' value={region.country} onChange={(e) => onInputChange(e)} className='w-[300px] ml-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200 focus:border focus:border-blue-500 focus:outline-none'  />
                            </div>
                        </form>
                        
                    </div>

                    <div className='mt-[400px] ml-[30px]'>
                    <Link to={"/regionFilter"} className='border px-11 py-[5px] text-sm bg-slate-600 hover:bg-slate-800 '>Back</Link>
                </div>

                    

                </div>
                
            </div>
        </div>
    );
};

export default DisplayRegionMaster;
