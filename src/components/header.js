import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  const order = useSelector((state) => state.order.order_value)
  const table = useSelector((state) => state.table.table_number)
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'>Restaurant</a>
            <button className='btn btn-primary' onClick={()=>navigate('/order')}>
        orders<span className='badge badge-light'>{order.length} for Table #{table}</span>
    </button>
       
        </nav>
    </div>
  )
}

export default Header