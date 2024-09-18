import React from 'react'
import feedback from '../../../assets/images/feedback.jpg';
import Footer from './Footer.jsx';

const SubmitFeedback = () => {
    return (
        <>
            <div className='border-t border-[#F2F4F7] px-20 mb-16'>
                <div className="px-7">
                    <div className="mt-6 mb-16">
                        <h1 className='text-2xl font-bold'>Submit Feedback</h1>
                    </div>

                        {/* Form container  */}
                    <div className="form flex justify-between px-4 w-full">

                        <div className="right w-1/2">

                            {/* Submit Feedback form  */}
                            <form action="" className='space-y-4'>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="fullName" className="block mb-1 font-medium">Full Name</label>

                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Full Name"
                                            className="w-4/5 p-2 border border-[#C6D2E0] rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                        <input type="email" id="email" placeholder="Email" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md" />
                                    </div>
                                    <div>
                                        <label htmlFor="mobileNumber" className="block mb-1 font-medium">Mobile Number</label>
                                        <input type="tel" id="mobileNumber" placeholder="Mobile Number" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Gender</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="gender" value="male" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Male</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="gender" value="female" className="form-radio text-[#065E14]" defaultChecked />
                                            <span className="ml-2">Female</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="gender" value="others" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Others</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">How was your overall experience visiting this land?</label>
                                    <div className="space-x-4">
                                        {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
                                            <label key={option} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    className="form-checkbox text-[#065E14]"
                                                    defaultChecked={option === 'Average'}
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">How would you rate the soil fertility?</label>
                                    <div className="space-x-4">
                                        {['Very Fertile', 'Fertile', 'Moderate', 'Poor'].map((option) => (
                                            <label key={option} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    className="form-checkbox text-[#065E14]"
                                                    defaultChecked={option === 'Moderate'}
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Is the land well-drained, and are there irrigation facilities available?</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="irrigation" value="yes" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="irrigation" value="no" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="previousUse" className="block mb-1 font-medium">What has the land been previously used for?</label>
                                    <input type="text" id="previousUse" placeholder="Write something" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md" />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Is there access to water resources?</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="waterAccess" value="yes" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="waterAccess" value="no" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">How would you describe the quality of water available?</label>
                                    <div className="space-x-4">
                                        {['Clean', 'Moderate', 'Contaminated'].map((option) => (
                                            <label key={option} className="inline-flex items-center">
                                                <input type="radio" name="waterQuality" value={option.toLowerCase()} className="form-radio text-[#065E14]" />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Are there any water rights or restrictions associated with the property?</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="waterRights" value="yes" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="waterRights" value="no" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="distanceToMarket" className="block mb-1 font-medium">How far is the land from the nearest market or distribution center?</label>
                                    <input type="text" id="distanceToMarket" placeholder="Enter Distance" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md" />
                                </div>

                                <div>
                                    <label htmlFor="environmentalConcerns" className="block mb-1 font-medium">Are there any environmental concerns?</label>
                                    <textarea id="environmentalConcerns" placeholder="Write something" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md"></textarea>
                                </div>

                                <div>
                                    <label htmlFor="titleDisputes" className="block mb-1 font-medium">Is the title clear, and are there any disputes or restrictions?</label>
                                    <textarea id="titleDisputes" placeholder="Write something" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md"></textarea>
                                </div>

                                <div>
                                    <label htmlFor="suitableCrops" className="block mb-1 font-medium">What types of crops or agricultural uses is the land suitable for?</label>
                                    <textarea id="suitableCrops" placeholder="Write something" className="w-4/5 p-2 border border-[#C6D2E0] rounded-md"></textarea>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">How would you rate the potential ROI of this property?</label>
                                    <div className="flex space-x-4">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label key={value} className="inline-flex items-center">
                                                <input type="radio" name="roi" value={value} className="form-radio text-[#065E14]" />
                                                <span className="ml-2">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Is there potential for future development or expansion?</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="developmentPotential" value="yes" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="developmentPotential" value="no" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Would you recommend this land to others?</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="recommend" value="yes" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="recommend" value="no" className="form-radio text-[#065E14]" />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Your overall rating for the land</label>
                                    <div className="flex space-x-4">
                                        {[5, 4, 3, 2, 1].map((value) => (
                                            <label key={value} className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="overallRating"
                                                    value={value}
                                                    className="form-radio text-[#065E14]"
                                                    defaultChecked={value === 3}
                                                />
                                                <span className="ml-2">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className=" space-y-2 ">
                                    <label className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox text-[#065E14]" defaultChecked />
                                        <span className="ml-2">I agree to share my review publicly on the platform.</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-[#065E14]" defaultChecked />
                                        <span className="ml-2">I confirm that my review is honest and based on my personal experience.</span>
                                    </label>
                                </div>

                                <button type="submit" className="bg-black text-white py-2.5 px-10 rounded-lg hover:bg-[#065E14] transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div className="left w-[460px]">
                            <img src={feedback} alt="Submit Feedback" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer menu  */}

            <Footer />
        </>
    )
}

export default SubmitFeedback