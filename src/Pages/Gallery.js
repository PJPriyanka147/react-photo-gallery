import React from "react";
import imageList from '../constants/images';
import '../index.css';

const Gallery = () => {
  return (
    <>
    <div className="flex">
    <div className='w-24 h-full fixed bg-violet-100'>this is sidebar </div>
    <div className="grid grid-cols-3 gap-3  px-28 pl-44">
        {imageList.map((image) => ( 
          <div key={image.id} className="" >{/* this is image container for each image*/}
          <img src={image.src} className="w-full h-full"/>
          </div>
     
          ))}
        </div>
       
    </div>
    <div className="flex w-full h-full bg-red"> this is footer</div>
   
       
        </>
  );
};

export default Gallery;