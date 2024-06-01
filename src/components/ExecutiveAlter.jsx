import React, { useEffect, useRef, useState } from 'react'
import { listOfExecutives } from '../services/MasterService';
import { Link } from 'react-router-dom';

const ExecutiveAlter = () => {


  const [executiveCode, setExecutiveCode] = useState('');


  const [executive, setExecutive] = useState([]);


  const [filteredExecutives, setFilteredExecutives] = useState([]);

  const inputRef = useRef(null);


  useEffect(() => {

    inputRef.current.focus();

    listOfExecutives().then((response) =>{
      setExecutive(response.data);
      setFilteredExecutives(response.data);
    }).catch(error =>{
      console.error(error);
    })

  }, []);


  useEffect(() => {
    filterExecutive();
  }, [executiveCode]);


  const filterExecutive = () => {
    if(executiveCode === ""){
      setFilteredExecutives(executive);
    }else{
      const filtered = executive.filter(exe => exe.executiveCode.toLowerCase().includes(executiveCode.toLowerCase()));
      setFilteredExecutives(filtered);
    }
  }



  return (
    <div className='flex'>
      <div className='w-[45%] h-[100vh] bg-[#DDDDDD]'></div>

      <div className='w-[45%] h-[100vh] bg-[#EEEEEE] flex flex-col items-center justify-start'>
        <div className='w-[50%] h-16 flex flex-col justify-center items-center border border-black bg-white border-b-0 '>
          <p className='text-[13px] font-semibold underline underline-offset-4 decoration-gray-400'>Executive Display</p>
          <input type="text" id='executiveCode' name='executiveCode' value={executiveCode} onChange={(e) => setExecutiveCode(e.target.value)} ref={inputRef} className='w-[250px] ml-2 mt-2 h-5 capitalize font-medium pl-1 text-sm focus:bg-yellow-200  focus:border focus:border-blue-500 focus:outline-none' />
        </div>

        <div className='w-[350px] h-[85vh] border border-gray-600 bg-[#def1fc]'>
          <h2 className='p-1 bg-[#2a67b1] text-white text-center text-[14px]'>List of Executive</h2>
          <table>
              <thead>
                  <tr>
                      <th></th>
                  </tr>
              </thead>
              <div className='border border-b-gray-500 w-[347px]'>
                  <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none' to={"/executive"}><p className='ml-[285px] text-[14px]'>Create</p></Link>
                  <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none' to={"/alter"}><p className='ml-[287px] text-[14px] '>Back</p></Link>
              </div>
              <tbody>
                  {filteredExecutives.map(exe => (
                      <tr key={exe.executiveCode}>
                            <Link className='block text-center text-[14px] focus:bg-[#FEB941] outline-none' to={`/alterExecutiveMaster/${exe.executiveCode}`}>
                              <td className='flex justify-center items-center capitalize'>{exe.executiveCode}</td>
                            </Link>
                      </tr>
                  ))}
              </tbody>
          </table>

            
        </div>

                
            </div>

      <div className='w-[10%] bg-[#DDDDDD] h-[100vh]'></div>
    </div>
  )
}

export default ExecutiveAlter