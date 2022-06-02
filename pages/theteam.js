import Link from 'next/link';
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import styles from '../styles/Theteam.module.css';
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
         {/* <script src="https://unpkg.com/react@16.12.0/ulg/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/ulg/react-dom.development.js"></script> */}
  <title>.｡.:*☆ thƐ tƐ𝓐m.｡.:*☆</title>
        </Head>
        {/* <Toolbar />  */}


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
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
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
        <p className={styles.crytext}> the team</p> 
        <p className="text-2xl  text-center italic  ">Get to know the team behind misery :)</p>

{/* <section className=" z-50  font-normal text-base pt-5  text-center  ">
      <div className=" text-center   ">
<Link  href="../videoBlogPost/our-story"><a className=' text-xl pl-5 text-center  hover:text-[#dbff00] font-light'>(remove this part and change to drop down)our story</a></Link>
<Link href="../../theteam"><a className=' text-xl pl-5 text-center hover:text-[#dbff00] font-light'>the team</a></Link>
<Link href="../../collaborators"><a className=' pl-5 text-xl text-center hover:text-[#dbff00]  font-light'>collaborators</a></Link>
<Link href="../../faq"><a className=' text-xl pl-5 text-center hover:text-[#dbff00]  font-light'>faqs </a></Link>
</div>
</section> */}





<div className=' flex '>
      {/* p1 */}
      <div className=' w-4/6 h-2/6  '>
            <div className=' duration-500 p-10 hover:skew-x-6 '>
                  <div className={styles.card}>
                        <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%] rounded-[5%] z-50  border-[#efefef]">

                              <div className="  text-xs  ">
                                          <p className=' text-base text-center font-bold  p-5 '>aisha mirza</p>
                                          <Link href="https://www.instagram.com/uglyinahotway/?hl=es"><a target="_blank" className=' font-bold' >
                                          {/* <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3]  w-[105%] h-5/6 absolute z-40 hover:opacity-0 ' src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          
                                          {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
                                          {/* <img className={styles.cardone} src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/> */}
                                          <div className={styles.cardone}>
                                        
                                                <p  className=' font-light'>
                                                <b className=' font-bold '>my pronouns:</b> they/them/anything neutral 
                                                </p>

                                                <p className=' font-light'>
                                                <b className=' font-bold'>my offerings:</b> as a writer, dj, survivor, community organizer, artist, anti-capitalist, club kid, counsellor, mad person ~ misery is the place everything i love meets. it’s the thing that has taught me the most, about friendship, self-preservation, community care, cruelty & love. thank god my journey with mental health which began overmedicated in psych wards a decade ago, has brought me here.
                                                </p>

                                                <p className=' font-light'>
                                                in 2014 i won a scholarship to study mental health & art at new york university. i went on to work as a social worker, supporting people with complex mental health needs across the city. at night, i worked at bellevue hospital as a domestic violence & sexual assault crisis counselor. in 2018, a crushing depression & no health insurance brought me back to london, where after another stint in hospital, misery was created.
                                                </p>

                                                <p className=' font-light'>
                                                these days, misery is my primary mental health offering, outside of which i choose to spend as much time as i can nourishing my other livelihoods & passions; music, writing, minding my own business, being in & around water, giggling with my wife & friends.
                                                </p>

                                                <p className=' font-light'>
                                                <b className=' font-bold'>a misery memory:</b> i’ll never forget the first party. we had no idea how misery had translated to the masses or if anyone wanted to come to a sober party at all, but when at 9pm i poked my head out the door & saw a line of shy, depressed queers… my heart burst.
                                                </p>

                                                <p className=' font-light'>
                                                <b className=' font-bold'>when i am sad this makes me feel better:</b> baths, listening to dancehall, looking at narrowboat interiors, remembering everything is temporary, chai &/or sleeping
                                                </p>

                                                <p className="hover:skew-y-6"> 
                                                <Link href="https://www.instagram.com/uglyinahotway/?hl=es"><a target="_blank" className=' font-bold' >find me @: uglyinahotway </a></Link>
                                                </p>
                                           </div></a></Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

{/* end*/}
      {/* p1 */}
      <div className=' w-4/6 h-2/6  '>
      <div className=' duration-500 p-10 hover:skew-x-6 '>
      <div className={styles.card}>
      <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%] rounded-[5%]  border-[#efefef]">

      <div className="  text-xs  ">
      <p className=' text-base text-center font-bold  p-5 '>babetheory</p>
      {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
      {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
      <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
      <div className={styles.card2}>
      <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> his week we’re going with we or none, or “they” if ur nasty </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b> as a mad capri-sun in recovery, i am often dreaming about a world where we are doing things differently, a place where we can play freely, be with each other, & plot & scheme safe & sustainable ways to make magic happen. currently i am trying to tap into the fountain to redistribute wealth & resources that can support cultivating & embodying resilience in our community.
      </p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>so many memories… from going to the crisis unit to pulling it back together. misery brings me joy and hope and keeps on reminding me of how blissful and blessed life can be. when aisha called me to get involved with misery, it was like an invitation to come home. i slept in their bed one time in brooklyn during the summer of 2015 before we even really knew each other. it was the night britain decided to brexit and everything was melting but maybe that&apos;s where the seed of our miserable dreams were planted… who really knows how magic happens? 
</p>

      <p className=' font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>
      <Link href="https://cliniq.org.uk/frequently-asked-questions/"><a target="_blank" className=' font-bold' > sex </a></Link>
       and 
       <Link href="https://londonfriend.org.uk/antidote/"><a target="_blank" className=' font-bold' > raves </a></Link>
        and
        <Link href="https://youtu.be/X3DFKYFMQI8"><a target="_blank" className=' font-bold' > food </a></Link>
         and 
         <Link href="https://soundcloud.app.goo.gl/8Ddk78A194EMN6P19"><a target="_blank" className=' font-bold' > seeing my friends smile </a></Link>
          and remebering that 
          <Link href="https://www.readingoctavia.com/"><a target="_blank" className=' font-bold' > all that we touch we change </a></Link> 
          and that theres a big 
          <Link href="https://www.wildfooduk.com/mushroom-guide/"><a target="_blank" className=' font-bold' > big world </a></Link> 
          out there…
</p>
<p className="hover:skew-y-6"> 
      <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' > find me @: dancing at the front left speaker x o x o x o </a></Link>
</p>
      
      </div></a></Link>
      </div>
      </div>
      </div>
</div>
{/* end*/}
</div>




</div>



<div className=' flex '>
    {/* p1 */}
<div className=' w-4/6 h-2/6  '>
            <div className=' duration-500 p-10 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  border-[#efefef]">

            <div className="  text-base  ">
            <p className=' text-base text-center font-bold  p-5 '>soha</p>
            <Link href="https://www.instagram.com/lovely_caring_creatures/"><a target="_blank" className=' font-bold' >
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card3}>
            <p  className=' font-light'>
            <b className=' font-bold '>my pronouns:</b> they/them </p>

            <p className=' font-light'>
            <b className=' font-bold'>my offerings:</b> a little bit of hehe and haha, a big hug if you want one, taking it slow. learning & collaborating at misery and the british trust for ornithology. talk to me about birds.</p>

            <p className=' font-light'>
            <b className=' font-bold'>a misery memory:</b> meeting one of my close friends at the christmas party. watching hannah do quick maths to figure out the water to chai ratio at deprecious. getting a noise complaint from across the road for partying too hard on zoom for misery meets.

      </p>

      <p className="hover:skew-y-6"> 
            <Link href="https://www.instagram.com/lovely_caring_creatures/"><a target="_blank" className=' font-bold' >find me @: lovely_caring_creatures
      </a></Link>
      </p>
            
            </div></a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}
      <div className=' w-4/6 h-2/6  '>
            <div className=' duration-500 p-10 hover:skew-x-6 '>
            <div className={styles.card}>
            <div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-[1px] rounded-[5%]  border-[#efefef]">

            <div className="  text-base  ">
            <Link href="http://www.instagram.com/leala.rain/"><a target="_blank" className=' font-bold' >

            <p className=' text-base text-center font-bold  p-5 '>leala-rain shonaiya</p>
            {/* <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold' >
            <img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  bg-[#ffffffd3] items-center m-auto  w-screen absolute z-0 hover:opacity-0 ' src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/></a></Link> */}
            {/* <h6 className=' flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6> */}
            <div className={styles.card4}>
            <p  className=' font-light'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light'>
      <b className=' font-bold'>my offerings:</b> vibes mate. vibessss innit. it’s giving nigerian auntie at the core. i offer my shoulder for support as well as melodic musings on our monthly show for balamii radio, a song for every feeling – music will get us through.
      </p>

      <p className=' font-light'>
      <b className=' font-bold'>a misery memory:</b>walking into my first misery and bumping into my aunty! many memories of misery moments on many couches in many cities that have carried me through some serious times. aisha challenging me to learn djing in one week and then smashing it live on radio lol
</  p>

      <p className='  font-light'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>naps / playing spider solitaire / memes in the group chat / talking to friends in different time zones / my bad ass younger siblings / raving to jungle

</p>

<p className="hover:skew-y-6"> 
      <Link href="http://www.instagram.com/leala.rain/"><a target="_blank" className=' font-bold' > find me @: leala.rain </a></Link>
      </p>
            
            </div></a></Link>
            </div>
            </div>
            </div>
      </div>
      </div>
      {/* end*/}





</div>

<Footer></Footer>
                  {/* <div className='z-0 w-[100%]'>
                      <img src="/2.jpg" alt="image2" />
                  </div> */}


        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
  </div>

  </section>






{/* mini nav          ---------------- */}
{/* TEAM MEMBERS  hover:drop-shadow-[0_35px_35px_#d1b200] */}
{/* <section className='max-w-5xl mx-auto my-lg'> */}

{/* <section className=" max-w-2xl font-normal text-xl mx-auto px-0 pt-28 ">
      <div className=" flex ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00]  rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>our story</a></Link>
<Link href="./"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>the team</a></Link>
<Link href="./collaborators"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>collaborators</a></Link>
<Link href="./faq"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>faqs </a></Link>
</div>
</section>
 */}
{/* old */}

{/* <div className={styles.main}>
        <section className=' pt-36 w-4/6  z-50 text-4xl font-normal text-center items-center m-auto  justify-center pb-5 px-8'>
        <p className=' font-bold p-3'>.｡.:*☆ ㆜hƐ ㆜Ɛ𝓐m.｡.:*☆</p>
 <p className=' font-light text-3xl'> Get to know the team behind misery :) </p>
        </section> 
</div> */}

{/* 
        <section className=" z-50 w-screen border-t-[.5px] border-[#030303] font-normal text-base mx-auto px-0 ">
      <div className=" flex border-b-[.5px] w-screen border-[#030303] ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our story</a></Link>
<Link href="../../theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>the team</a></Link>
<Link href="../../collaborators"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="../../faq"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>faqs </a></Link>
</div>
</section> */}


{/* <div className=" bg-[white] ">
  <div className=" p-3 font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.:(ง❍_❍)ง &nbsp;  chOOsƐ УouᎡ fighteʀ</span>
</Marquee>

</div>
</div> */}







{showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}
  
      {/* <Footer></Footer>  */}
      {/* <FooterComponent></FooterComponent> */}

  
      </Layout>
    )
  }