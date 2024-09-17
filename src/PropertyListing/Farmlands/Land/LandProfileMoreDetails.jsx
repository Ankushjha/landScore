import React, { useState } from 'react'
import LandDocument from './LandDocument';
import LandPricingDetails from './LandPricingDetails';

const LandProfileMoreDetails = () => {
    const [activeTab, setActiveTab] = useState('basicDetails');

    const tabs = [
        { id: 'basicDetails', label: 'Basic Details' },
        { id: 'documents', label: 'Documents' },
        { id: 'pricing', label: 'Pricing & Other' },
        { id: 'transactions', label: 'Property Transactions' },
        { id: 'marketRate', label: 'Market Rate' },
    ];

    const basicDetails = [
        { label: 'SURVEY NUMBER', value: '12345' },
        { label: 'SOIL QUALITY', value: 'Good' },
        { label: 'LENGTH', value: '---' },
        { label: 'BREADTH', value: '---' },
        { label: 'WATER SOURCE', value: 'Canal' },
        { label: 'NO OF OPEN SIDES', value: '2' },
        { label: 'BOUNDARY WALL', value: 'No' },
        { label: 'CONSTRUCTION ALLOWED', value: 'Yes' },
        { label: 'ANY CONSTRUCTION DONE?', value: 'Yes (Shed)' },
        { label: 'TRANSPORTATION', value: 'Yes' },
        { label: 'OWNERSHIP', value: '---' },
        { label: 'APPROVED BY', value: 'GHMC' },
        { label: 'ELECTRICITY', value: 'Yes' },
        { label: 'TRANSACTION TYPE', value: 'Resale' },
        { label: 'LEGAL STATUS', value: 'Verified' },
        { label: 'PRONE TO ANY ENVIRONMENTAL CONDITIONS?', value: 'No' },
    ];

    const renderBasicDetails = () => (
        <div className="flex flex-wrap -mx-2">
            {basicDetails.map((detail, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500 uppercase">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basicDetails':
                return renderBasicDetails();
            case 'documents':
                return <LandDocument />;
            case 'pricing':
                return <LandPricingDetails />;
            case 'transactions':
                return <p>Property Transactions content goes here</p>;
            case 'marketRate':
                return <p>Market Rate content goes here</p>;
            default:
                return null;
        }
    };


    return (
        <>
            {/* main container  */}
            <div className='px-7 mt-5 w-full '>
                <div className='rounded-xl shadow-md px-8 py-10 w-full'>

                    <h2 className='text-2xl font-bold'>More Details</h2>
                    <div className="mb-4">
                        <ul className="flex flex-wrap -mb-px">
                            {tabs.map((tab) => (
                                <li key={tab.id} className="mr-2">
                                    <button
                                        className={`inline-block pt-4 px-4 rounded-t-lg ${activeTab === tab.id
                                                ? 'text-[#065E14] border-b-2 border-[#065E14]'
                                                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandProfileMoreDetails