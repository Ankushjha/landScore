import React from 'react'
import farmland from '../../../assets/images/farmland.jpg'
import { EnvironmentOutlined, StarFilled } from '@ant-design/icons'
import { Button } from 'antd'

const SimilarAgriLandCard = () => {
  return (
    <>
        <div className="container h-[350px] rounded-lg w-full md:w-1/3 lg:w-[23.5%] bg-[#F9FAFB] shadow-md">
        {/* top image  */}
            <div className="card-image h-1/2 rounded-t-lg">
                <img src={farmland} alt="Agriculture Card Image" className='rounded-t-lg h-full' />
            </div>

          {/* card content */}
            <div className="card-content h-1/2 p-4">
                <div className="flex justify-between text-sm mb-2 flex-wrap">
                    <span>3 Acres Land for Sale</span>
                    <span>4.2 <StarFilled className='text-[#FBBC05]' /></span>
                </div>
                <p className='text-2xl font-bold mb-2'>₹ 36L</p>
                <p className='text-sm text-[#616161] mb-2'>
                    <EnvironmentOutlined />
                 <span>Srisailam Highway, Hyderabad</span>
                 </p>
                 <Button
                  type='primary'
                   size='large'
                    className='bg-[#065E14] text-white mt-2 text-sm rounded-xl'
                    >
                        Contact
                        </Button>
            </div>
        </div>
    </>
  )
}

export default SimilarAgriLandCard