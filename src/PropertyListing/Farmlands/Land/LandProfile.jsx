import React, { useState } from 'react'
import '../../../assets/css/App.css'
import farmland from '../../../assets/images/farmland.jpg'
import { EnvironmentOutlined, HeartFilled, HeartOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { PiIslandDuotone } from "react-icons/pi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GiTreeBranch } from "react-icons/gi";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineAgriculture } from "react-icons/md";

const LandProfile = () => {
    const [isFav, setIsFav] = useState(false)
    return (
        <>
            {/* main container  */}
            <div className='px-7 w-full flex'>
                {/* left side container  */}
                <div className="bg-white rounded-xl shadow-md p-4 w-[80%] landprofile">
                    {/* Main content container */}
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Images */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src={farmland}
                                    alt="Property"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                {/* Icons */}
                                <Button
                                    onClick={(e) => isFav ? setIsFav(false) : setIsFav(true)}
                                    className="absolute top-2 left-2 bg-white p-2 tex-xl rounded-lg shadow-md"
                                >
                                    {isFav ? <HeartFilled /> : <HeartOutlined />}
                                </Button>
                                <Button className="absolute top-2 right-2 bg-white p-2 rounded-lg text-xl shadow-md">
                                    <ShareAltOutlined />
                                </Button>
                            </div>
                            {/* Preview images */}
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                <img
                                    src={farmland}
                                    alt="Preview 1"
                                    className="w-full h-20 object-cover rounded-lg"
                                />
                                <img
                                    src={farmland}
                                    alt="Preview 2"
                                    className="w-full h-20 object-cover rounded-lg"
                                />
                                <img
                                    src={farmland}
                                    alt="Preview 3"
                                    className="w-full h-20 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
                            {/* property heading  */}
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">Agriculture Land for Sale</h3>
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#FBBC05] text-sm py-1.5 px-3 rounded-full"> <StarOutlined />4.2</span>
                                    <span className="bg-[#34A853] text-white text-sm px-3 py-1.5 rounded-full">Verified</span>
                                </div>
                            </div>


                            <p className="text-gray-500 mt-2"> <EnvironmentOutlined className='text-red-700 txt-xl' /> Plot 10, Mitra Space, Srisailam Highway, Hyderabad, Telangana</p>
                            <a href="#" className="text-blue-500 underline text-xs font-bold">View on map</a>


                            <p className='font-bold text-lg mt-3'>3 Acres</p>

                            {/* Property price  */}
                            <div className="flex items-center mt-4">
                                <h3 className="text-3xl font-bold">₹ 10.25 Cr</h3>
                                <span>&nbsp; &nbsp;| </span>
                                <span className="text-gray-500 text-xs ml-2">₹ 3377/Sqft</span>
                            </div>

                            <div className="flex justify-between items-center flex-wrap">
                                <div className='features mt-4 flex items-center'>
                                    < PiIslandDuotone className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Soil Type</p>
                                        <p className="text-sm font-semibold">Red Soil</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <MdOutlineWaterDrop className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Water</p>
                                        <p className="text-sm font-semibold">Adequate</p>
                                    </div>
                                </div>

                                <div className='features mt-4 flex items-center'>
                                    <FaRoad className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Road Distance</p>
                                        <p className="text-sm font-semibold">1 Km</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <BsGeoAlt className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Land Access</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <MdEventAvailable className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Availability</p>
                                        <p className="text-sm font-semibold">Immediate</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <GrTransaction className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Last Transaction</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <GiTreeBranch className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Crops</p>
                                        <p className="text-sm font-semibold">Wheat, Paddy</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <PiBuildingOffice className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">MRO Office</p>
                                        <p className="text-sm font-semibold">...</p>
                                    </div>
                                </div>
                                <div className='features mt-4 flex items-center'>
                                    <MdOutlineAgriculture className='text-2xl me-2' />
                                    <div>
                                        <p className="text-xs font-light uppercase">Property zone</p>
                                        <p className="text-sm font-semibold">Agriculture</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side container  */}
                <aside className='w-[20%] ps-5'>
                    <div className="profile-container bg-[#F0FDF2] rounded-lg">
                        profile
                    </div>

                    <div className="demand-details">
                        deamnd
                    </div>
                </aside>
            </div>
        </>

    )
}

export default LandProfile