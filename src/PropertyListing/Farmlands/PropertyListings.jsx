import React, { useEffect, useState } from 'react'
import '../../assets/css/App.css'
import PublicNavbar from '../../Navbar/PublicNavbar'
import HeadBanner from '../HeadBanner/HeadBanner'
import { Radio, Input, Button } from 'antd'
import { SearchOutlined, FilterOutlined, MenuOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import ListViewSearch from './ListViewSearch'
import MapViewSearch from './MapViewSearch'
import ListRightContent from './ListRightContent'
import MapRightContent from './MapRightContent'

const PropertyListings = () => {
    const [filter, setFilter] = useState('list');

    return (
        <>
            {/* Navbar  */}
            {/* <PublicNavbar /> */}
            {/* Heading banner  */}
            <HeadBanner />

            {/* content  */}
            <div className="container lg:flex md:block px-10 lg:px-20 pe-10 my-5">
                {/* left content  */}
                <div className="left lg:w-[60%] md:w-full">
                    {/* search block  */}
                    <div className="search block lg:flex lg:gap-5">
                        <Input
                            className='search-input'
                            size='large'
                            prefix={<SearchOutlined />}
                            value='Srisailam'
                        />

                        <div className="flex mt-2 lg:mt-0">
                            <Button size='large' className='btn px-7'> <FilterOutlined /> More Filter</Button>
                            <Button size='large' className='bg-[#065E14] text-white px-10 btn ms-2'>Search</Button>
                        </div>
                    </div>

                    <div className="search-result flex justify-between mt-5 h-auto items-center">
                        <div className="result-found font-bold">
                            {filter == "list" ? "40 results found" : "12 results found"}
                        </div>

                        <div className="filter-option">
                            <Radio.Group
                                size='large'
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className='radio-filter'
                            >
                                <Radio.Button
                                    value="list"
                                >
                                    <MenuOutlined />
                                </Radio.Button>
                                <Radio.Button
                                    value="map"
                                >
                                    <EnvironmentOutlined />
                                </Radio.Button>
                            </Radio.Group>
                        </div>
                    </div>

                    {filter == "list" ? <ListViewSearch /> : <MapViewSearch />}
                </div>

                {/* right content  */}
                {filter == "list" ? <ListRightContent /> : <MapRightContent />}
            </div>
        </>
    )
}

export default PropertyListings