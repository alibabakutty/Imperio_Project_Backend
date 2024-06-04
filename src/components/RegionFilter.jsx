import React, { useEffect, useRef, useState } from 'react';
import { listOfRegions } from '../services/MasterService';
import { Link } from 'react-router-dom';


const RegionFilter = () => {

    const [regionMasterId, setRegionMasterId] = useState('');

    const [region, setRegion] = useState([]);

    const [filteredRegions, setFilteredRegions] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

        listOfRegions()
            .then((response) => {
                setRegion(response.data);
                setFilteredRegions(response.data);                 // Initially set filteredRegions to all regions
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        filterRegions();

    }, [regionMasterId]);


    const filterRegions = () => {
        if(regionMasterId === ""){
            setFilteredRegions(region);
        }else{
            const filtered = region.filter(reg => reg.regionMasterId.toLowerCase().includes(regionMasterId.toLowerCase()));
            setFilteredRegions(filtered);
        }
    };

    return (
        <div className='flex'>
            <div className='w-[45%] h-[100vh] bg-[#DDDDDD]'></div>

            <div className='w-[45%] h-[100vh] bg-[#EEEEEE] flex flex-col items-center justify-start'>
                <div className='w-[50%] h-16 flex flex-col justify-center items-center border border-black bg-white border-b-0 '>
                    <p className='text-[13px] font-semibold underline underline-offset-4 decoration-gray-400'>Region Display</p>
                    <input type="text" id='regionMasterId' name='regionMasterId' value={regionMasterId} onChange={(e) => setRegionMasterId(e.target.value)} ref={inputRef} className='w-[250px] ml-2 mt-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' autoComplete='off' />
                </div>

                <div className='w-[350px] h-[85vh] border border-gray-600 bg-[#def1fc]'>
                    <h2 className='p-1 bg-[#2a67b1] text-white text-center text-[14px]'>List of Region</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <div className='border border-b-gray-500 w-[347px]'>
                            <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none ' to={"/region"}><p className='ml-[285px] text-[14px]'>Create</p></Link>
                            <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none ' to={"/display"}><p className='ml-[270px] text-[14px] px-[30px]'>Back</p></Link>
                        </div>
                        <tbody>
                            {filteredRegions.map(reg => (
                                <tr className='' key={reg.regionMasterId}>
                                    <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none' to={`/displayRegion/${reg.regionMasterId}`}>
                                        <td className='block text-center text-[14px] focus:bg-[#FEB941] outline-none capitalize'>
                                            {reg.regionMasterId}
                                        </td>
                                    </Link>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    
                </div>

                
            </div>

            <div className='w-[10%] bg-[#DDDDDD] h-[100vh]'></div>
        </div>
    );
};

export default RegionFilter;
