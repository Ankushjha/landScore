import { Progress } from 'antd'
import React from 'react'

const SubNavbar = () => {
    return (
        <>
            <div className="container w-full p-3 pt-20">
                <ul className='pb-8'>
                    <li className='bg-[#F3F3F3] rounded-lg p-2 mb-2'>Basic Details</li>
                    <li className='p-2 mb-2'>Location Details</li>
                    <li className='p-2 mb-2'>Mark your property</li>
                    <li className='p-2 mb-2'>Land Details</li>
                    <li className='p-2 mb-2'>Upload Documents</li>
                    <li className='p-2 mb-2'>Images & Videos</li>
                    <li className='p-2 mb-2'>Pricing & Other Details</li>
                </ul>

                <div className="box bg-[#F3F3F3] flex flex-col p-4 rounded-lg">
                    <p className='font-bold pb-3'>10% Progress</p>
                    <Progress
                        percent={10}
                        showInfo={false}
                        strokeColor="#000"
                        trailColor="#fff"
                        strokeWidth={10}
                    />
                    <p className='text-sm text-[#475467]'>Just Starting-You're 10% Closer to a Live Listing</p>
                </div>
            </div>
        </>
    )
}

export default SubNavbar