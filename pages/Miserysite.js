{/* <div className={styles.logoaa}>
<img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
</div>
<img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}


import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import image from '../public/hero.jpg';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Script from "next/script";
import { useRouter } from 'next/router';
import 'animate.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from "../components/SectionTitle";
import Layout from "../components/Layout";
import { ReactDimmer } from 'react-dimmer';
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import OrbitControls from "../components/OrbitControls";






export default function MiserySite() {
  
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  
  return (
<Layout>
   
       <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>MiserySite</title>
      </Head>
      <Toolbar />  




      {/* <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenuOpen} /> */}
     {/* <div className=' h-screen'>
     <h1 className='text-7xl'>hii</h1>
     </div> */}
{/* hover:drop-shadow-[0_0px_5px_#3d9335] */}

<section className='  flex h-screen mx-auto px-0  '>
<h1 className='text-6xl m-auto text-[#78b1c4] p-15 z-0 max-w-2xl float-left -skew-x-6 '> misery is.. </h1>
    <p className=' text-[#f8f8f8]  pt-20 text-6xl m-auto p-6 font-light z-0 h-2/5 w-4/6 float left overflow-scroll' >
    <p className=' z-0 p-3  '></p>
      <p className=' hover:text-[#78b1c4] ml-0 hover:ml-9 duration-1000  '>crying at the party</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>your emotional support stuffed animal that looks more depressed than you do </p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>being a fag and a dyke at the same time</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>a 4 hour bath and a 7 day free trial</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>that one piece of butt hair the beautician forgot about </p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>waxing your butt in the first place</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>living in your overdraft but eating out anyway</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>searching for a halal photo to send nani ji</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>forgiving your younger self for the things they did to get you here</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>your second hand binder</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>falling in love with your therapist</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '> this too shall pass</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>freedom is sorrow is moments of connection is dissociation is remembering is moving through</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>company</p>
      <p className=' text-[#000000] ml-0 text-9xl hover:ml-9 duration-1000 '><i>me and you</i></p>
      <p className=' p-10 '></p>
    </p>
</section>

{/* <Link  href="./"><img className=" overflow-hidden z-50 float-right absolute -bottom-20 p-10 w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/6yR3mjn/misery-world-glitter.png"/></Link>
<Link  href="./Miserysite"><img className=" overflow-hidden z-50 absolute right-0 -bottom-20  p-10  w-5/12  duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link> */}


{/* <img className={styles.figuredas} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
{/* <img className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
        {/* <img className={styles.swerldas} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

    


{/* what is miss */}

<section id="whatismisery?" className={styles.whatismiserydas}>
  <div  className='  flex h-screen mx-auto px-0  '>
    <div className={styles.logoaa}>
  <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  </div>
  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
  {/* <img className={styles.logoa} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
  {/* <div className={styles.figurenew}> https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"  */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
  {/* </div> */}
  

  {/* <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 30, 0]} />
        <Draggable>

        </Draggable>
        <OrbitControls />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div> */}

{/* <div className="fixed">
  <div className="absolute flex overflow-x-hidden">
  <div className="py-9 animate-marquee whitespace-nowrap">
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp;  ✳ &nbsp; misery is..</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  crying at the party</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  your emotional support stuffed animal that looks more depressed than you do </span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  being a fag and a dyke at the same time</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  a 4 hour bath and a 7 day free trial</span>
  </div>

  <div className="absolute bottom-0 py-9 animate-marquee2 whitespace-nowrap">
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  waxing your butt in the first place</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  living in your overdraft but eating out anyway</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  searching for a halal photo to send nani ji</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</span>
    <span className="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  forgiving your younger self for the things they did to get you here</span>
  </div>
</div>
</div> */}

  {/*   */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
    {/* <img className={styles.swerl} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}
    {/* https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png text-[#ece784] */}
    </div>
    </section>


{/* <section className='  flex h-screen mx-auto px-0  '>
<h1 className='text-8xl m-auto  p-15 z-0 max-w-2xl float-left '> misery is.. </h1>
    <p className=' text-[#f8f8f8]  pt-20 text-8xl m-auto p-6 font-light z-0 h-2/5 w-4/6 float left overflow-scroll' >
    <p className=' z-0 p-3  '></p>
      <p className=' hover:text-[#78b1c4] ml-0 hover:ml-9 duration-1000  '>crying at the party</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>your emotional support stuffed animal that looks more depressed than you do </p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>being a fag and a dyke at the same time</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>a 4 hour bath and a 7 day free trial</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>that one piece of butt hair the beautician forgot about </p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>waxing your butt in the first place</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>living in your overdraft but eating out anyway</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>searching for a halal photo to send nani ji</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>forgiving your younger self for the things they did to get you here</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>your second hand binder</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>falling in love with your therapist</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '> this too shall pass</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>freedom is sorrow is moments of connection is dissociation is remembering is moving through</p>
      <p className=' hover:text-[#78b1c4]  ml-0 hover:ml-9 duration-1000 '>company</p>
      <p className=' text-[#000000] ml-0 text-9xl hover:ml-9 duration-1000 '><i>me and you</i></p>
      <p className=' p-10 '></p>
    </p>
</section> */}



    <Footer></Footer> 

    </Layout>
  )
}
