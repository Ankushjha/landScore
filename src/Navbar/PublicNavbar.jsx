import React from 'react'
import { Button } from 'antd'
import '../assets/css/App.css'
import { Outlet } from 'react-router-dom'

const PublicNavbar = () => {
    return (
        <>
            <nav className='lg:flex block h-20 mx-20 items-center justify-between'>
                <div className="left flex h-full items-center">
                    <div className="logo text-xl text-[#065E14] font-bold cursor-pointer">LandZ App</div>
                    <menu className='ms-24'>
                        <ul className='flex space-x-5'>
                            <li>
                                <a href="#">Property Listing</a>
                            </li>
                            <li>
                                <a href="#">Post Property</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </menu>
                </div>

                <div className="sessions space-x-5">
                    {/* <button className='rounded-md text-[#065E14] px-7 py-1 border border-[#065E14] hover:bg-[#fafafa]'>Signup</button>
                    <button className='rounded-md font-light px-7 py-1 text-white border bg-[#065E14] hover:bg-[#054a15]'>Login</button> */}
                    <Button className='btn px-7'>Signup</Button>
                    <Button type='primary' className='btn bg-[#065E14] px-7 login-button text-white'>Login</Button>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default PublicNavbar