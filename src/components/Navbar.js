import React from 'react';
import './../index.css';

const Navbar = () => {
  return (
    <div className='flex flex-row  relative h-24'>
    <div className="w-24 h-24 fixed bg-violet-100">
    <i class="fa-solid fa-bars fa-2x p-7 hover:cursor-pointer"></i>
    </div>
    <div className="w-full h-24">
    <ul className="flex flex-row items-center justify-center gap-3 py-7 font-semibold">
    <li><a href="/">ALL</a></li>
        <li><a href="/Latest">LATEST </a></li>
        <li><a href="/Popular">POPULAR </a></li>
        <li><a href="/Random">RANDOM </a></li>
        <li><a href="/Oldest">OLDEST</a></li>
      </ul> 
    </div>
   </div>
  )
}

export default Navbar