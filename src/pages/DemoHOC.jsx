import React, { useState } from 'react'
import HOCModel from '../HOC/HOCModel';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ContainerModal from '../HOC/ContainerModal';
import { useDispatch } from 'react-redux';
import { setModelAction } from '../redux/reducers/modalReducer';
/*
    HOC: Higher order component
    Componennt chứa 1 component khác để tạo ra => 1 component mới chứa logic của component đó
*/

// Tạo ra 1 component login chứa modal
const LoginModal = new HOCModel(Login);
const RegisterModal = new HOCModel(Register);
const HomeModel = new HOCModel(Home)


export default function DemoHOC() {
    const [component, setComponent] = useState(<Login />);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <button onClick={()=>{
                // setComponent(<Login />)
                const action = setModelAction(<Login />)
                dispatch(action)
            }} className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Login</button>
            
            {/* ================================================== */}
            <button onClick={()=>{
                // setComponent(<Register />)
                const action = setModelAction(<Register />)
                dispatch(action)
            }} className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Register</button>
            
            {/* ================================================== */}
            <button onClick={()=>{
                // setComponent(<Home />)
                const action = setModelAction(<Home />)
                dispatch(action)
            }} className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Home</button>

            {/* dùng Class */}
            {/* <HomeModel /> */}

            {/* dùng Funtional */}
            <ContainerModal component={component} />
        </div>
    )
}
