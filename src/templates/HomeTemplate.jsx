//rfc
import React from 'react'
//import outlet từ react router dom
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import ResponsiveTemplate from './ResponsiveTemplate'
import BottomTab from '../components/BottomTab'
function Footer() {
    return <footer className='bg-dark text-white text-center p-3 fs-3'>
        Footer
    </footer>
}

export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <div style={{ minHeight: '80vh' }}>
                <Outlet />  {/* ĐẠi diện cho các compoennt route load lên thẻ này */}
            </div>

            <ResponsiveTemplate component={Footer} mobileComponent={BottomTab}/>
        </div>
    )
}




