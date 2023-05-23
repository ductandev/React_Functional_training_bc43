import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, getStorageJSON, http, saveStorageJSON } from '../../util/config';
import {history} from '../../index';

const initStateUserLogin = () => {
    let userLoginInit = {
        email:'',
        accessToken:''
    }

    if(getStorageJSON(USER_LOGIN)) {
        userLoginInit = getStorageJSON(USER_LOGIN);
    }
    return userLoginInit;
}


const initialState = {
    userLogin: initStateUserLogin(),
    userProfile: {
        // "ordersHistory": [],
        // "email": "khaikhaibc43@gmail.com",
        // "name": "khải",
        // "password": null,
        // "gender": true,
        // "phone": "123321321",
        // "facebookId": "",
        // "deleted": false,
        // "avatar": "https://i.pravatar.cc?u=khaikhaibc43@gmail.com"
      }
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction : (state,action) => {
        const userLogin = action.payload;
        state.userLogin = userLogin;
    },
    getProfileAction : (state,action) => {
        const userProfile = action.payload;
        state.userProfile = userProfile;
    }
  }
});

export const {loginAction,getProfileAction} = userReducer.actions

export default userReducer.reducer

// ------------- action async (action thunk) -- thêm hậu tố api để biết là action async ----------

export const loginActionApi = (userLogin) => { // {email:'',password:''}
    
    return async (dispatch) => {
        try {
            const res = await http.post(`/api/Users/signin`,userLogin);
            //Sau khi kết quả trả về sẽ đưa lên loginAction
            const action = loginAction(res.data.content);
            //const action = {type:'userReducer/loginAction', payload: res.data.content}
            dispatch(action);
            //Thành công thì lưu vào storage
            saveStorageJSON(USER_LOGIN,res.data.content);
            //SAu khi đăng nhập thành công thì chuyển hướng trang sang profile
            history.push('/profile');
            
        }catch(err) {
            alert(err.response?.data.message);
        }
  
    }
}


export const getProfileActionApi = () => {
    /*
        Action async là 1 hàm chưa được gọi và trong đó có 2 tham số.
        Thông số thứ 1: dispatch là thông số khi mà ta có dữ liệu từ API để ta dùng cái đó dispatch dữ liệu lên redux
        Thông số thứ 2: getState là hàm thứ 2 ( rất ít khi sử dụng) --> hàm này chứa toàn bộ State của ứng dụng, có thể lấy các state từ các từ ducer khác.
    */ 
    return async (dispatch,getState) => {
        // console.log(getState)
        const accessToken = getState().userReducer.userLogin.accessToken;
        //Gọi api getprofile
        const res = await http.post(`/api/Users/getProfile`); 
        // const res = await http.post(`/api/Users/getProfile`,{},{   // tham số thứ 2 Object rỗng {}: là body được định nghĩa bởi BE, header là tham số thứ 3.
        //     // config header---> tham số thứ 3 là phần header. Body là phần dữ liệu người dùng nhập và gửi đi theo format BE yêu cầu.Header là phần dev sẽ là phần sử lý ngầm của dev.
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });
        // const res = await http.post(`/api/Users/getProfile`);
        const action = getProfileAction(res.data.content);
        dispatch(action); //Đưa dữ liệu lên redux --> vì ở đây viết theo dạng async action.

    }
}