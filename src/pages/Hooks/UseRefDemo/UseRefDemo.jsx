import React, { useState, useRef } from 'react'
import ChildComponent from './ChildComponent';

const UseRefDemo = () => {

    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });

    const [number, setNumber] = useState(1);

    const inputRef = useRef({});


    // useRef: dùng để lưu lại các giá trị thay đổi sau các lần render mà không cần render lại giao diện. Sử dụng cho các trường hợp đặc biệt của state (state thay đổi tuy nhiên state không binding lên giao diện)
    const userLoginRef = useRef({
        username: '',
        password: ''
    });


    const handleChangeInput = (e) => {
        let { id, value } = e.target;

        userLoginRef.current[id] = value;
        console.log('userLogin', userLoginRef.current);

        // setUserLogin({
        //     ...userLogin,    //cách giữ lại giá trị cũ
        //     [id]: value
        // });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.style.backgroundColor = 'green';
    }


    return (
        <form className='container' onSubmit={handleSubmit}>
            {/* Type phải để button chứ ko để thì nó sẽ tự hiểu type là submit nên nó sẽ tự động reload lại trang */}
            <button type='button' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <ChildComponent />

            <h3>Login</h3>
            <div className="form-group">
                <p>username</p>
                <input ref={inputRef} className="form-control" id='username' onInput={handleChangeInput} />
            </div>
            <div className="form-group">
                <p>password</p>
                <input className="form-control" id='password' onInput={handleChangeInput} />
            </div>
            <div className="form-group">
                <button type='submit' className="btn btn-dark">Submit</button>
            </div>
        </form>
    )
}

export default UseRefDemo