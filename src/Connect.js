import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import tonkeeplogo from './image/ton_keep.png'
import Wallet from './image/wallet.svg'
import { useTonConnectModal } from '@tonconnect/ui-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';


export default function () {
    const { state, open, close } = useTonConnectModal();


    const data=[
      {day:'start', value:10},
      {day:'end', value:10}
  
    ]
    useEffect(()=>{
      open()
    },[])
  
    return (
      <div className='h-screen w-screen bg-gray-700'>
        <div className='h-2/5 flex flex-col justify-between pt-10 '>
          <div className='flex justify-start px-10 '>
            <div className='flex flex-col'>
              <span className='font-semibold text-sm text-gray-400'>Net Worth</span>
              <span className='font-semibold text-3xl  text-white'>$0</span>
              <span className='font-semibold text-md text-gray-400'>+0%($0)</span>
            </div>
          </div>
  
          <div className='h-2/5 w-full'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top:0, right:0, left:0, bottom:0 }}
              >
                <Area type="monotone" dataKey="value" stroke="#43A047" fill="#43A047" opacity={0.4} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='flex flex-col h-3/5 bg-white rounded-t-3xl p-4'>
          <span className='text-center text-black text-2xl font-semibold'>
            Login
          </span>
  
          <div className='mt-10 flex flex-col gap-5'>
            <button onClick={open} className='border p-3 rounded-xl flex flex-row justify-between items-center w-full connect-btn'>
              <div className='flex items-center gap-2'>
                <div className='rounded-xl h-10 w-10 flex overflow-hidden'>
                  <img src={Wallet} alt='tonkeeplogo' className='h-10 w-10'/>
                </div>
                <span className='font-bold text-xl'>Wallet</span>
              </div>
              <IoIosArrowForward size={20} color='black'/>
            </button>
  
            <button className='border p-3 connect-btn rounded-xl flex flex-row justify-between items-center w-full'>
              <div className='flex items-center gap-2'>
                <div className='rounded-xl h-10 w-10 flex overflow-hidden'>
                  <img src={tonkeeplogo} alt='tonkeeplogo' className='h-10 w-10'/>
                </div>
                <span className='font-bold text-xl'>Tonkeeper</span>
              </div>
              <IoIosArrowForward size={20} color='black'/>
            </button>
          </div>
        </div>
      </div>
    )
}
