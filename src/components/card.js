
import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { bookOrder } from '../reducer/orderreducer';

const Card = () => {
    const [data,setData]=useState([])
    const [clonedata,setClonedata]=useState([]);
    const filter_name=useSelector(
        (state)=>state.filter.filter_name
      );
      const order_value=useSelector((state)=>state.order.order_value);
      const table_number = useSelector((state) => state.table.table_number);
      const dispatch=useDispatch();
    useEffect(()=>{
        fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(
            response=>response.json()
        ).then(json=>{
            setData(json.items);
            setClonedata(json.items)
        })
    },[])
    useEffect(()=>{
        if(filter_name!="All Items"){
            let specific = clonedata.filter(item=>item.category===filter_name)
            setData(specific)
        }
        else{
            setData(clonedata);
        }

    },[filter_name])

    const handler=(id,name,prize,url)=>{
        if(table_number!=null){
            dispatch(bookOrder({order_value:{id,name,prize,url}}));
            alert("Added to My Orders")
        }
        else{
            alert("please select your table_number")
        }
    }

  return (
    <div>
        <center>
            {data.length > 0?
         <div className='container'>
            <div className='row'>
                {data.map((item)=>(
                    <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                        <div className='card' style={{width:"18rem",padding:"3px"}}>
                        <div className='card-body'>
                        <img src={item.url} className="card-img-top"/>
                              <h4 className='card-title'>
                                    {item.name}
                                </h4>
                                <div className='card-text'>
                                   RS. {item.prize}
                                </div>
                                <button className='btn btn-primary' onClick={()=>handler(item.id,item.name,item.prize,item.url)}>Order</button>
                        </div>
                        </div>
                      
                      
                    </div>
                ))}

            </div>

         </div> :  
         <div className='spinner-border text-primary'>

         </div>
        }
        </center>

    </div>
  )
}

export default Card