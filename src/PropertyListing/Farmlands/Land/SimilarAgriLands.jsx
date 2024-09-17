import React from 'react'
import SimilarAgriLandCard from './SimilarAgriLandCard'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Button, } from 'antd';

const SimilarAgriLands = () => {
  return (
    <>
        
        {/* Carousel Cards */}
        <div className="flex flex-wrap gap-5">
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        <SimilarAgriLandCard />
        </div>

        {/* Carousel Buttons  */}
        <div className="carousel-buttons flex justify-center gap-10 mt-7">
            <Button size='large' className='border-2 border-black rounded-full' disabled> <FaArrowLeftLong className='text-4xl'/> </Button>
            <Button size='large' className='border-2 border-black rounded-full'> <FaArrowRightLong className='text-4xl' /> </Button>
        </div>
    </>
  )
}

export default SimilarAgriLands