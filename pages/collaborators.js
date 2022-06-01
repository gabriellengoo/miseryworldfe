import Link from 'next/link';
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import styles from '../styles/collaborators.module.css';
import { useState, useEffect } from 'react';
import Script from "next/script";
import { useRouter } from 'next/router';
import 'animate.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import React from 'react';
import { SectionTitle } from "../components/SectionTitle";
import Layout from "../components/Layout";
import { ReactDimmer } from 'react-dimmer'
import FooterComponent from '../components/foottest';
import Marquee from "react-fast-marquee";



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
{/* HEad */}
         <Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title>.｡.:*☆ cOlԼ𝓐bOratOᎡs.｡.:*☆</title>
        </Head>



<section className="h-screen relative hidden lg:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


    <div className='float-right h-screen right-0 overflow-scroll w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          {/* <BlockContent blocks={description} /> */}
          
          <div className=' p-5  h-screen '>
          
          <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  {/* <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  
  {/* <img className={styles.figurenew} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
   

          {/* /text */}
          {/* <p className="text-left pt-10 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}


<div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div>


{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#dbff00]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#dbff00] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#dbff00] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#dbff00] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#dbff00] '>☆ our dreams</a></Link>
</div> */}


  {/* <div className=" p-5 flex bottom-0 absolute ">
            <div className="p-5 ">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5 m-auto items-center justify-evenly  tracking-wide">
        <Link  href="./"><a className='  m-auto items-center font-light justify-evenly  tracking-wide'>© Misery 2022</a></Link>
        </div>
  </div> */}


    </div>

    
    </div>
    </div>

{/* -------------------------------------------- left */}
        <div className='  z-0 p-5 top-0 h-screen w-9/12 overflow-scroll'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}

        {/* <p className="text-6xl  text-center pt-20 font-semibold  "> .｡.:*☆thƐ tƐ𝓐m.｡.:*☆ </p>  */}
        <p className={styles.crytext}> cOlԼ𝓐bOratOᎡs </p> 




<div className=' flex '>
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' >
            <p className=' text-base text-center font-bold  p-5 '>maymana arefin</p>
 <div className={styles.card5}>
            <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> she/they </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b> i am a community gardener, forager, fungi lover, multimedia artist + spoken word poet based in south london. i feel most grounded in my body when i am outdoors exploring nature, sitting with fungi and plant relatives, and thinking about what they can teach us. my work ties together the mycelial threads between mind, body and soul. central to each of my offerings is a politics of hope and a cornerstone of radical care.
      </p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b> looking forward to the monthly misery meets (i attended all of them bc i am a dork 🤓) which got me through a very difficult year and lockdown. i remember being amazed and moved at how well misery held us all, even on a zoom call. misery is where my heart is 💗 i am co-facilitating the misery medicines programme 2022-23 and could not be more excited for what this will bring!

</p>

      <p className=' font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> sunlight coming through my bedroom window + wrapping myself tightly in my duvet.
</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' >find me @: m4ymana
 </a></Link>
 or
 <Link href="https://www.instagram.com/fungi.futures/?hl=es"><a target="_blank" className=' font-bold' > @fungi.futures
 </a></Link>
 </p> 
            </div></a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}

{/* end*/}
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-base  ">
                  
            <p className=' text-base text-center font-bold  p-5 '>sonji shah</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card6}>
            <p  className='  font-light'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b>  i like to write things - whether it’s sad poems for my personal enjoyment, lil stories for friends, overthought think pieces, or funding applications for misery. since nov. 2020 i’ve also been a community mental health researcher.
</p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>taking a new friend to a misery party and just sitting, talking and eating all evening.
</  p>

      <p className='  font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>nkinder bueno and cuddles

</p>

            </div>
            </div>
            </div>
            </div>
</div>
{/* end*/}
</div>
<div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-base  ">
            <p className=' text-base text-center font-bold  p-5 '>firpal jawanda</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card888}>
            <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b>   i am an artist, illustrator, and print maker. designing zines mostly. across the board drawing creature fantasies and abstracted south asian folklores & mythologies is my forte x
</p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>cooking! if i remember correctly it was parathas, curries and chutneys in an observatory on a forested hill in liverpool, then watching the sunset from the roof, the sun setting on the sea over wales in the distance.

</  p>

      <p className='  font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> i do that hand on head, other hand on heart hold that aisha mentioned once. i listen to glenn copeland or grouper, i take a bath. i call a friend.

</p>

<p className="hover:skew-y-6"> 
      <a target="_blank" className=' font-bold' >find me @: @firpal
 </a>
 </p>
            
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>



</div>





{/* row 3------------------------- */}
<div className=' flex '>
   {/* p1 */} {/* end*/}



      
      
</div>

<div className=' flex '>
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
                  <div className={styles.card}>
                        <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] z-50  rounded-[5%] border-[#efefef]">

                              <div className="  text-xs  ">
                                          <p className=' text-xs text-center font-bold   p-5 '>nooriyah</p>
                                          <Link href="https://www.instagram.com/nooriyah._/"><a target="_blank" className=' font-bold' >
                                          {/* <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3]  w-[105%] h-5/6 absolute z-40 hover:opacity-0 ' src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          
                                          {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
                                          {/* <img className={styles.cardone} src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          <div className={styles.cardone}>
                                        
                                          <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> i play and make music on a mission to make the influence of arabic music known globally. yallaaaa
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>  i was a guest on the misery balamii radio show where mental health and music meet - two of my biggest passions in life. i also dj-ed at one of the misery’s nights years ago and it stayed with me because you can have a boogie and/or have a 1:1 activity like henna, get a reading or drink chai. where else can you get all these options?

</p>

      <p className=' font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b><Link href="https://www.seriouspuzzles.com/"><a target="_blank" className=' font-bold ' >https://www.seriouspuzzles.com/ </a></Link>
</p>

      <p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/nooriyah._/"><a target="_blank" className=' font-bold ' >find me @: https://www.instagram.com/nooriyah._/ 
 </a></Link>
 </p>
                                           </div></a></Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

{/* end*/}
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
      <div className=' duration-500 p-5 hover:skew-x-6 '>
      <div className={styles.card}>
      <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

      <div className="  text-xs  ">
      <p className=' text-xs text-center font-bold   p-5 '>lady shaka</p>
      {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
      {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
      <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <div className={styles.card2}>
      <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>  lady shaka is an afro pasifika dj, producer and interdisciplinary artist originally from aotearoa (new zealand) based in london, uk whose musical selection and art is a representation of both her queer identity as a fem queen and her connection to the moana (ocean) and her diaspora. 

</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>one thing i will say is that the people who attend misery always know how to uplift and empower each other. every single time i have played at misery and on behalf of misery my heart is always filled with joy. my favourite memories exist on the dance floor because the conversations aren’t always spoken but expressed through movement, laughter, screaming with joy but also tears. my favourite memory was playing chop suey by system of a down at misery and seeing the shock but also pure excitement in people’s eyes. she loves to wine her waistline but she also loves a bit of heavy metal.
</p>

      <p className=' font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>
      living on the other side of the world and being so far away from my whānau (family) and kainga (home) it is always hard on my wairua (spirit), so more often than not i find myself playing the ukulele, doing the siva (dance) and listening to pacific island jams and music from my parent’s generation. i take the time to honour my sadness and my emotions by connecting to my culture.

</p>
<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' > find me @: @ladyshaka </a></Link>
</p>
</div>

</a></Link>
      </div>
      </div>
      </div>
</div>
{/* end*/}
</div>
{/* p1 */}
<div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-xs text-center font-bold   p-5 '>hannah rose</p>
            {/* <Link href="https://www.instagram.com/lovely_caring_creatures/"><a target="_blank" className=' font-bold' > */}
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card3}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> dj, event management, sound tech
</p>

      <p className=' font-light '>
      <b className=' font-bold'>what misery means to me:</b> i’ve been with misery since their second party. i’ve been a facilitator, producer, sound tech and various other bits.

</p>


<p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>the moment after every party when me and aisha go through all the lovely instagram messages people send!
</p>



      <p className=' font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> final fantasy
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @_foxdyke
 </a></Link>
 </p>
            
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}

</div>





{/* row 2------------------ */}
<div className=' flex '>
  
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            {/* <Link href="http://www.instagram.com/leala.rain/"><a target="_blank" className=' font-bold' > */}

            <p className=' text-xs text-center font-bold   p-5 '>camille barton</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card4}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> renegade researcher, educator, embodiment explorer. i love to work with dance, bass and plants as healing tools. i’m very interested in nervous system regulation, and i like to explore this using the resilience tool kit, mindfulness and trauma informed practices. i’m currently running a program called ecologies of transformation which is researching how art-making and embodiment can create social change. 
 </p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b> i remember having really tender feels witnessing people being able to do art therapy practices whilst also having check-in moments, and it was an honour to be someone that people checked in with. 
      </  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>i really like cuddles, hot water bottles and watching star trek: the next generation. 

</p>


<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' > find me @: www.camillebarton.co.uk // @afrooankali  </a></Link>
      </p>
            
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            {/* <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' > */}
            <p className=' text-xs text-center font-bold   p-5 '>ama josephine</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card5}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> science fiction workshops and sensual healing breath meditations </p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>  i absolutely loved giving massages at misery events
</p>

      <p className=' font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> cartoons under the duvet in the middle of the day, or a long walk 
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @amajosephine / www.amajosephine.me
 </a></Link>
 </p>
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
                  
            <p className=' text-xs text-center font-bold   p-5 '>huq that (nuzhat fatima & sabira haque)</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card6}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> running henna workshops, art direction, henna stalls for events, styling and art!
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>all of our one on one conversations during doing henna on clients . it gives us a chance to have in-depth conversations with individuals from all walks of life and learn from lived experiences.
</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>doing henna makes us feel better ( it’s legit like therapy for us)
</p>


<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @huqthat (as a collective)
@me.a.snowflake - nuz 
@sabirahaque - sabira
 </a></Link>
 </p>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      
</div>



{/* row 3------------------------- */}
<div className=' flex '>
   {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <Link href="https://www.instagram.com/opashona/"><a target="_blank" className=' font-bold' >
            <p className=' text-xs text-center font-bold   p-5 '>oopie</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card7}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> my name is opashona ghosh (or oopie if you love me). i am a visual artist, illustrator and facilitator based in london. my work explores feminist approaches to mental and sexual health, and club culture, locating the intersections of body, community and ritual. i co-founded honey, a zine meditating on the experience of friendship.
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>  while making the poster for misery (at the yard, february 2020), i remember aisha checking in to make sure i don&apos;t overextend myself and remember to take breaks 💖 💖. at that time their genuine gesture of kindness made me simultaneously awkward and cry! 
      looking back now, that interaction helped me make positive and intentional changes to how and who i work with. never going back 💖

</p>

      <p className=' font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>making sobcore playlists on youtube. sitting quietly in a dimly lit room. burning incense. drawing. cuddling. dancing! long nature walks. acupuncture. bedroom dj-ing. munching on sweeties. writing down things i am grateful for. yoga. telling my friends how much i love them. daydreaming. cooking. feeding. deep diving into critical theory.

</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/opashona/"><a target="_blank" className=' font-bold ' >find me @: https://www.instagram.com/opashona/
 </a></Link>
 </p>
            
            </div>
            </a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-xs text-center font-bold   p-5 '>kemoy</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card8}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>    for most of my adult life i have worked as a counsellor and sex educator. i recently trained as a doula and yoga teacher in order to support clients through pregnancy, birth and postpartum. my offerings all surround providing care, education and support to the queer and bipoc communities.
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>when misery came to berlin in 2019 and we were all able to draw out our emotions together and i also got a &apos;sad femme&apos; flash tattoo to commemorate the moment

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  zelda and chill playlist on spotify/ going somewhere that i can walk around barefoot. / cuddling with my cat / watching movie recaps 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me@: @kjcounselling.com 
 </a></Link>
 </p>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>

      {/* new? */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-xs text-center font-bold   p-5 '>bones tan jones</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card9}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> they them </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>    i make art i make music i make medicine sometimes and i like to share all of the above with ppl!! i like being close to the soil and creating spaces where ppl sculpt their dreams from clay.
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>me and shadow sistxrs taught some self defence at misery and shared herbal connections and it was super cute and fun! misery reminds me i’m allowed to be sad and also cute and sexy and be positive about life at the same time as being disheartened bc it’s all valid and exists simultaneously and there are spaces where i can be held in that together. and that nature will never judge me. getting massaged by ama to club music was deffo a memory i won’t forget!!

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> sniffing soil or stroking moss
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @y4y4bones
 </a></Link>
 </p>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      
</div>











{/* more */}
<div className=' flex '>
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
                  <div className={styles.card}>
                        <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] z-50  rounded-[5%] border-[#efefef]">

                              <div className="  text-xs  ">
                                          <p className=' text-xs text-center font-bold   p-5 '>minara él waters, h2hoe, southgaysian fine-ass-t</p>
                                          <Link href="https://www.instagram.com/nooriyah._/"><a target="_blank" className=' font-bold' >
                                          {/* <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3]  w-[105%] h-5/6 absolute z-40 hover:opacity-0 ' src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          
                                          {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
                                          {/* <img className={styles.cardone} src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          <div className={styles.card11}>
                                          <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> he/she/they/them/thot
      <p>im easy with my pronouns but if i clock any disrespect i will make a scene i.e. if i got a wig on, full face and heels then you must be special or touched by allah because “common sense is a saving grace” (karen hugers mum rhwop) how about you don’t need to know whats going on with my downstairs because your never gonna see it.)
</p>
       </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>    i want to perform on stages all around the world, i want everyone to get a look, from the basements of shoreditch to, inshallah, stadiums and arenas. even if my only legacy was a superbowl halftime show that slapped, i’d peace out this world calm. 
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>so basically i was going to use the story i always use; people come in the afternoon, no alcohol, stay till past midnight and the roof was still raising. it went from healing and self defence, to fun fair and then nightclub, which was packed. the energy was not only refreshingly new, but a complete gag, simple minded as it may seem but it was a sober party and it was more turnt than just any club. if not being sober means no drunk fights, slipping tripping and in a drag queens case some chick leaning her soaked hand towards your hair to only ask ‘can i touch it’ after her hands already grabbed a fist and now all you can think of is this the day someone swipes you bold at the gig. but i do recall a misery zoom which i completely forgot till now, aisha was playing music to hype me while i dance like an amateur home porn star with wig changes and everything. the first months into quarantine were i was at my lowest. i got to dance and someone was there to watch. its what my childhood dreams are made of.  

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  dancing/lipsyncing/performing - any way in which i can mentally transport myself to my fantasy world. i can often be found just playing a whole scenario in my head which from an outsiders perspective looks like that lady that was dancing waiting for the bus meme. getting older makes it harder to reach the fantasy but it is always worth it.  

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @minaraelwaters
 </a></Link>
 </p> </div></a></Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

{/* end*/}
      {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
      <div className=' duration-500 p-5 hover:skew-x-6 '>
      <div className={styles.card}>
      <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

      <div className="  text-xs  ">
      <p className=' text-xs text-center font-bold   p-5 '>fawziyah ‘fawzy’ rahman</p>
      {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
      {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
      <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <div className={styles.card22}>
      <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>    i am an artist/painter & emergency department nurse. i paint about psychosomatic experiences, reconciling my identity and off loading what is absorbed from patients, merging elements of healing, suffering, altered mental states and hope. i’ve seen lots of people in crisis and like to help them. 

</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>chopping limes kneeling on the kitchen floor because we ran out of counter space; delivering hot, steamy, delicious food to hungry people having a good time. 

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  the bakery aisle.
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >
      find me @: fawziyah.com
 </a></Link>
 {/* <Link href="./"><a target="_blank" className=' font-bold ' >
 find me @: fawziyah.com
 </a></Link> */}
 </p>
</div>
</a></Link>
      </div>
      </div>
      </div>
</div>
{/* end*/}
</div>
{/* p1 */}
<div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-xs text-center font-bold   p-5 '>tryb</p>
            {/* <Link href="https://www.instagram.com/lovely_caring_creatures/"><a target="_blank" className=' font-bold' > */}
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card33}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> dj & radio host.</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b> i remember turning up to a workshop by myself, i think it was a little before the pandemic and i ended up talking to everyone, hanging out and really just connecting with people. it was random moment that i decided to go but by the end of it i was really glad i did.

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> submerging my self in water, whether that&apos;s the sea, ocean or river. did that alot during lockdown. it&apos;s definitely my point of bliss. 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @tryb.official or tryb_official 
 </a></Link>
 </p>
            
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}

</div>





{/* row 2------------------ */}
<div className=' flex '>
  
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            {/* <Link href="http://www.instagram.com/leala.rain/"><a target="_blank" className=' font-bold' > */}

            <p className=' text-xs text-center font-bold   p-5 '>neo 10y</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card44}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b>  oneness </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>  i’m here for a spiritual revolution. i make cerebral and subversive, genre bending post-pop, and play piano and guitar. conscious leadership and a utopian future for humxnity are important to me. 
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b> one of my first misery experiences was when they partnered with pxssy palace upstairs at the garage and it was such a vibe, being around sober folx who were connected with the universe. i loved the recent collaboration with artsadmin - it was so multidimensional. misery as a construct is iconic because understanding sadness is integral to self realization.


</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> trusting the universe. connecting with oneness. choosing love and listening to misery playlists.

</p>

<p className="hover:skew-y-6"> 
      <Link href="www.instagram.com/neo10y"><a target="_blank" className=' font-bold ' >find me @: www.instagram.com/neo10y 
 </a></Link>
 </p>
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            {/* <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' > */}
            <p className=' text-xs text-center font-bold   p-5 '>alexandra (ali)</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card55}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b>  i’m a community grower, trainee forest school teacher & project manager. here to spread the joy of food growing, natural crafts and cooking with others. i also love to talk and hold discussions on plant & food history 
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>   yoooowww, my first misery was such a defining point for me. i&apos;d really never hosted a session with so many folk and the gang at misery believed in & opened that door for me. i remember leaving my partner to tend the balm-making table and creeping downstairs for the first time in the night, the warmth of bodies crowded into a basement in east london, i wandered around alone, was embraced by strangers who felt so familiar, so much like family. i filled my plate with the beautiful food on offer and then came back upstairs to my little stall to continue making balms with community. when i left, i talked about the energy in the space for months after. it&apos;s unlike anything else. ever since, i always feel at peace and softened by the love in the space. and i&apos;m so hyped we get to go on foraging walks together now too, aaaah!! 

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> prayer, connecting with loved ones, preparing foods that uplift my spirit and being outside to appreciate the shifts in the elements which are much like those within me: temporary 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: tallawah_ali 
 </a></Link>
 </p>
            </div>
            {/* </a></Link> */}
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
                  
            <p className=' text-xs text-center font-bold   p-5 '>parissah</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card66}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her/my name </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> i make some pretty/yucky/emotional/silly/chaotic/gay visuals, graphics and video. sometimes i make textile and performance art but mostly i hold spaces for joy, political practice and processing queer asian american feelings. i do a lot of teaching, cooking, yelling, dancing and crying. i like to read, write, do research, facilitate, teach, hold space, laugh, play with my gay little friends and sow the seeds of revolutionary future. 
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b> as an abroad misery family member i have never gotten to share physical space with the misery team but i remember early in pandemic at my very first misery event, hopping on the zoom (late as per usual) and being greeted with a chorus of beautiful faces and accents about to settle into a space to speak about magic and spirituality to share the intimacy (and also trauma) of our relationships to magic and spirit. [also going to misery confidence and getting to pass zoom private notes back and forth with hotties admiring their makeup and to be admired back wow. ]

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> going to the beach with my loves and getting absolutely swept away by the sea and submerged with the jellies until the sun sets and we are just held by the moon. also any form of body movement, dance, skate, climbing, always always with my friends and loves.

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @wonton.titties  
 </a></Link>
 </p>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      
</div>



{/* row 3------------------------- */}
<div className=' flex '>
   {/* p1 */}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <Link href="https://www.instagram.com/opashona/"><a target="_blank" className=' font-bold' >
            <p className=' text-xs text-center font-bold   p-5 '>jamila. aka scotch bonnet bby ❤️‍🔥</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card77}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> *u k g? hi, i’m a casually confused girly who loves a likkle djing on the 1s and 2s, born and raised in east london. i’m the 90s raver born in the wrong year! (98) i would say i’m open form/multi genre dj, cause music is life init. outside of that i currently i have my fingers in a few pies. i am a bbc radio production apprentice, trying to learn all the ticks of the trade when it come to national radio. a youth worker finding ways to give young people a space to come, feel safe and get involved in activities. plus i am head artist liaison for pxssy palace, which i love! also trying out a few other things when i can.  ask and i’ll probably say yea.*
</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b> misery’s 1st ever event was my 1st proper set after learning how to dj. i remember being nervous and speaking to the people around me just put me at ease. i asked for help and it was given with so much love. it was during the summer so it was hot and i was just doing what i do sweating my life away and i’m that moment my 1st proper dj pic of me was taken, at misery! misery to me means safety, enjoyment sober fun. i know that some of the stresses, annoyances and situations that i would have to deal with while being at normal night out i don’t have to there. 

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> something funny or cute or my dogs as they are always cute and will annoy me with kisses. time to just do nothing and come to terms with why i’m sad so that i can get up and be a little better.

</p>

<p className="hover:skew-y-6"> 
      <Link href="https://linktr.ee/JamilaNoniLouise"><a target="_blank" className=' font-bold ' >find me @: https://linktr.ee/jamilanonilouise
 </a></Link>
 </p>
            
            </div>
            </a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-xs text-center font-bold   p-5 '>Rasheeqa</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card88}>
            <p  className=' font-light '>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light '>
      <b className=' font-bold'>my offerings:</b> herbalism as community</p>

      <p className=' font-light '>
      <b className=' font-bold'>a misery memory:</b>first in the pandemic! Sharing herbal medicine knowledge for emotional health with a massive online crowd of Misery family that amazed me with the connections and wisdom and energy living in the bonds and the spread around the earth that you all represented

</  p>

      <p className='  font-light '>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> walking with trees, face in the sunlight

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold ' >find me @: @hedgeherbs, @communityapothecary.wf
 </a></Link>
 </p>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
{/* end*/}
      <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <p className=' text-base text-center font-bold  p-5 '>ella j fros</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card777}>
            <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b> video editing/film making, photography, i contribute my eyes/style</p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>  many many memories to choose from, the first misery where someone said (poss aish) that we looked like footage from an anthropological documentary after an apocalyptic event and everyone was learning how to dance. that first misery felt tangibly new, i like feeling how i’m actually feeling at misery events, nothings heightened or numbed, it is what it is. i take photos at the parties and collaborated with misery with my collective bfz. i luv my role, i like having a role at sober parties cos i usually do enjoy a drink. i am buzzing and filled with a sort of nervous energy to be working on the new films for the plant magic events. filming nature is one of my top muses and having the excuse to document my community is truly wonderful. i am deeply grateful and happy to be involved in misery cos it feels like genuine community at its most wholesome, not afraid to be cute and sentimental cos we are all deeply aware that it’s not always that way so we deserve some of it too.


</p>

      <p className=' font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> posting on my tumblr, watering my plants, talking to them, listening to post punk, tattooing, eating, buying clothes, swimming, texting, sexting 

</p>

<p className="hover:skew-y-6"> 
      <a target="_blank" className=' font-bold' >find me @: @oozing_thru
 </a></p>
            
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}

      
</div>
{/* end of all */}

<Footer></Footer>
                  {/* <div className='z-0 w-[100%]'>
                      <img src="/2.jpg" alt="image2" />
                  </div> */}


        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
  </div>

  </section>













{/* old */}
{/* 
<div className={styles.main}>
        <section className=' pt-36 w-4/6  z-50 text-4xl font-normal text-center items-center m-auto  justify-center pb-5 px-8'>
        <p className=' font-bold '>.｡.:*☆ cOlԼ𝓐bOratOᎡs.｡.:*☆</p>
 <p className=' font-light text-3xl'> Here are some of the big hearts and brilliant minds we have been lucky enough to work with regularly over the last few years </p>
        </section> 
</div>


        <section className=" z-50 border-t-[.5px] border-[#030303] w-screen font-normal text-base mx-auto px-0 ">
      <div className=" flex border-b-[.5px] w-screen border-[#030303] ">
      <Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide""'>our story</a></Link>
<Link href="./theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>the team</a></Link>
<Link href="./"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="./faq"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>faqs </a></Link>
</div>
</section> */}








{/* row 2------------------ */}
<div className=' flex '>
  
      {/* <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-xs  ">
            <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' >
            <p className=' text-base text-center font-bold  p-5 '>maymana arefin</p>
 <div className={styles.card5}>
            <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> she/they </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b> i am a community gardener, forager, fungi lover, multimedia artist + spoken word poet based in south london. i feel most grounded in my body when i am outdoors exploring nature, sitting with fungi and plant relatives, and thinking about what they can teach us. my work ties together the mycelial threads between mind, body and soul. central to each of my offerings is a politics of hope and a cornerstone of radical care.
      </p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b> looking forward to the monthly misery meets (i attended all of them bc i am a dork 🤓) which got me through a very difficult year and lockdown. i remember being amazed and moved at how well misery held us all, even on a zoom call. misery is where my heart is 💗 i am co-facilitating the misery medicines programme 2022-23 and could not be more excited for what this will bring!

</p>

      <p className=' font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> sunlight coming through my bedroom window + wrapping myself tightly in my duvet.
</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold' >find me @: m4ymana
 </a></Link>
 or
 <Link href="https://www.instagram.com/fungi.futures/?hl=es"><a target="_blank" className=' font-bold' > @fungi.futures
 </a></Link>
 </p> 
            </div></a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      end */}
      {/* <div className=' w-2/6 h-2/6  '>
            <div className=' duration-500 p-5 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  rounded-[5%] border-[#efefef]">

            <div className="  text-base  ">
                  
            <p className=' text-base text-center font-bold  p-5 '>sonji shah</p>
    <div className={styles.card6}>
            <p  className='  font-light'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b>  i like to write things - whether it’s sad poems for my personal enjoyment, lil stories for friends, overthought think pieces, or funding applications for misery. since nov. 2020 i’ve also been a community mental health researcher.
</p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>taking a new friend to a misery party and just sitting, talking and eating all evening.
</  p>

      <p className='  font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>nkinder bueno and cuddles

</p>

            </div>
            </div>
            </div>
            </div>
      </div>
      </div> */}
      {/* end*/}
      
</div>














{showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}
  
      {/* <Footer></Footer>  */}

  
  
      </Layout>
    )
  }