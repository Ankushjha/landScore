import React from 'react'
import PublicNavbar from '../../Navbar/PublicNavbar'
import HeadBanner from '../HeadBanner/HeadBanner'
import { Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const PropertyListings = () => {
    return (
        <>
            <PublicNavbar />
            <HeadBanner />

            <div className="container mx-20 mt-5">
                <div className="left w-[70%]">
                    <div className="search flex gap-5">
                        <Input
                            className=' focus:border-[#065E14] w-[70%]'
                            size='large'
                            prefix={<SearchOutlined />}
                        />

                        <button>More Filter</button>
                        <button>Search</button>
                    </div>
                </div>
                <div className="right w-[30%]">

                </div>
            </div>
        </>
    )
}

export default PropertyListings