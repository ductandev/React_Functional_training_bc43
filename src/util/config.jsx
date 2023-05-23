// Thư mục util này dùng để tái sử dụng cho các dự án
import axios from 'axios';
import {history} from '../index'

//cấu hình hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const TOKEN ='accessToken';

const tokenCybersoft = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8RqPPK_ttr9NYitsWT7Cbe11nz4qye-QxZ_b8fk`;


export const httpMovie = axios.create({
   baseURL:'https://movienew.cybersoft.edu.vn',
   timeout:30000 
});


//interceptor 
httpMovie.interceptors.request.use((config) => {
    config = {...config};
    config.headers['TokenCybersoft'] = tokenCybersoft

    return config;

}, err => {
    return Promise.reject(err);
})

//Cấu hình api gửi đi 
//Tạo ra 1 đối tượng axios 
export const http = axios.create({
    baseURL: DOMAIN, //domain của tất cả request
    timeout: 30000 //thời gian request tồn tại. tính bằng mili giây
});

export const {saveStorageJSON,getStorageJSON,clearStorage} = {
    saveStorageJSON: (name,data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name,string);
    },
    getStorageJSON: (name) => {
        if(localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;       // nếu store ko có thì trả về undefine
    },
    clearStorage: (name) => {
        localStorage.removeItem(name)
    }
}

//Cấu hình dùng chung cho tất cả request (yêu cầu gửi lên api)
http.interceptors.request.use((config) => {
    
    //headers: (dev định nghĩa)
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config.headers = {...config.headers}
    let token = getStorageJSON(USER_LOGIN)?.accessToken;   // localStorage là 1 object: chứa "accessToken" và "email"
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `CybersoftDemo`;


    return config;
}, (err) => {       // Nếu thất bại sẽ nhảy vô hàm này sẽ biết lỗi nào
    return Promise.reject(err);
})

//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res)=>{ 
    return res;
},(err)=> {
    //Xử lý lỗi cho api bị lỗi theo status code
    console.log(err);
    if(err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }
    return Promise.reject(err); //Bắn ra lỗi thông qua promise
});

/* statusCode thông dụng : 
    200: Dữ liệu gửi đi và nhận về kết quả thành công (OK)
    201: Dữ liệu khởi tạo thành công (Created)
    400: Bad request (lỗi không tìm thấy item trên backend)
    404: Not found (không tìm thấy link backend)
    500: Error in server (Lỗi xảy ra tại server - có thể do dữ liệu frontend gửi lên xử lý bị lỗi backend không catch trường hợp này thì ra 500 hoặc là backend code bị lỗi) => Xác định lỗi => mở post man request thử với data đúng thì có được hay không nếu vẫn lỗi thì báo backend fix
    401: UnAuthorize (Lỗi khi không có quyền truy cập vào api này (phải token hợp lệ ...))
    403: Forbiden ( Lỗi chưa đủ quyền truy cập vào api )

*/