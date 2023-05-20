//rfc
import React from 'react'
//import outlet từ react router dom
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <div style={{ minHeight: '80vh' }}>
                <Outlet />  {/* ĐẠi diện cho các compoennt route load lên thẻ này */}
            </div>

            <footer className='bg-dark text-white text-center p-3 fs-3'>
                Footer
            </footer>
        </div>
    )
}
