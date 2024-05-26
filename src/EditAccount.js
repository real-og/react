import './App.css';
import { IoIosArrowBack } from "react-icons/io";
import logo from './image/tractionEye.svg'
import { RiUserAddLine } from "react-icons/ri"


export default function Edit() {
  return (
        <div className="App bg-gray-100 flex flex-col h-screen items-center w-screen py-5 px-5 ">
            <div className='w-full  flex flex-col h-screen items-center '>
                <div className='flex flex-row justify-end  items-center w-full'>
                    <span> <a href='' className=' text-gray-500 no-underline font-semibold '>Cancel</a></span>
                </div>

                <span className='text-black font-bold mt-6' style={{fontSize:'24px'}}>Edit Accounts</span>


                <button className='flex flex-row bg-white p-3 mt-14 rounded-lg justify-between items-center w-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center  bg-black'>
                            <img src={logo} alt='logo' className='h-6 w-6 '/>
                        </div>

                        <div className='flex flex-col'>
                            <span className='font-semibold '>WhalePanda</span>
                            <span className='text-gray-500 text-sm'>0xaaa....bbb</span>
                        </div>

                    </div>
                    <div className='flex flex-row justify-end items-center'>
                        <button className='text-white text-lg flex flex-row w-5/6 justify-center items-center bg-red-700 py-2 px-8 mt-2 rounded-lg'>
                            <span className=''>Remove</span>
                        </button>
                    </div>
                </button>


                <button className='flex flex-row bg-white p-3 mt-2 rounded-lg justify-between items-center w-full'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-8 h-8 rounded-full flex items-center justify-center  bg-black'>
                            <img src={logo} alt='logo' className='h-6 w-6 '/>
                        </div>

                        <div className='flex flex-col'>
                            <span className='font-semibold'>0xe442....2133</span>
                            <span className='text-gray-500 text-sm'>0xe442....2133</span>
                        </div>

                    </div>
                    <div className='flex flex-row justify-end items-center'>
                        <button className='text-white text-lg flex flex-row w-5/6 justify-center items-center bg-red-700 py-2 px-8 mt-2 rounded-lg'>
                            <span className=''>Remove</span>
                        </button>
                    </div>
                </button>

            </div>

        
        </div>
    )
}
