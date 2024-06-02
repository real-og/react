import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { IoIosArrowBack } from "react-icons/io";
import logo from '../image/tractionEye.svg'
import { RiUserAddLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import tonLogo from '../image/ton.png';
import NFTExample from '../image/nftmedium.webp';



function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-screen items-center w-screen py-3 px-5 ">
      <div className='flex flex-row justify-between items-center w-full'>
          <Link to='/nft-list'><span><IoIosArrowBack color='black' size={20}/></span></Link>
          <div className='flex items-center'>
            <img className='mr-1' src={tonLogo} width={30}></img>            
            <span className='font-semibold'>TON</span>
        </div>
      </div>


      <div className='w-full mb-2 flex flex-col h-screen items-center '>
        <div className='my-3 '>
            <img className='rounded-lg shadow-xl' src={NFTExample} alt='nft'></img>
          </div>
          <div>
        <span className='text-2xl font-semibold'>The Open Spring Cat</span>

        <div className='mt-6 w' width='100'>
          <div className='flex justify-between w-full'>
            <span>Last price</span>
            <span>203.3 TON</span>
          </div>

          <div className='flex justify-between w-full'>
            <span>Collection</span>
            <span>TOC</span>
          </div>

          <div className='flex justify-between w-full'>
            <span>Last price</span>
            <span>203.3 TON</span>
          </div>
        

        </div>
      </div>
      </div>


    </div>
  );
}

export default App;
