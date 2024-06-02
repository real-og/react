import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { IoIosArrowBack } from "react-icons/io";
import logo from '../image/tractionEye.svg'
import { RiUserAddLine } from "react-icons/ri";


import {
  userFriendlyAddress,
  useTonConnectModal,
  useTonConnectUI,
  useTonAddress,
  useTonWallet } from '@tonconnect/ui-react';


function App() {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const navigate = useNavigate();
  const wallet = useTonWallet();

  const handleDisconnect = async () => {
    try {
      await tonConnectUI.disconnect();
      console.log('Wallet disconnected successfully');
      navigate('/connect');  // Перенаправление на /connect страницу
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  function shortenAddress(address) {
    if (address.length <= 8) {
      return address;
    }
    const start = address.slice(0, 4);
    const end = address.slice(-4);
    return `${start}...${end}`;
  }

  return (
    <div className="App bg-gray-100 flex flex-col h-screen items-center w-screen py-3 px-5 ">
      <div className='w-full  flex flex-col h-screen items-center ' width="100%">
        <div className='flex flex-row justify-between p-3 items-center w-full'>
          <Link to='/'><span><IoIosArrowBack color='black' size={20}/></span></Link>
          <Link to='/profiles-manage'><span className=' text-red-500 no-underline font-semibold '>Manage</span></Link>
        </div>

        <span className='text-black font-semibold  mt-6'  style={{fontSize:'24px'}}>Tap Account To Login</span>

{/*
        <button className='flex flex-row bg-white p-3 mt-10 rounded-lg justify-between items-center w-full'>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center  bg-black'>
              <img src={logo} alt='logo' className='h-6 w-6 '/>
            </div>

            <div className='flex flex-col'>
              <span className='font-semibold '>WhalePanda</span>
              <span className='text-gray-500 text-sm'>0xaaa....bbb</span>
            </div>

          </div>
          <span className='font-semibold text-lg text-black'>$145</span>
        </button> */}


        <Link to='/' >
        <button className='flex flex-row bg-white p-3 mt-2 rounded-lg justify-between items-center w-full'>
          <div className='flex flex-row items-center gap-2'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center  bg-black'>
              <img src={logo} alt='logo' className='h-6 w-6 '/>
            </div>

            <div className='flex flex-col'>
              <span className='text-gray-500 text-sm'>{shortenAddress(userFriendlyAddress)}</span>
            </div>

          </div>
          <span className='font-semibold text-lg text-black'>$5</span>
        </button>
        </Link>

        <button className='text-red-500 text-lg flex flex-row w-5/6 justify-center items-center gap-2 bg-white py-4 mt-10 rounded-lg'>
          <RiUserAddLine size={20} color="red"/>
          <Link to='/connect'><span>Add account</span></Link>
        </button>

        <button className='text-red-500 text-lg flex flex-row w-5/6 justify-center items-center gap-2 bg-white py-4 mt-2 rounded-lg'>
          <span onClick={handleDisconnect} className='text-gray-400'>Logout</span>
        </button>
      </div>

      <span className='text-gray-500 text-lg'>The total networth of the wallets is <span className='text-black font-bold text-lg'>$150</span></span>

    </div>
  );
}
export default App;
