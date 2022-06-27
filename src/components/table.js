import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeTable } from '../reducer/tablereducer';


const Table = () => {
    const table_number = useSelector((state) => state.table.table_number);
    const dispatch = useDispatch();
   
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const inActiveBtn='btn btn-outline-primary m-2';
    const activeBtn='btn btn-outline-primary m-2 active';
    
    return (
    <div>
        <center className="mt-2">
            <h4>Please Select Your Table number:</h4>
            {numbers.map((num,index)=>(
                <div style={{display:"inline"}} key={index}>
                    <button className={table_number===num?activeBtn:inActiveBtn} onClick={()=>dispatch(changeTable({table_number:num}))}>
                         {num}
                    </button>
                </div>
            ) )}
        </center>

    </div>
  )
}


export default Table;