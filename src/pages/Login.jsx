import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const userLogin = useRef({
    email:'',
    password:''
  });
  //hook dùng để chuyển hướng trang sau 1 xử lý
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value,id} = e.target;
    userLogin.current[id] = value;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Nếu đăng nhập với email là cybersoft@gmail.com và pass 123 =>thành công
    //Thành công: Chuyển hướng về profile
    if(userLogin.current.email === 'cybersoft@gmail.com' && userLogin.current.password === '123') {
      //Thành công 
      navigate('/profile');
    }else{
      //Thất bại thì vẫn giữ yên tại trang login (show popup thất bại)
      alert('không thành công !');
    } 
  }
  return (
    <form className='container' onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className='form-group'>
        <p>Email</p>
        <input id="email" name="email" className='form-control' onInput={handleChange} />
      </div>
      <div className='form-group'>
        <p>Password</p>
        <input id="password" name="password"  type="password" className='form-control' onInput={handleChange} />
      </div>
      <div className='form-group'>
        <button type="submit" className='btn btn-dark'>Login</button>
      </div>
      
    </form>
  )
}
