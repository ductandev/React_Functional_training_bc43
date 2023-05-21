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
Gửi dữ liệu nhập form đăng ký lên api <br>
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/cb2dd172-087d-456f-9cac-5242243aac97)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/e55ae5c2-e7bd-4d5f-af8e-65b9baa56146)
![image](https://github.com/ductandev/React_Functional_training_bc43/assets/42485856/43090a3f-83f5-4973-a931-a0c1a125f952)

 







