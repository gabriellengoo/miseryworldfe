// bg-[#c2c4fe] border-b-2 border-solid border-[#dbff00]
// bg-gradient-to-bl from-[#11fbcd] to-[#e151e7]  border-b-4 border-solid border-[#787870] bg-[#1a1a1a]


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


export const Toolbar = () => {
  const router = useRouter();

  return (
    
    
    <div >
    <div className=' top-0 bg-[#e7dbef] z-50 fixed text-l  border-b-2  text-black tracking-wide font-light  w-screen   border-solid border-[black]'>
        
            <div  className=' flex justify-center '>
          {/* <img class=" animate__animated animate__fadeIn z-0 -top-1 absolute   " src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png" style={{width: "12%", height: "auto"}}/> */}
          
</div>


    
  <div className=' -top-[5]  z-50 '>
  
    <div className=' text-s flex  justify-between '>
<div className=' border-r-2 border-[black] p-3'>
{/* <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" /> */}
</div>


<div className="  border-l-2 border-solid border-[black]" onClick={() => router.push('../Menu')}>
  <svg fill="currentColor" stroke="none" className='text-black-500  w-17 h-16 drop-shadow-[0_5px_35px_rgba(81,255,156,255)] hover:text-[#e6e6e6] border border-solid rounded-full border-[#20291700] p-3 ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg></div>

        

      {/* <div className='  drop-shadow-[0_5px_35px_rgba(81,255,156,255)]  border border-solid rounded-full border-[#20291700] p-3 hover:text-[#dd8a2c] hover:drop-shadow-[0_5px_35px_rgba(142,233,181,255)] m-1.5' onClick={() => router.push('../MiseryWorld')}>Events</div>
      <div className='   drop-shadow-[0_5px_35px_rgba(81,255,156,255)]  border border-solid rounded-full border-[#20291700] p-3 hover:text-[#dd8a2c] hover:drop-shadow-[0_5px_35px_rgba(142,233,181,255)] m-1.5' onClick={() => router.push('../MiseryWorld')}>Resources </div>
      <div className=' float-right  relative drop-shadow-[0_5px_35px_rgba(81,255,156,255)]  border border-solid rounded-full border-[#20291700] p-3 hover:text-[#dd8a2c] hover:drop-shadow-[0_5px_35px_rgba(142,233,181,255)] m-1.5' onClick={() => router.push('../Menu')}>Menu</div> */}

  

      {/* <div className=' float-right bg-[rgb(142,233,181)] hover:from-pink-500 hover:to-yellow-500 relative drop-shadow-[0_5px_35px_rgba(81,255,156,255)]  border border-solid rounded-full border-[#20291700] p-3 hover:text-[#dd8a2c] hover:drop-shadow-[0_5px_35px_rgba(142,233,181,255)] m-1.5' onClick={() => router.push('../Menu')}>Menu</div> */}
      {/* <div className=' bgblack drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]   border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('/')}>About</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Events</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Made by Misery</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Resources</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Press</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Get involved</div>
      <div className=' bg-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Contact</div>
      <div className=' bg-[#dbff00]  border border-solid rounded-full border-[#20291709] p-3' onClick={() => router.push('../Miserysite')}>Shop</diblack drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]    
      {/* <div onClick={() => window.location.href = 'https://github.com/portexe'}>GitHub</div> */}
 </div>
      </div>
          
          {/* <div className='   z-50   flex justify-center'>
          <img class="animate__animated animate__fadeIn absolute top-0 z-50  " src="https://i.ibb.co/4Jddjys/misery-site-slime.png" style={{width: "auto", height: "200%"}}/>
          </div> */}
         
          
  </div>
  </div>
  );
};



