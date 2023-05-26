import React from 'react'
import { history } from '../index';
import useFetchData from '../CustomHook/useFetchData';
import { NavLink } from 'react-router-dom';
import useToggle from '../CustomHook/useToggle';
export default function HomeMobile() {
    const data = useFetchData('https://shop.cyberlearn.vn/api/product');
    // Call the hook which returns, current value and the toggler function
    const [isTextChanged, setIsTextChanged] = useToggle();
    return (
        <div className='m-2'>
            <h3>Shoes shop</h3>
            {data?.map((item) => {
                return <div className='row mt-2'>
                    <div className='col-2'>
                        <img src={item.image} className='w-100' alt='...' />
                    </div>
                    <div className='col-10'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className='col-12 mt-2 d-flex bg-dark p-2' style={{justifyContent:'space-between'}}>
                        <h3 className='text-white'>
                            {item.price} $
                        </h3>
                        <NavLink className={'btn btn-danger'} to={`/detail/${item.id}`}>
                            View detail
                        </NavLink>
                    </div>
                </div>
            })}
            <h3>Demo use toggle</h3>
            <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        </div>
    )
}