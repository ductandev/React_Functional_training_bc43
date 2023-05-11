import React, { useState } from 'react'

const UseStateDemo = () => {

    let [number, setNumber] = useState(10); //result = [state,setState] => this.state = {state1: '',state2:''}

    let [fontSize, setFontSize] = useState(16);

    let [imgSrc, setImgSrc] = useState('https://i.pravatar.cc?u=30')

    const changeNumber = () => {
        let newNumber = number + 1;
        setNumber(newNumber);
    }

    return (
        <div className='container'>
            <h3>Demo tăng giảm số lượng</h3>
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                changeNumber();
            }}>+</button>
            <hr />


            <h3>Tăng giảm fontSize</h3>
            <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente?</p>
            <button className='btn btn-primary mx-2' onClick={() => {
                setFontSize(fontSize + 1);
            }}>+</button>
            <button className='btn btn-primary' onClick={() => {
                setFontSize(fontSize - 1);
            }}>-</button>
            

            <h3>Tinder</h3>
            <div className='card w-25 my-2'>
                <img src={imgSrc} alt="..." />
                <div className="card-body">
                    <button className="btn btn-danger" onClick={()=>{
                        let numberRandom = Math.floor(Math.random() * 101);  // random từ 1-100 thì để 101
                        let newImg = `https://i.pravatar.cc?u=${numberRandom}`
                        setImgSrc(newImg)
                    }}>Random</button>
                </div>
            </div>

        </div>
    )
}

export default UseStateDemo
