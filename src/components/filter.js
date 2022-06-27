import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeFilter } from '../reducer/filterreducer';

const Filter = () => {
  
  const dispatch=useDispatch();

    const prod=["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"];
    const [filter,setFilter]=useState("All Items")
   
   
  return (

    <div>
        <center className="mt-3">
            <span className='h4 m-2'>Filter:</span>
           <select name='filter' className='p-1' onChange={(e)=>{
              dispatch(changeFilter({filter_name:e.target.value}))
           }
            }>
          
            {prod.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
            ))}
               
           </select>
        </center>

    </div>
  )
}

export default Filter