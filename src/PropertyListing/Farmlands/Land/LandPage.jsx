import { Breadcrumb, Button } from 'antd'
import React from 'react'
import LandProfile from './LandProfile'
import LandProfileMoreDetails from './LandProfileMoreDetails'
import SimilarLandListings from './SimilarLandListings'
import CustomerRating from './CustomerRating'
import footer from '../../../assets/images/footer.jpg';
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const LandPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="breadcrumb-banner px-10 lg:px-20 py-2 bg-gradient-to-r from-[#C0D6C3] via-[#E1E8DF] to-[#D2CBBF]">
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
                <SimilarLandListings />
                <CustomerRating />
            </div>

            {/* Footer last section  */}

            <div
                className='feedback bg-cover bg-center h-60 text-center p-10 text-[#065E14]'
                style={{ backgroundImage: `url(${footer})` }}
            >
                <h3 className='text-4xl font-bold mb-6'>Visited this property?</h3>
                <p clas>We'd love to hear about your experience. Please take a moment to share your thoughts.</p>

                <div className="flex justify-center mt-6">
                    <Button
                        type="primary"
                        size='large'
                        className="bg-[#065E14] py-7 text-white rounded-2xl w-56"
                        onClick={() => navigate('/submit-feedback')}
                    >
                        Submit Feedback
                    </Button>
                </div>
            </div>


            {/* footer menu  */}
            <Footer />
        </>
    )
}

export default LandPage