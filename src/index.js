import ReactDOM from 'react-dom/client';

// Cấu hình react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import UseStateDemo from './pages/Hooks/UseStateDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate />}>
          <Route index element = {<Home />}></Route>
          <Route path='login' element = {<Login />}></Route>
          <Route path='usestate' element = {<UseStateDemo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

);

