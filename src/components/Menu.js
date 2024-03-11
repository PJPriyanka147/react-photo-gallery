import React from 'react';
import './../index.css';

const Menu = () => {
  return (
    <>
    <div className="w-80 h-screen  bg-green-400 flex flex-col py-14 fixed right-0 px-8 text-xl font-semibold">
    <ul className="bg-red-500 px-10 py-10 text-2xl space-y-7">
    <li><a href="/">ALL</a></li>
        <li><a href="/Latest">LATEST </a></li>
        <li><a href="/Popular">POPULAR </a></li>
        <li><a href="/Random">RANDOM </a></li>
        <li><a href="/Oldest">OLDEST</a></li>
    </ul>
      <div className="w-30 h-14 flex relative top-16 items-center bg-green-600">copyright</div>
      </div>
    </>
  )
}

export default Menu