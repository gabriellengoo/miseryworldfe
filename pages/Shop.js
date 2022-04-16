import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import OrbitControls from "../components/OrbitControls";
import mypic from '../public/rotatelogo.gif'
import FooterComponent from '../components/foottest';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "../components/MuiNextLink"
{/* <h1 className='text-3xl text-[#1fd705] m-auto z-0 max-w-2xl justify-center '> misery is.. </h1> */}


export default function FirstPost() {
  return (
    
    <Layout>
       <Head>
      {/* absolute   bottom-0 justify-evenly */}
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>shop</title>

      </Head>



<div>

<Toolbar />
<div className="h-screen grid place-items-center text-5xl">
  
   <p  className="py-8 tracking-wide m-auto  font-semibold"> <p  className="py-8 tracking-wide  m-auto   text-5xl font-semibold place-items-center text-center">shop</p>＊misery merch coming soon!＊</p>
   </div>
   <div className="flex  grid place-items-center text-5xl">
   {/* <MuiNextLink sx={{ textDecoration: "none", }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram  className=' text-[#de2a7b]   text-3xl' />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.blue" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter className=' text-3xl ' />
		</MuiNextLink> */}
       
        </div>


{/* <script src="/scripts/bundle.min.js"></script> */}
    </div>
    <FooterComponent></FooterComponent>
    </Layout>
  )
}
