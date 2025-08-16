import React from 'react';
import image1 from "../assets/images/visa-image (6) (1).jpg";
import image2 from "../assets/images/visa-image (2) (1).jpg";
import image3 from "../assets/images/visa-image (3) (1).jpg";
import image4 from "../assets/images/visa-image (4) (1).jpg";

const About = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-10 fira-sans'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>

                {/* Left: Images */}
                <div className='col-span-12 md:col-span-6 grid grid-cols-2 gap-4'>
                    <img className='w-full h-40 md:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform' src={image1} alt="Visa 1" />
                    <img className='w-full h-40 md:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform' src={image2} alt="Visa 2" />
                    <img className='w-full h-40 md:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform' src={image3} alt="Visa 3" />
                    <img className='w-full h-40 md:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform' src={image4} alt="Visa 4" />
                </div>

                {/* Right: Text */}
                <div className='col-span-12 md:col-span-6'>
                    <h2 className='text-3xl font-bold mb-6 text-[#1C6EA4]'>Simplifying Visa Applications for Everyone</h2>
                    <ul className='list-disc space-y-4 ml-5 text-gray-700'>
                        <li>
                            <strong>Easy & Transparent Process:</strong>
                            <p className='ml-4 mt-1'>Our platform guides you step-by-step through your visa application, so you always know what to do next. No more confusion or delays.</p>
                        </li>
                        <li>
                            <strong>Trusted & Reliable:</strong>
                            <p className='ml-4 mt-1'>We provide up-to-date information about visa requirements for multiple countries. Count on us for accurate and reliable guidance.</p>
                        </li>
                        <li>
                            <strong>Track Your Application:</strong>
                            <p className='ml-4 mt-1'>Monitor the progress of your visa application in real-time and get notified at each step, making the process stress-free.</p>
                        </li>
                        <li>
                            <strong>Secure & Private:</strong>
                            <p className='ml-4 mt-1'>Your personal information is handled with care. We use industry-standard security measures to protect your data.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;
