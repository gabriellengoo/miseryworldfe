

import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "./MuiNextLink"
import TextField from '@mui/material/TextField';
import styles from '../styles/Home.module.css';



function FooterComponent() {    
	return ( 
        <div className={styles.footer}>
        <section className="  w-screen font-normal  items-center text-9l mx-auto px-0  ">
        <div className="  flex  w-screen text-center  items-center ] ">

            <div className="  w-2/6 ">
            <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" />
            </div>

  <Link  href="../videoBlogPost/our-story"><a className=' text-center     p-4 m-auto items-center justify-evenly  tracking-wide'>about</a></Link>
  <Link href="../../contact/contact"><a className=' text-center      p-4 m-auto items-center justify-evenly tracking-wide"'>contact</a></Link>
  <Link href="../../resources/resources-for-qtibpoc-healing"><a className=' text-center      p-4 m-auto items-center justify-evenly  tracking-wide"'>resources</a></Link>
  <Link href="../../getinvolved/get-involved"><a className=' text-center      p-4 m-auto items-center justify-evenly tracking-wide"'>get involved </a></Link>
  <Link href="../../faq"><a className=' text-center      p-4 m-auto items-center justify-evenly tracking-wide"'> donate  </a></Link>
  {/* pop up link */}
  <Link href="../../faq"><a className=' text-center      p-4 m-auto items-center justify-evenly tracking-wide"'>newsletter </a></Link> 
  {/* pop up link */}
  </div>
  </section>

  <section className=" w-screen font-normal text-9l mx-auto px-0   ">
        <div className=" flex  w-screen ] ">
            <div className=" p-4">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="small" />
		</MuiNextLink>
        </div>
        <div className=" p-4">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="small" />
		</MuiNextLink>
        </div>
        <div className=" bg-white m-auto items-center justify-evenly  tracking-wide">
        <Link  href="./"><a className='  m-auto items-center justify-evenly  tracking-wide'>© Misery 2022</a></Link>
        </div>
        </div>

		

  </section>
  </div>
	)
}
export default FooterComponent