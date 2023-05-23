import React from 'react'
import { history } from '../index'
import useFetchData from '../CustomHook/useFetchData';
import { NavLink } from 'react-router-dom';
import useToggle from '../CustomHook/useToggle';

export default function Home() {

  const data = useFetchData('https://shop.cyberlearn.vn/api/product');

  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <div className='container'>
      <h3>Shoes shop</h3>
      <div className="row">
        {data.map((item) => {
          return <div className="col-3 mt-2" key={item.id}>
            <div className="card">
              <img src={item.image} alt="..." />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <NavLink to={`/detail${item.id}`} className="btn btn-dark">View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>

      <h3>Demo use toglt</h3>
      <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>

    </div>
  )
}
