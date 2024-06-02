import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import NFTExample from '../image/nftmedium.webp';

import { IoImagesOutline } from "react-icons/io5";
import tonkeeplogo from '../image/ton_keep.png';
import Wallet from '../image/wallet.svg';
import { username } from './Connect';


import {
  userFriendlyAddress,
  useTonConnectModal,
  useTonConnectUI,
  useTonAddress,
  useTonWallet } from '@tonconnect/ui-react';

import logo from '../image/tractionEye.svg';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import elipse from '../image/Ellipse 7.png';

import { FaClipboardList } from "react-icons/fa";
import tonlogo from '../image/ton.png';
import tonup from '../image/tonup.png';
import anon from '../image/anon.png';
import duck from '../image/duck.png';
import tgram from '../image/tgam.png';

export default function Home() {
  const [data, setData] = useState([]);
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const navigate = useNavigate();
  const wallet = useTonWallet();

  function shortenAddress(address) {
    if (address.length <= 8) {
      return address;
    }
    const start = address.slice(0, 4);
    const end = address.slice(-4);
    return `${start}...${end}`;
  }

  const assets = [
    {
      name: 'TonCoin',
      amount: 96.4293,
      logo: tonlogo,
      price: 1,
      usd_val: 96
    },
    {
      name: 'Tonup',
      amount: 96.4293,
      logo: tonup,
      price: 1,
      usd_val: 96
    },
    {
      name: 'anon',
      amount: 96.4293,
      logo: anon,
      price: 1,
      usd_val: 96
    },
    {
      name: 'duckCoin',
      amount: 96.4293,
      logo: duck,
      price: 1,
      usd_val: 96
    },
    {
      name: 'Tgram',
      amount: 96.4293,
      logo: tgram,
      price: 1,
      usd_val: 96
    },
  ];

  useEffect(() => {
    function generateDataset() {
      const dataset = [];
      for (let i = 1; i <= 100; i++) {
        const value = Math.floor(Math.random() * 10) + 1;
        dataset.push({
          days: `Day ${i}`,
          value: value,
        });
      }
      return dataset;
    }
    const generatedData = generateDataset();
    setData(generatedData);
  }, []);

  const handleDisconnect = async () => {
    try {
      await tonConnectUI.disconnect();
      console.log('Wallet disconnected successfully');
      navigate('/connect');  // Перенаправление на /connect
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <div className='h-screen overflow-visible w-screen bg-gray-700'>
      <div className='h-2/5 flex flex-col justify-between pt-5 '>
        <div className='flex flex-col items-start gap-4 px-8 '>
          <div className='flex flex-row items-center gap-2'>
            <Link to='/profiles'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-black'>
                <img src={logo} alt='logo' className='h-8 w-8 ' />
              </div>
            </Link>
            <Link to='/profiles'>
              <div className='flex flex-col'>
                <span className='font-semibold text-gray-300 text-xl'>{username}</span>
                <span className='text-gray-400 text-md font-semibold'>{shortenAddress(userFriendlyAddress)}</span>


              </div>
            </Link>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold text-sm text-gray-400'>Net Worth</span>
            <span className='font-semibold text-3xl text-white'>$168</span>
            <span className='text-md text-green-600 font-bold'>+0.12% ($0)</span>
          </div>
        </div>
        <div className='h-2/6 w-full'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Area type="monotone" dataKey="value" stroke="#43A047" fill="#43A047" opacity={0.4} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='flex flex-col min-h-3/5 bg-white rounded-t-3xl px-5 pt-8'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <img src={elipse} alt='elipse' className='h-5 w-5' />
            <span className='font-bold text-xl'>Assets</span>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <FaClipboardList size={20} className='text-gray-500' />
            <span className='font-semibold text-lg text-gray-500'>Transactions</span>
          </div>
        </div>
        <div className='mt-8 flex justify-between text-gray-400 font-semibold text-center'>
          <span className='text-left' style={{ flex: 4 }}>ASSETS/AMOUNT</span>
          <span className='' style={{ flex: 3 }}>PRICE</span>
          <span className='text-right' style={{ flex: 3 }}>USD VALUE</span>
        </div>
        <div className='flex flex-col gap-5 mt-8 mb-6'>
          {
            assets.map((asset) => (
              <div className='flex flex-row justify-between ' key={asset.name}>
                <div className='flex gap-2 items-center flex-1' style={{ flex: 4 }}>
                  <img src={asset.logo} alt='logo' className='w-14 h-14' />
                  <div className='flex flex-col'>
                    <span className='font-semibold text-lg text-gray-700'>
                      {asset.amount}
                    </span>
                    <span className='font-semibold text-gray-300'>
                      {asset.name}
                    </span>
                  </div>
                </div>
                <span className='font-semibold text-gray-700 text-center flex-1' style={{ flex: 3 }}>
                  {'$' + asset.price}
                </span>
                <span className='font-semibold text-gray-700 text-center flex-1' style={{ flex: 3 }}>
                  {'$' + asset.usd_val}
                </span>
              </div>
            ))
          }
        </div>
        
        <div className='mt-6npm  flex flex-row justify-between my-3'>
          <div className='flex flex-row items-center gap-2'>
            <span><IoImagesOutline /></span>
            <span className='font-bold text-xl'>NFTs</span>
          </div>
          <Link to='/nft-list'>
            <div className='flex flex-row items-center gap-1'>
              <span className='font-semibold text-lg text-gray-500'>See all</span>
              <FiArrowRight size={20} className='text-gray-500' />
            </div>
          </Link>
        </div>
          <di className='my-2'>
            <ul className='flex justify-center gap-10 items-center p-4'>
              <Link to='/nft'>
                <li >
                  <img className='rounded-lg' src={NFTExample} alt='nft'/>
                </li>
              </Link>
              <Link to='/nft'>
                <li >
                  <img className='rounded-lg' src={NFTExample} alt='nft'/>
                </li>
              </Link>
              <Link to='/nft'>
                <li >
                  <img className='rounded-lg' src={NFTExample} alt='nft'/>
                </li>
              </Link>


            </ul>
          </di>
        
      </div>
    </div>
  );
}
