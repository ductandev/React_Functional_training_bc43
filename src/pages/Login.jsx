import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { loginActionApi } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
export default function Login() {
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:yup.object().shape({
      email:yup.string().email('email is invalid'),
      password:yup.string().required('password cannot be blank')
    })
    ,
    onSubmit:(values) => {
        const action = loginActionApi(values);
        dispatch(action);
    }
  })


  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
      <h3>Login</h3>
      <div className='form-group'>
        <p>Email</p>
        <input id="email" name="email" className='form-control' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
        {frmLogin.errors.email && <p className='text text-danger'>{frmLogin.errors.email}</p>}
      </div>
      <div className='form-group'>
        <p>Password</p>
        <input id="password" name="password"  type="password" className='form-control' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
        {frmLogin.errors.password && <p className='text text-danger'>{frmLogin.errors.password}</p>}

      </div>
      <div className='form-group'>
        <button type="submit" className='btn btn-dark'>Login</button>
      </div>
      
    </form>
  )
}
