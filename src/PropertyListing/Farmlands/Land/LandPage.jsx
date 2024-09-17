import { Breadcrumb } from 'antd'
import React from 'react'
import LandProfile from './LandProfile'
import LandProfileMoreDetails from './LandProfileMoreDetails'

const LandPage = () => {
    return (
        <>
            <div className="breadcrumb-banner px-10 lg:px-20 py-3 bg-gradient-to-r from-[#C0D6C3] via-[#E1E8DF] to-[#D2CBBF]">
                <Breadcrumb
                    separator=">"
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Property Listings</Breadcrumb.Item>
                    <Breadcrumb.Item>Farmlands</Breadcrumb.Item>
                    <Breadcrumb.Item className='text-[#065E14] font-semibold'>Land Name</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="land-profile px-10 lg:px-20 py-5">
                <LandProfile />
                <LandProfileMoreDetails />
            </div>
        </>
    )
}

export default LandPage