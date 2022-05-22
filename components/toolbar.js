// bg-[#c2c4fe] border-b-2 border-solid border-[#dbff00]
// bg-gradient-to-bl from-[#11fbcd] to-[#e151e7]  border-b-4 border-solid border-[#787870] bg-[#1a1a1a]
// bg-[#e7dbef]
// bg-[#5f5c6138]
          {/* <img class=" animate__animated animate__fadeIn z-0 -top-1 absolute   " src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png" style={{width: "12%", height: "auto"}}/> */}
          // <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Events</div>
  {/* <div className='   z-50   flex justify-center'>
          <img class="animate__animated animate__fadeIn absolute top-0 z-50  " src="https://i.ibb.co/4Jddjys/misery-site-slime.png" style={{width: "auto", height: "200%"}}/>
          </div> */}

import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
// import menu from './svgs/menu';
import Link from 'next/link';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import { ImSearch } from "react-icons/gi";
import { ReactDimmer } from 'react-dimmer';
// import Sidebar from '../Sidebar';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "./MuiNextLink"
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'





export const Toolbar = () => {
  const router = useRouter();

  return (
    
    <section >
       {/* extra ------------------ */}
    {/* <div >
    <div className='z-50 fixed text-l  border  text-black tracking-wide font-light  w-screen    border-solid border-[#3f3f3f] bg-[#e7dbef]'>
            <div  className=' flex justify-center '>
</div>
  <div className=' -top-[5]  z-50 '>
  
    <div className=' text-s flex  justify-between '>
<div className=' bg-blend-multiply border-[black] p-3'>
</div>
<div className=" bg-blend-multiply border-l border-solid border-[black]" onClick={() => router.push('../Menu')}>
  <svg fill="black" stroke="none" className='text-black-500  w-17 h-16 drop-shadow-[0_5px_35px_rgba(81,255,156,255)] hover:text-[#414141] bg-blend-multiply p-3 ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg></div>

 </div>
      </div>
           
        //  container mflex m-5 p-3 md:m-5 
          
  </div>
  </div> */}
  {/* extra ------------------ */}


 {/* old toolbar ------------------ */}
{/* <div className=" flex  ">
<div className={` z-50 fixed m-auto ${styles.wrapper}`}>
        <div className={"flex-auto flex flex-col flexte rounded-xl m-5 p-1 md:m-5  " + styles.shadow}>
          <div className=" bg-blend-multiply border-solid border-[black]" onClick={() => router.push('../Menu')}>
  <svg fill="black" stroke="none" className='text-black-500 text-xl  w-14 h-16 drop-shadow-[0_5px_35px_rgba(81,255,156,255)] hover:text-[#414141] bg-blend-multiply p-3 ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
        </div>
          </div>
          </div>

          <div className={` z-50 fixed m-auto right-0 flex${styles.wrapper}`}>
        <div className={" text-center flex-col flexte rounded-xl m-5 p-2 md:m-5  " + styles.shadow}>
          <div className=" text-center bg-bleflex-solid border-[black]" onClick={() => router.push('../videoBlogPost/our-story')}>
  <p className=' font-normal text-xl p-2 flex</p>
        </div>
          </div>
          </div> */}

    {/* <div className={` z-50 fixed  m-auto ${styles.wrapper}`}>
        <div className={"flex-auto flex flex-col flexte rounded-xl   " + styles.shadow}>
          <img className="p-4 flex duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
  </div>
          </div> */}


           {/* </div> */}
 {/* old toolbar ------------------ */}




 <div className="top-0  fixed  ">
<div className='flex overflow-scroll h-min bg-[#f2f2f28a] shadow-slate-200 mix-blend-overlay '>
    {/* newsec  hover:w-3/12 pb-20 z-50 drop-shadow-[0_0px_5px_grey] */}
    <img className="pl-2 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#30ff35] " onClick={() => router.push('/Miserysite')} src="https://i.ibb.co/37Sd6XV/Layer-1.png"/>
    <img className="pl-4 flex w-2/12 h-1/6 -rotate-3 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/videoBlogPost/our-story')} src="https://i.ibb.co/DMmhFb6/Layer-2.png"/>
    <img className="pt-5 pl-5 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#3d00f5] " onClick={() => router.push('/eventsupcoming')} src="https://i.ibb.co/PC6ndJ5/Layer-3.png"/>
    <img className="pt-5 pl-5 flex w-4/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_green] " onClick={() => router.push('/madebymisery/made-by-misery')} src="https://i.ibb.co/tXp19yy/Layer-4.png"/>
    <img className="pt-5 pl-5 flex  w-3/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]"  onClick={() => router.push('/resources/resources-for-qtibpoc-healing')} src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
    <img className="pt-5 pl-5 flex w-2/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_red] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
    <img className="pt-5 pl-5 flex w-3/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_pink]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/s3Mfn3q/Layer-7.png"/>
    <img className="pt-5 pl-5 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_yellow] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
    <img className=" pl-4 flex w-2/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_blue] " onClick={() => router.push('/Shop')} src="https://i.ibb.co/g7LwM63/Layer-9.png"/>
   
    </div>
    </div>


{/* <div className="fixed z-50">
<div className='flex w-screen overflow-scroll h-min z-50 '>
    <img className="p-2 flex w-1/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#30ff35] " onClick={() => router.push('/Miserysite')} src="https://i.ibb.co/37Sd6XV/Layer-1.png"/>
    <img className="p-4 flex w-1/12 h-1/6 -rotate-3 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/videoBlogPost/our-story')} src="https://i.ibb.co/DMmhFb6/Layer-2.png"/>
    <img className="p-5 flex w-1/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_#3d00f5] " onClick={() => router.push('/eventsupcoming')} src="https://i.ibb.co/PC6ndJ5/Layer-3.png"/>
    <img className="p-4 flex w-3/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_green] " onClick={() => router.push('/madebymisery/made-by-misery')} src="https://i.ibb.co/tXp19yy/Layer-4.png"/>
    <img className="p-5 flex  w-2/12 h-1/6 rotate-2  duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]"  onClick={() => router.push('/resources/resources-for-qtibpoc-healing')} src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
    <img className="p-4 flex w-1/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_red] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
    <img className="p-4 flex w-2/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_pink]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/s3Mfn3q/Layer-7.png"/>
    <img className="p-4 flex w-1/12 h-1/6  duration-500 hover:drop-shadow-[0_0px_5px_yellow] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
    <img className=" p-4 flex w-1/12 h-1/6   duration-500 hover:drop-shadow-[0_0px_5px_blue] " onClick={() => router.push('/Shop')} src="https://i.ibb.co/g7LwM63/Layer-9.png"/>
   
    </div>
    </div> */}


      


  </section>
  );
};



