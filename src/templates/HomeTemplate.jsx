// rfc
import React from 'react'
// import outlet từ react rouer dom
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

export default function HomeTemplate() {
  return (
    <div>
        <Header />
        <div style={{minHeight: '80vh'}}>
            <Outlet />

        </div>
        <footer className='bg-dark text-white text-center p-3 fs-3'>Footer</footer>
    </div>
  )
}
