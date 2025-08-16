import React from 'react';
import banner from "../assets/visa-banner (1).png"
import { Button } from 'antd';
import { Link } from 'react-router';

const Hero = () => {

    return (
        <div className='titillium'>
            <div className='relative'>
                <img src={banner} className='w-full h-[70vh] object-cover object-right brightness-75' alt="banner" />
            </div>
            <div className='absolute inset-0 flex flex-col items-start justify-center text-white text-left pl-4 md:pl-8 lg:pl-16'>
                <p className='font-bold text-4xl mb-4'>Your Gateway to Global Opportunities</p>
                <p className="text-2xl font-bold">Fast, reliable, and hassle-free visa application services.</p>
                <Link to={"/services"}>
                    <button className='font-semibold text-white px-3 py-2 rounded-md border border-gray-300 hover:bg-[#E1AA36] mt-5 hover:scale-105 cursor-pointer transition-transform'>Find your service</button>
                </Link>
            </div>
            <div className='bg-[#154D71]'>
                <p className='font-extrabold text-4xl text-center text-white py-6 fira-sans'>Need visa consultation? Send a request for free consultation</p>
            </div>

        </div>
    );
};

export default Hero;