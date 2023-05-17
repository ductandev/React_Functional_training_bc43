import ReactDOM from 'react-dom/client';

// Cấu hình react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import UseCallBackDemo from './pages/Hooks/UseCallback/UseCallBackDemo';
import UseMemoDemo from './pages/Hooks/UseMemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
// cấu hình redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import DemoAppChat from './pages/Hooks/ReduxHook/DemoAppChat';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Register from './pages/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='useeffect' element={<UseEffectDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='usememo' element={<UseMemoDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>


          <Route path='demo-chat' element={<DemoAppChat />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='register' element={<Register />}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

