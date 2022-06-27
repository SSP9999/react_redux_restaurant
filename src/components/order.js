import React from 'react';
import { useSelector } from 'react-redux/es/exports';


const Order = () => {
  const order=useSelector((state)=>state.order.order_value);
  const table = useSelector((state) => state.table.table_number)
  let total = 0;
  order.map (i => {
    total += i.prize
  })
 
 
  return (
    <center> 
    {order.map((i) => 
    <div className='card mb-2' style={{width:"18rem",padding:"3px"}} >
       <div className='card-body'>
        <p>Table Number:{table}</p>
    <div>
      <img src={i.url} className="card-img-top"/>
    <h4 className='card-title'>
        {i.name}
    </h4>
    <div className='card-text'>
       RS. {i.prize}
    </div>
   
   
    </div>
    </div>
    </div>
   )}
   

<p className='btn btn-primary mt-2'>Total Amount :RS :{total}</p>
    </center>
   
  )
}

export default Order