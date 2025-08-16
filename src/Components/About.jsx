import React from 'react';
import image1 from "../assets/images/visa-image (1) (1).jpg";
import image2 from "../assets/images/visa-image (2) (1).jpg";
import image3 from "../assets/images/visa-image (3) (1).jpg";
import image4 from "../assets/images/visa-image (4) (1).jpg";

const About = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-6'>
                    <img className='w-20 h-20 object-cover' src={image1} alt="" />
                    <img className='w-20 h-20 object-cover' src={image2} alt="" />
                    <img className='w-20 h-20 object-cover' src={image3} alt="" />
                    <img className='w-20 h-20 object-cover' src={image4} alt="" />
                </div>
                <div className='col-span-6'>
                    <h2 className='text-3xl font-bold mb-4'>Simplifying Visa Applications for Everyone</h2>
                    <ul>
                        <li>Easy & Transparent Process:
                            Our platform guides you step-by-step through your visa application, so you always know what to do next. No more confusion or delays.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;