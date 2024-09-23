import React, { useState } from 'react'
import { Breadcrumb, Radio, Input, Button, Typography } from 'antd';

const { Text } = Typography;

const AddNewListing = () => {
  const [userType, setUserType] = useState(null);
  const [listingType, setListingType] = useState(null);
  const [landZone, setLandZone] = useState(null);

  return (
    <>
      <div className="container-listing h-screen overflow-y-scroll scroll-smooth">
        <div className="fixed-container pt-6 pb-4 bg-white fixed z-10">
          <Breadcrumb
            items={[
              {
                title: 'MyListing',
              },
              {
                title: <a href="">Land Listing</a>,
              },
              {
                title: <a href="">New Listing</a>,
              },
              {
                title: 'Basic Details',
              },
            ]}
          />

          <h2 className='text-xl font-bold'>Add New Listing</h2>
        </div>

        <div className="addNewListingForm pt-2 mt-24 mb-10">
          <form className="space-y-4">
            {/* I'm (Owner / Agent) */}
            <div className="mb-4">
              <Text className="block font-semibold mb-2">I'm</Text>
              <Radio.Group
                className="flex space-x-4"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <Radio.Button value="owner" className="bg-transparent border ">
                  Owner
                </Radio.Button>
                <Radio.Button value="agent" className="bg-transparent border  ">
                  Agent
                </Radio.Button>
              </Radio.Group>
            </div>

            {/* You are looking to? (Sell / Rent/Lease) */}
            <div className="mb-4">
              <Text className="block font-semibold mb-2">You are looking to?</Text>
              <Radio.Group
                className="flex space-x-4"
                value={listingType}
                onChange={(e) => setListingType(e.target.value)}
              >
                <Radio.Button value="sell" className="bg-transparent border ">
                  Sell
                </Radio.Button>
                <Radio.Button value="rent" className="bg-transparent border">
                  Rent/Lease
                </Radio.Button>
              </Radio.Group>
            </div>

            {/* Select Land Zoning */}
            <div className="mb-4">
              <Text className="block font-semibold mb-2">Select Land zoning</Text>
              <Radio.Group
                className='flex gap-4 flex-wrap rounded-full'
                value={landZone}
                onChange={(e) => setLandZone(e.target.value)}
              >
                <Radio.Button value="agriculture" className="border rounded-full">
                  Agriculture land
                </Radio.Button>
                <Radio.Button value="industrial" className="border rounded-full">
                  Industrial land
                </Radio.Button>
                <Radio.Button value="commercial" className="border rounded-full">
                  Commercial land
                </Radio.Button>
                <Radio.Button value="residential" className="border rounded-full">
                  Residential land
                </Radio.Button>
                <Radio.Button value="non-agriculture" className="border rounded-full">
                  Non-agriculture
                </Radio.Button>
                <Radio.Button value="sez" className="border rounded-full">
                  Special Economic Zone
                </Radio.Button>
                <Radio.Button value="eco-sensitive" className="border rounded-full">
                  Eco sensitive & reserved land
                </Radio.Button>
              </Radio.Group>
            </div>

            {/* Full Name */}
            <div>
              <Text className="block font-semibold mb-2">Full Name</Text>
              <Input placeholder="Full Name" className='w-2/3 py-3 text-[16px] bg-transparent rounded-lg border-2' required />
            </div>

            {/* Email */}
            <div>
              <Text className="block font-semibold mb-2">Email</Text>
              <Input placeholder="Email" type='email' className='w-2/3 py-3 text-[16px] bg-transparent rounded-lg border-2' required />
            </div>

            {/* Mobile Number */}
            <div>
              <Text className="block font-semibold mb-2">Mobile Number</Text>
              <Input placeholder="Mobile Number" type='number' className='w-2/3 py-3 text-[16px] bg-transparent rounded-lg border-2' required />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button
                type="primary"
                className="bg-[#065E14] h-10 rounded-md text-white"
                htmlType="submit"
              >
                Save & Continue
              </Button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default AddNewListing