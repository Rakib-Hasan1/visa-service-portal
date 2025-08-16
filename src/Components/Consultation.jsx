import React, { useState } from "react";
import { Button, Dropdown, Space, message, Menu } from "antd";

const Consultation = () => {
  const [selectedVisa, setSelectedVisa] = useState("Select Visa");
  const [selectedVisaFor, setSelectedVisaFor] = useState("Select Visa For");

  const visaTypes = [
    { label: "Tourism & Travel", key: "Tourism & Travel" },
    { label: "Education", key: "Education" },
    { label: "Employment", key: "Employment" },
    { label: "Family & Settlement", key: "Family & Settlement" },
    { label: "Permanent Residency", key: "Permanent Residency" },
    { label: "Special Visas", key: "Special Visas" },
  ];

  const visaForOptions = [
    { label: "Self", key: "Self" },
    { label: "Family Member", key: "Family Member" },
    { label: "Employee", key: "Employee" },
    { label: "Student", key: "Student" },
  ];

  const visaMenu = <Menu onClick={e => setSelectedVisa(e.key)} items={visaTypes} />;
  const visaForMenu = <Menu onClick={e => setSelectedVisaFor(e.key)} items={visaForOptions} />;

  const handleSubmit = e => {
    e.preventDefault();

    if (selectedVisa === "Select Visa" || selectedVisaFor === "Select Visa For") {
      message.warning("Please select both Visa and Visa For options.");
      return;
    }

    message.success(
      `Consultation request sent successfully for "${selectedVisa}" (${selectedVisaFor})!`
    );

    e.target.reset();
    setSelectedVisa("Select Visa");
    setSelectedVisaFor("Select Visa For");
  };

  return (
    <div className="fira-sans">
      <div className="w-10/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="px-5 md:px-8 lg:px-10 xl:px-16">
          <p>Free 24/7 Support</p>
          <p className="text-[#1C6EA4] font-extrabold text-4xl py-4">
            Get Free & Quality Online Consultation
          </p>
          <p className="text-2xl text-gray-600">
            Get personalized guidance from our visa experts with free online consultation. Whether you’re applying for a tourist, student, or work visa, our team will answer your questions, review your documents, and provide step-by-step assistance to make your application smooth and hassle-free.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 bg-gray-100 p-10 rounded-lg">
            <p className="font-extrabold text-3xl text-center text-gray-700">
              Request Free Consultation
            </p>

            <input
              type="text"
              name="name"
              required
              className="border border-gray-400 px-3 py-2 rounded-md"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              required
              className="border border-gray-400 px-3 py-2 rounded-md"
              placeholder="Enter Your Email"
            />

            <Dropdown overlay={visaMenu} trigger={['click']}>
              <a className="border border-gray-400 px-3 py-2 rounded-md w-full flex justify-between cursor-pointer">
                <Space>{selectedVisa}</Space>
              </a>
            </Dropdown>

            <Dropdown overlay={visaForMenu} trigger={['click']}>
              <a className="border border-gray-400 px-3 py-2 rounded-md w-full flex justify-between cursor-pointer">
                <Space>{selectedVisaFor}</Space>
              </a>
            </Dropdown>

            <Button
              type="primary"
              danger
              size="large"
              htmlType="submit"
              className="!font-bold !px-3 !py-2 !rounded-lg"
            >
              SEND REQUEST
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
