import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { IoIosArrowBack } from "react-icons/io";
import logo from '../image/tractionEye.svg'
import { RiUserAddLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import NFTExample from '../image/nftmedium.webp';


function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-screen items-center w-screen py-3 px-5 ">
      <div className='w-full  flex flex-col h-screen items-center py-4 px-2'>
        <div className='flex flex-row justify-between  items-center w-full'>
          <Link to='/'><span><IoIosArrowBack color='black' size={20}/></span></Link>
    
          <span> <a href='' className=' text-red-500 no-underline font-semibold '>Follow</a></span>
        </div>

        <span className='text-black font-bold	  my-6' style={{fontSize:'24px'}}>Your NFTs</span>

      <div>
        <ul className='flex grid grid-rows-4 grid-flow-col my-4 gap-4'>
          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>

          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>
          
          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>

          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>

          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>

          <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>

                    <li >
            <Link to='/nft'>
              <img className='rounded-lg' src={NFTExample} alt='nft'/>
            </Link>
          </li>
        </ul>
      </div>



      </div>
   </div>
  );
}
export default App;
