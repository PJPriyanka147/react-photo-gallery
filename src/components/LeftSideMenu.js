import React from 'react';
import { useState } from 'react';
import './../index.css';


  const LeftSideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
   
    <div className="w-20 h-full  bg-violet-200 flex flex-col fixed left-0 top-0 p-5 text-xl font-semibold">
    <div
        className="cursor-pointer"
        onClick={toggleMenu}
      >
          <i class="fa-solid fa-bars fa-2x hover:cursor-pointer onClick={toggleMenu}"></i>
      </div>
      <div className={`w-72 h-screen absolute top-0 p-10 pt-6 pl-0 bg-violet-200 left-20 ${isOpen ? 'block' : 'hidden'}`}>
    <ul className=" pl-8 py-10 flex flex-col items-start justify-center relative top-20  text-2xl space-y-5">
        <li><a  className="hover:text-orange-400" href="/">ALL</a></li>
        <li><a  className="hover:text-orange-400" href="/Latest">LATEST </a></li>
        <li><a  className="hover:text-orange-400" href="/Popular">POPULAR </a></li>
        <li><a  className="hover:text-orange-400" href="/Random">RANDOM </a></li>
        <li><a  className="hover:text-orange-400" href="/Oldest">OLDEST</a></li>
    </ul>
      
      <div className="flex justify-around items-center relative top-32 left-0 w-full p-4">
            <a href="#" className="text-gray-600"><i className="fab fa-facebook hover:text-orange-400"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-twitter hover:text-orange-400"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-pinterest hover:text-orange-400"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-whatsapp hover:text-orange-400"></i></a>
          </div>
      </div>
      </div>
      </>
  )
}

export default LeftSideMenu