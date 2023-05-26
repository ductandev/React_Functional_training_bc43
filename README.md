# Buổi 1: UseStateDemo (có sẵn của react)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/1784b5e0-3f4c-4e1c-98ae-e2d0bb461dcb)
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b3105005-df30-4a1f-b942-b2c01ae7176f) <br> <br> <br>

# Buổi 2: UseEffect - UseCallBack - UseMemo - UseRef (có sẵn của react)
[--UseEffect]()
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/1c8add4b-30aa-4563-b335-7080fd5456f8) 
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b083e877-6494-4be7-90bb-90d968941676)
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/449ff6a5-af43-4ef2-9bd2-548d59e3f0c8) <br> <br> <br>

[--UseCallBack]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/342669c4-a446-45a3-8ef6-2b713a8b059a)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b6e17a99-b82c-4ecc-b893-590bae538fec)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/417ba2d0-f655-4d60-83d3-fc12d5355041) <br><br>

[--UseMemo]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/fd2dc7d4-ff02-4598-8c2a-31e9c3d6e3d3)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/d9908b12-348f-4d6b-a85b-8c2d03407cf6) <br><br>

[--UseRef]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/d5548d22-c86e-4848-baa8-1c6877009b61)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/36634aff-9501-41cc-be1d-d2b824da8659)
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/f1135c37-a693-4ff4-8395-b734476d820f)

# Buổi 3: React thư viện - useSelector - useDispatch (thư viện redux)  && Các hook routing thông dụng
<p>Cài đặt thư viện redux toolkit</p>

```
$ npm install @reduxjs/toolkit
$ npm install react-redux 

import { useDispatch, useSelector } from 'react-redux'
```
[--useSelector && useDispatch (của thư viện redux)]() <br>
<p>- 2 Thư viện hook "useSelector" và "useDispatch" không phải của react core cung cấp, mà 2 thư viện này thuộc thư viện react-redux cung cấp cho phép ta truy cập đến reducer một cách dễ dàng và ngắn gọn hơn.</p>

![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b58d5007-d444-4cab-b38b-60e0795a93aa)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/e159e322-3d42-4c3b-9268-0acddf1b8b91)<br><br>


[--Các hook routing thông dụng]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/46ec933b-feb7-4ed4-a31a-4004aae693c7) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/f6d28243-2c80-4425-ba90-234ffdb98992) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/69c0cca0-7129-47d0-a50e-ac6ee6979cbb) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/56725ee3-7261-4406-82ad-e22008230027) <br>
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/a140d868-aae1-4e6c-a176-07af827138aa) <br>

![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/4050b599-d240-4017-9ed8-9598b47aeeda) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/61e2ac6a-2873-408b-9f74-60629536a6fe) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/f933253e-46e1-4979-b7fd-a9f665117ff5) <br>
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/1c7c6e0e-0576-4209-a865-5a2bcb7511ac) <br>

![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/3a838119-5379-4c55-8fff-7e496a174a01) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/55d0f5ac-8141-472f-8d33-0fc614f874a0) <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/454096d5-99c7-433d-8b45-75a9a97d510a) <br>
![code](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/f65a4d8a-bb67-4028-ad3e-fb845630ec26)


# Buổi 4: Formik (lấy dữ liệu từ form) - Yup (thư viện validation) - Call API (cấu hình interceptors)
Cài thư viện formik && Thư viện validation
```
$ npm i formik
$ npm i yup

import { useFormik } from 'formik';
import * as yup from 'yup'
```

[--Register from using Formik && Yup]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/5bd789c0-21bc-4ec5-8d70-3e89806ad318) <br> <br>


[--Call API (cấu hình interceptors)]() <br>
Gửi dữ liệu input form đăng ký lên API <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/cb2dd172-087d-456f-9cac-5242243aac97)

Nếu Email khác rỗng thì sẽ dẫn đến trang "profiles", ngược lại thì đá về trang "login"
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/43090a3f-83f5-4973-a931-a0c1a125f952)


![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/e55ae5c2-e7bd-4d5f-af8e-65b9baa56146)

 Dùng action async (action thunk) để call AIP gửi dữ liệu đăg nhập và trẻ về thông tin tên người dùng trên header
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/1eb3d671-3f98-4e9c-9ed3-ee7f1581a8de)

Viết hàm để lưu thông tin user localStorage 
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/25ff95e4-e172-449f-9f36-922e98cb56dc)

Gọi localStore để lấy dữ liệu user, nếu ko có thì trả về giá trị state mặc định, nếu có thì nó sẽ tự động đăng nhập.
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/f100a82c-de3b-4964-89b8-cece37f148b8)

Logout và clear localStorage
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/1da24369-6294-4beb-a3ef-741d64e419b2)

Call API get proflies
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/22f43db6-0afa-4531-8cd6-3351580e3af1) <br>


# Buổi 5: Custom hook interceptor
Cấu hình chung cho Header API, cài đặt interCepter cho request API (`Bearer ${token}`) --> ⭐ Lưu ý: Tránh tình trạng BE thay đổi dữ liệu header, nên sử dụng header cho tất cả khi call API
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/353e8de6-2092-4cfb-b152-6270db1ecc51)<br><br>


[--Movie)]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/8c6d0f50-267f-4c6d-a0fb-a3f527b206c9)

Call API danh sách phim  
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/dcb528bb-7445-4aac-8550-199c683f843b) <br><br>


[--Thư viện history, cấu hình request và response)]()
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/a1c483be-6ebc-4515-a500-2a75d876b3a0)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/574cb7c5-4369-4954-84a2-05432d9118bb)

- "useNavigate" chỉ sử dụng được trong functional component nhưng "history" sử sụng được bất kỳ file nào kể cả trong reducer
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/d05e88bc-2579-4846-9afe-fe7fd627d9d7)

- Nếu chưa đăng nhập thì sẽ đá về trang login yêu cầu đăng nhập còn đăng nhập rồi thì sẽ chuyển đến trang profiles.
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/8072af7b-298b-432b-be26-4b9ff6f2ebc2) <br><br>


[--Custom hook)]() <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/eeedddc2-8529-4281-a36a-6ffbc5242ce0)
Trang web tham khảo thêm về (custom) hooks:
1. https://usehooks.com/ (custom hooks)
2. https://usehooks-ts.com/ (custom hooks)
3. https://mantine.dev/hooks/use-counter/ (bộ hooks của thư viện mantine)
4. https://github.com/streamich/react-use
5. https://github.com/streamich/react-use?fbclid=IwAR3R1tQBNTKowvRT60CDIjnIstcfGUnMewyi7R3yP2QSLBUJH1EgTg5hzxE

- call API sử dụng custom hook và render ra giao diện
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/ed8c1e85-7bc1-42f6-8032-decac1fe33f6)<br><br>


# Buổi 6: Thư viện Antd design - HOC (Higher order component) - Responsive
[--Thư viện Antd design)]()
```
$ npm i antd
$ npm i @ant-design/icons
```
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b35517c4-33e0-4558-afa9-ab1cc84c4a89) <br><br><br><br>


[--HOC: (Higher order component)]()
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/39714465-e242-4992-a5e3-a8164ea2a0f5)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/a42dcfac-ce22-4cfc-8846-d0aa4e5325c9)

-Viết theo class
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/59da07fb-b3f2-478a-a4b1-70bd4a38679d) <br><br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/e09c7400-004e-4340-a62a-a0aebf0647b2)
-HOC ko sài được trên "functional Component return về 1 cái functional" mà thay vào đó phải retun về class mà class ko sài được Hook
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/bb80e9fd-913d-4dfb-ba67-ee330dfd5171) 



[--Container Component (viết theo kiểu HOC và sài được HOOK)]() <br>
- Container Component viết theo kiểu HOC, nó sẽ nhận vào component không phài dưới dạng tham số mà chủ yếu nhận vào dưới dạng props
- Conatiner component nhận vào component dưới dạng props và render props compnent đó trong phần nội dung
- Conatiner component nhận component thông qua porps.
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/8a8ecaed-64bc-44ec-a286-ebf1a17947ed)<br>
Truyền dạng thẻ thì sài databinding
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/2632a1a6-4fdf-443e-801d-c7d237ed96dc)<br>
Truyền dạng files thì sài dưới dạng thẻ
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/a0c56d44-9794-45d4-8fae-10fe0e4046c5)<br>
Truyền thẻ dưới dạng button dùng hook
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/c1bdf447-0ca8-42ac-a5d1-742242aabad1)<br>
Sử dụng redux để truyền thẻ component
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/b5d3bd43-1fe0-409d-b818-573da58c6ef6) <br><br><br><br>


[--Responsive)]()
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/6c8e06ac-2774-4604-9aa9-9d85b218d055)





