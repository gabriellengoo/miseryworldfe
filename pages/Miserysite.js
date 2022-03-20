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



{/* what is miss */}

<section id="whatismisery?" className={styles.whatismiserydas}>
  <div  className='  flex h-screen mx-auto px-0  '>
    <div className={styles.logoaa}>
  <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  </div>
  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
  <img className={styles.logoa} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
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

<div class="fixed">
  <div class="absolute flex overflow-x-hidden">
  <div class="py-9 animate-marquee whitespace-nowrap">
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp;  ✳ &nbsp; misery is..</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  crying at the party</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  your emotional support stuffed animal that looks more depressed than you do </span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  being a fag and a dyke at the same time</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  a 4 hour bath and a 7 day free trial</span>
  </div>

  <div class="absolute bottom-0 py-9 animate-marquee2 whitespace-nowrap">
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  waxing your butt in the first place</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  living in your overdraft but eating out anyway</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  searching for a halal photo to send nani ji</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</span>
    <span class="mx-4 text-xl text-[#2b2b2b]">  &nbsp; ✳ &nbsp;  forgiving your younger self for the things they did to get you here</span>
  </div>
</div>

</div>

  {/*   */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
    {/* <img className={styles.swerl} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}
    {/* https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png text-[#ece784] */}
    </div>
    </section>


<section className='  flex h-screen mx-auto px-0  '>
<h1 className='text-8xl m-auto  p-15 z-0 max-w-2xl float-left '> misery is.. </h1>
    <p className=' text-[#f8f8f8]  pt-20 text-8xl m-auto p-6 font-light z-0 h-2/5 w-4/6 float left overflow-scroll' >
    <p className=' z-0 p-3  '></p>
      <p className=' hover:text-[#894dab] ml-0 hover:ml-9 duration-1000  '>crying at the party</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>your emotional support stuffed animal that looks more depressed than you do </p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>being a fag and a dyke at the same time</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>a 4 hour bath and a 7 day free trial</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>that one piece of butt hair the beautician forgot about </p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>waxing your butt in the first place</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>living in your overdraft but eating out anyway</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>searching for a halal photo to send nani ji</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>forgiving your younger self for the things they did to get you here</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>your second hand binder</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>falling in love with your therapist</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '> this too shall pass</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>freedom is sorrow is moments of connection is dissociation is remembering is moving through</p>
      <p className=' hover:text-[#894dab]  ml-0 hover:ml-9 duration-1000 '>company</p>
      <p className=' text-[#000000] ml-0 text-9xl hover:ml-9 duration-1000 '><i>me and you</i></p>
      <p className=' p-10 '></p>
    </p>
</section>


<section className=" z-40 border-dashed border-b-2 border-t-2 border-black text-2xl mx-auto px-0 p-20 ">
      <div className=" z-40 flex ">
<Link  href="#whatismisery?"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>What is misery?</a></Link>
<Link href="#whatwedo"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>What we do</a></Link>
<Link href="#ourgoals"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our goals</a></Link>
<Link href="#ourroots"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our roots</a></Link>
<Link href="#ourdreams"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our dreams (for a less miserable world)</a></Link>
</div>
</section>

<section className={styles.whatismisery} >
<div id="whatismisery?" className="mx-auto flex z-40 h-screen  " >
  
<SectionTitle>What is misery?</SectionTitle>
    <div className=' z-40 mx-auto px-0 max-w-2xl p-20  h-screen'>
    <p className=' z-40 p-3 m-auto text-3xl font-light'>misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc) with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and neurodivergence. 
</p>
<p className=' z-40 m-auto p-3 text-3xl font-light'>we co-create free, playful, accessible sober spaces, services, practices, parties and resources to cultivate communities of care that can support and sustain the collective healing and resilience of qtibpoc world over.
</p>
<p className=' z-40 m-auto p-3 text-3xl font-light'>misery is a reminder that you’re not too sensitive, it’s mad out here.
</p>
</div>
    </div>
    </section>
  
    


    {/* what we do */}
    <section id="whatwedo" className='z-40'>
    <SectionTitle >What we do </SectionTitle>
      <div className=' z-40 p-10 mx-auto px-0 max-w-2xl flex h-screen '>
      <img className={styles.swerl} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
    <p  className=' z-40 text-3xl p-15 font-light'>
We strive to cultivate generative ecologies of connection, care and solidarity that can support and sustain the collective healing and resilience of our community. we know first hand that healing and liberation is interwoven and by nurturing community care and addressing collective trauma, we seek to disrupt the growing privatisation of healing and the “self-care industrial complex”. 
we work for and with lived experience leaders to co-create accessible, playful, and transformative peer-led healing spaces, services and resources by (un)archiving and (re)generating the vast wisdom, community resilience strategies and potential for joy that are abundant amongst our people.
</p>
    </div>
    </section>


        {/* our goals */}
        <section id="ourgoals" className={styles.ourgoals}>
    <SectionTitle >our goals</SectionTitle>
      <div className=' z-40 p-10 flex h-screen mx-auto px-0 max-w-6xl '>
 <ul className=" z-40 list-disc text-3xl p-15 font-light">
<li className=' hover:ml-9 p-3 duration-1000' >
To provide accessible, supportive and politically engaged events, spaces and services by and for qtibpoc to build community and help us to be in right relationship with ourselves, each other, and the land
</li>
<li className=' hover:ml-9 p-3 duration-1000'>
To develop resources, research, artistic work, modalities and practices that facilitate healing and challenge dominant misperceptions about mental health, addiction, disability, trauma and neurodiversity</li>
<li className=' hover:ml-9 p-3 duration-1000'>
To promote leadership and development opportunities for qtibipoc with lived experience of mental health problems, madness, addiction, disability, trauma, and neurodivergence - within our communities, health and wellbeing settings, the arts and wider society</li>
 </ul>
    </div>
    </section>



           {/* our roots */}
           <section id="ourroots" className={styles.ourroots}>
    <SectionTitle >our roots</SectionTitle>
      <div className=' z-40 p-5  flex mx-auto px-0 max-w-9xl h-screen'>
        {/* <p className=' z-40 font-mono  p-5  ' >I</p> */}
      <p  className='z-40  text-l p-5 font-light'>
      The work of creating communities of care is not new, nor invented by us. it is ancient work that exists within communities, cultures and species around the world. we continue the legacies and lineages of our ancestors and the artists, activists and community workers that have come before us and those around the world that are committed to this work. 
      </p>
      {/* <p className=' z-40 font-mono  p-5  ' >II</p> */}
      <p className=' z-40 text-l p-5 font-light'>
      We are inspired by our friends and lovers, the creative power of our communities and the mistakes of our parents. we give thanks and draw strength from the disability and healing justice movements, black feminist theory and praxis, mad studies, queer of colour critique, radical transfeminists, our dyke, faggot and gender divine sibings worldwide, femmes of colour spaces, wxtchcraft, raving on the dancefloor, community-based transformative justice interventions, indigenous herbalists, generative somatics, revolutionary mothering, nurses, sex workers, teachers, survivors, carers, youth workers and black, brown, indigenous and diasporic spiritual traditions.  
      </p>
      {/* <p className='  z-40 font-mono  p-5 ' >III</p> */}
      <p className=' z-40 text-l p-5 font-light'>
      We have learnt that people are the experts in their own lives and believe that everyone should have the right to fail and the support they need to grow. we acknowledge that harm is an integral part of the human experience and that experiencing harm is one of the many ways our lives, minds, and hearts adapt to the world.
      </p>
      {/* <p className=' z-40 font-mono  p-5 ' >IV</p> */}
      <p className='z-40 text-l p-5 font-light'>
      Our work is rooted in the principles of healing centered harm reduction including trauma-informed care, agency, collaboration, intersectionality, consent and acknowledges the historical and on-going social, cultural, environmental and economic systems that constantly terrorise our communities including experiences of colonisation, anti-blackness and racism, sexism, homophobia, transphobia, classism, ableism and other oppressions. 
      </p>
    </div>
    </section>


        {/* our dreams */}
        <section id="ourdreams" className={styles.ourdreams}>
    <SectionTitle >our dreams</SectionTitle>
      <div className='font-light text-3xl flex mx-auto px-0 max-w-6xl h-screen z-40  '>
 <p>
   <p className='z-40 p-5 '>
 We are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing. 
 </p>
 <p  className='z-40 p-5 '>
 Worlds that are safer, happier, healthier and more peaceful. worlds where we all work to acknowledge and minimise our own potential for intimate, interpersonal, structural and ecological violence and in doing so resolve conflict compassionately.
 </p>
 <p  className='z-40 p-5 '>
 Worlds where people before profits, harm-reduction and post traumatic growth is the norm. where we are all supported in alchemising our pain through play, consent, connection, boundaries and rest. worlds where you can cry and be held, if you want to. 
 </p>
 </p>

    </div>

    {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}

    </section>

    <Footer></Footer> 

    </Layout>
  )
}
