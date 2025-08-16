import { Button, Dropdown, message, Space } from 'antd';


const Consultation = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const items = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];




    const handleSubmit = (e) => {
        e.preventDefault();
        messageApi.open({
            type: 'success',
            content: 'This is a prompt message for success, and it will disappear in 10 seconds',
            duration: 10,
        });
    }
    return (
        <div className=' fira-sans'>
            <div className='w-10/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <div className='px-5 md:px-8 lg:px-10 xl:px-16'>
                    <p>Free 24/7 Support</p>
                    <p className='text-[#1C6EA4] font-extrabold text-4xl py-4'>Get Free & Quality Online Consultation</p>
                    <p className='text-2xl text-gray-600'>Get personalized guidance from our visa experts with free online consultation. Whether you’re applying for a tourist, student, or work visa, our team will answer your questions, review your documents, and provide step-by-step assistance to make your application smooth and hassle-free.</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-10 bg-gray-100 p-10 rounded-lg'>
                        <p className='font-extrabold text-3xl text-center text-gray-700'>Request Free Consultation</p>

                        <input type="text" name='name' required className='border border-gray-400 px-3 py-2 rounded-md' placeholder='Enter Your Name' />
                        <input type="email" name='email' required className='border border-gray-400 px-3 py-2 rounded-md' placeholder='Enter Your Email' />
                        <Dropdown menu={{ items }} trigger={['click']} className='border border-gray-400 px-3 py-2 rounded-md'>
                            <a>
                                <Space>
                                    Select Visa

                                </Space>
                            </a>
                        </Dropdown>
                        <Dropdown menu={{ items }} trigger={['click']} className='border border-gray-400 px-3 py-2 rounded-md'>
                            <a>
                                <Space>
                                    Select Visa

                                </Space>
                            </a>
                        </Dropdown>
                        <Button type="primary" danger size='large'  className="!font-bold !px-3 !py-2 !rounded-lg">
                            SEND REQUEST
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Consultation;