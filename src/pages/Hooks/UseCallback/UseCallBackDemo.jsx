//rafce
import React, { useState,useCallback } from 'react'
import Child from './Child';

const UseCallBackDemo = () => {
    const [like,setLike] = useState(1);
    const [number,setNumber] = useState(1);

    const UILike = () => {
        return <i className="fa fa-thumbs-up text-white">{like}</i>
    }

    //useCallback dùng để cache lại giá trị hàm, khi dependency thay đổi thị hàm mới được tạo mới lại
    const callBackUILike = useCallback(UILike , [like]);

  return (
    <div className='container'>
        <div>
            <p>{like} <i className="fa fa-thumbs-up"></i></p>

            <i className='fa fa-thumbs-up text-primary display-4' style={{cursor:'pointer'}} onClick={()=>{
                setLike(like+1);
            }}>
            </i>

        </div>
        <Child uiLike={callBackUILike} />
        
        <div>
            {number} View <i className='fa fa-eye'></i>
        </div>
        <button className='btn btn-danger' onClick={()=>{
            setNumber(number+1);
        }}>+</button>



    </div>
  )
}

export default UseCallBackDemo