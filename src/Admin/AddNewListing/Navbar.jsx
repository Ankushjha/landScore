import profile from '../../assets/images/profile.jpg'
import { AimOutlined, BarChartOutlined, CheckSquareOutlined, CommentOutlined, HomeOutlined, LogoutOutlined, MoneyCollectOutlined, OneToOneOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SubNavbar from './SubNavbar'
import { Button } from 'antd'

const Navbar = () => {

    const navigate = useNavigate();
    return (
        <>

            <div className="flex h-screen w-screen overflow-hidden">
               <div className="navbar flex w-[22%] border border-r border-[#EAECF0] border-t-0">
               <nav 
                className='border border-r border-[#EAECF0] border-t-0 flex flex-col text-2xl text-[#667085] p-10 justify-between'>
                    <menu className='flex flex-col gap-5'>
                        <OneToOneOutlined className='text-[#2D45AF] text-3xl'/>
                        <HomeOutlined />
                        <BarChartOutlined />
                        <CheckSquareOutlined />
                        <CommentOutlined />
                        <UsergroupAddOutlined />
                        <MoneyCollectOutlined />
                        <AimOutlined />
                        <UserOutlined />
                    </menu>

                    <div className="user text-red-500 flex flex-col gap-5">
                        <img src={profile} alt="user" className='w-8 h-8'/>
                        <LogoutOutlined onClick={() => navigate('/')}/>
                    </div>
                </nav>
                
                <div><SubNavbar/></div>
               </div>

                <div className='w-1/2 ps-5'><Outlet /></div>

                <div className='w-[38%] p-20'>
                    <div className="container bg-[#065E14] text-white rounded-xl p-7 py-10">
                        <h3 className='font-bold text-xl'>Get Verified Fast - Boost Your Listing's Visibility!</h3>

                        <p className='my-4'>
                        Subscribe now to fast-track your listing verification and enhance your service's visibility. Expanded customer engagement, property gains instant credibility, attracting more potential buyers and investors. Don't miss out on the opportunity to make your listing stand out.
                        </p>

                        <div className="subscribe flex justify-center">
                        <Button size='large'>Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Navbar