
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

export default function FirstPost() {
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
      {/* absolute   bottom-0 justify-evenly */}
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>Misery</title>
      </Head>
      <Toolbar />  
<div>
   
<section className=" pt-52 z-40 border-dashed border-b-2 border-t-2 border-black text-2xl mx-auto px-0 p-20 ">
      <div className=" z-40 flex lowercase ">
<Link  href="#whatismisery?"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>what is misery?</a></Link>
<Link href="#whatwedo"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>what we do</a></Link>
<Link href="#ourgoals"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>our goals</a></Link>
<Link href="#ourroots"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>our roots</a></Link>
<Link href="#ourdreams"><a className=' z-40border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>our dreams (for a less miserable world)</a></Link>
</div>
</section>

<section className={styles.whatismisery} >
<div id="whatismisery?" className="mx-auto flex z-40 h-screen  " >
  
<SectionTitle>what is misery?</SectionTitle>
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
    <SectionTitle >what we do </SectionTitle>
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
    

    </div>
    </Layout>
  )
}
