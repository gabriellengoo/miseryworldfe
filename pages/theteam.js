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




export default function MiserySite() {
    return (
  <Layout>
{/* HEad */}
         <Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title>Our Team</title>
        </Head>
        {/* <Toolbar />  */}







{/* mini nav          ---------------- */}
{/* TEAM MEMBERS  hover:drop-shadow-[0_35px_35px_#d1b200] */}
<section className='max-w-5xl mx-auto my-md'>

<section className=" max-w-2xl font-normal text-xl mx-auto px-0 pt-28 ">
      <div className=" flex ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00]  rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>our story</a></Link>
<Link href="./"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>the team</a></Link>
<Link href="./collaborators"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>collaborators</a></Link>
<Link href="./faq"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>faqs </a></Link>
</div>
</section>
{/* 
<section >
<div className="flex-auto mb-2 w-full p-2 text-center">
                <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Get to know the team behind misery :)</h1>
            </div>
</section> */}



<div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}>
            {/* <img className={"md:hidden flex-none pb-4 " + styles.translated}
                 src="/images/illustration-woman-online-mobile.svg" alt="Woman Online"/> */}

            <div className="flex-none relative hidden md:block   z-10 w-1/2">
            <h1 className="flex-none pl-3 py-8 font-black text-6xl tracking-wide ">the team</h1>
            <p className="flex-none pl-3 text-xl tracking-wide ">Get to know the team behind misery :)</p>
            </div>


            <div className="flex-auto mb-2 w-full  ">
      

<div className="overflow-scroll h-screen">
                
<section className="  text-center text-xs m-auto px-0 max-w-8xl overflow-scroll mx-auto my-md">

<div className=' duration-500 p-5 hover:skew-x-6 '>
<div className={styles.card}>
<div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]   duration-1000 bg-[#ffffffd3]  items-center border-2 rounded-3xl border-black">

<div className=" w-[40vw]  p-5 ">
<img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] items-center m-auto rounded-full w-[10vw] ' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/Z6FVzYw/aisha.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>aisha mirza</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them/anything neutral </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> as a writer, dj, survivor, community organizer, artist, anti-capitalist, club kid, counsellor, mad person ~ misery is the place everything i love meets. it’s the thing that has taught me the most, about friendship, self-preservation, community care, cruelty & love. thank god my journey with mental health which began overmedicated in psych wards a decade ago, has brought me here.
      </p>

      <p className=' font-light p-3'>
      in 2014 i won a scholarship to study mental health & art at new york university. i went on to work as a social worker, supporting people with complex mental health needs across the city. at night, i worked at bellevue hospital as a domestic violence & sexual assault crisis counselor. in 2018, a crushing depression & no health insurance brought me back to london, where after another stint in hospital, misery was created.
       </p>

      <p className=' font-light p-3'>
      these days, misery is my primary mental health offering, outside of which i choose to spend as much time as i can nourishing my other livelihoods & passions; music, writing, minding my own business, being in & around water, giggling with my wife & friends.
      </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> i’ll never forget the first party. we had no idea how misery had translated to the masses or if anyone wanted to come to a sober party at all, but when at 9pm i poked my head out the door & saw a line of shy, depressed queers… my heart burst.
      </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> baths, listening to dancehall, looking at narrowboat interiors, remembering everything is temporary, chai &/or sleeping
      </p>

      <p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/uglyinahotway/?hl=es"><a target="_blank" className=' font-bold p-3' >find me @: uglyinahotway </a></Link>
 </p>
 </div>
 </div>
 </div>
 </div>

{/* <!-- end team member --> */}

 <div className="hover:skew-x-6 p-5 duration-500">
 <div className={styles.card}>
 <div className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] items-center rounded-3xl border-2 border-black'>

<div className=" w-[40vw]  p-5 ">
<img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3]p-5 items-center m-auto rounded-full w-[10vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/dkdhD8Q/babetheory.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>babetheory</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> his week we’re going with we or none, or “they” if ur nasty </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> as a mad capri-sun in recovery, i am often dreaming about a world where we are doing things differently, a place where we can play freely, be with each other, & plot & scheme safe & sustainable ways to make magic happen. currently i am trying to tap into the fountain to redistribute wealth & resources that can support cultivating & embodying resilience in our community.
      </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>so many memories… from going to the crisis unit to pulling it back together. misery brings me joy and hope and keeps on reminding me of how blissful and blessed life can be. when aisha called me to get involved with misery, it was like an invitation to come home. i slept in their bed one time in brooklyn during the summer of 2015 before we even really knew each other. it was the night britain decided to brexit and everything was melting but maybe that&apos;s where the seed of our miserable dreams were planted… who really knows how magic happens? 
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>
      <Link href="https://cliniq.org.uk/frequently-asked-questions/"><a target="_blank" className=' font-bold p-3' > sex </a></Link>
       and 
       <Link href="https://londonfriend.org.uk/antidote/"><a target="_blank" className=' font-bold p-3' > raves </a></Link>
        and
        <Link href="https://youtu.be/X3DFKYFMQI8"><a target="_blank" className=' font-bold p-3' > food </a></Link>
         and 
         <Link href="https://soundcloud.app.goo.gl/8Ddk78A194EMN6P19"><a target="_blank" className=' font-bold p-3' > seeing my friends smile </a></Link>
          and remebering that 
          <Link href="https://www.readingoctavia.com/"><a target="_blank" className=' font-bold p-3' > all that we touch we change </a></Link> 
          and that theres a big 
          <Link href="https://www.wildfooduk.com/mushroom-guide/"><a target="_blank" className=' font-bold p-3' > big world </a></Link> 
          out there…
</p>
</div>

<p className="hover:skew-y-6"> 
      <Link href="https://www.youtube.com/watch?v=r-Nw7HbaeWY&ab_channel=MIAVEVO"><a target="_blank" className=' font-bold p-3' > find me @: dancing at the front left speaker x o x o x o </a></Link>
</p>
 </div>
 </div>
 </div>
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>
<div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/55Djvb5/soha.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>soha</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> aa little bit of hehe and haha, a big hug if you want one, taking it slow. learning & collaborating at misery and the british trust for ornithology. talk to me about birds.</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> meeting one of my close friends at the christmas party. watching hannah do quick maths to figure out the water to chai ratio at deprecious. getting a noise complaint from across the road for partying too hard on zoom for misery meets.

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> giggles, cold blueberries, being read to, a kiss on the head. 
</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/lovely_caring_creatures/"><a target="_blank" className=' font-bold p-3' >find me @: lovely_caring_creatures
 </a></Link>
 </p>
 </div>
 </div>
 </div>
{/* <!-- end team member --> */}

<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>   
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/fn0xZ73/leala.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>leala-rain shonaiya</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> vibes mate. vibessss innit. it’s giving nigerian auntie at the core. i offer my shoulder for support as well as melodic musings on our monthly show for balamii radio, a song for every feeling – music will get us through.
      </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>walking into my first misery and bumping into my aunty! many memories of misery moments on many couches in many cities that have carried me through some serious times. aisha challenging me to learn djing in one week and then smashing it live on radio lol
</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>naps / playing spider solitaire / memes in the group chat / talking to friends in different time zones / my bad ass younger siblings / raving to jungle

</p>


<p className="hover:skew-y-6"> 
      <Link href="http://www.instagram.com/leala.rain/"><a target="_blank" className=' font-bold p-3' > find me @: leala.rain </a></Link>
      </p>
 </div>
 </div>
 </div> 

 <div className="hover:skew-x-6 p-5 duration-500">
     <div className={styles.card}>
      <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/hKgXMHS/maymana.png"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>maymana arefin</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/they </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> i am a community gardener, forager, fungi lover, multimedia artist + spoken word poet based in south london. i feel most grounded in my body when i am outdoors exploring nature, sitting with fungi and plant relatives, and thinking about what they can teach us. my work ties together the mycelial threads between mind, body and soul. central to each of my offerings is a politics of hope and a cornerstone of radical care.
      </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> looking forward to the monthly misery meets (i attended all of them bc i am a dork 🤓) which got me through a very difficult year and lockdown. i remember being amazed and moved at how well misery held us all, even on a zoom call. misery is where my heart is 💗 i am co-facilitating the misery medicines programme 2022-23 and could not be more excited for what this will bring!

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> sunlight coming through my bedroom window + wrapping myself tightly in my duvet.
</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/m4ymana/"><a target="_blank" className=' font-bold p-3' >find me @: m4ymana
 </a></Link>
 or
 <Link href="https://www.instagram.com/fungi.futures/?hl=es"><a target="_blank" className=' font-bold p-3' > @fungi.futures
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/4t7Cw0F/sonji.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>sonji shah</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>  i like to write things - whether it’s sad poems for my personal enjoyment, lil stories for friends, overthought think pieces, or funding applications for misery. since nov. 2020 i’ve also been a community mental health researcher.
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>taking a new friend to a misery party and just sitting, talking and eating all evening.
</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>nkinder bueno and cuddles

</p>

 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
    <div className={styles.card}>
      <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
<img className=' p-5  items-center m-auto rounded-full w-[15vw] ' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/KscjFt6/ella.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>ella j frost</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> video editing/film making, photography, i contribute my eyes/style</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>  many many memories to choose from, the first misery where someone said (poss aish) that we looked like footage from an anthropological documentary after an apocalyptic event and everyone was learning how to dance. that first misery felt tangibly new, i like feeling how i’m actually feeling at misery events, nothings heightened or numbed, it is what it is. i take photos at the parties and collaborated with misery with my collective bfz. i luv my role, i like having a role at sober parties cos i usually do enjoy a drink. i am buzzing and filled with a sort of nervous energy to be working on the new films for the plant magic events. filming nature is one of my top muses and having the excuse to document my community is truly wonderful. i am deeply grateful and happy to be involved in misery cos it feels like genuine community at its most wholesome, not afraid to be cute and sentimental cos we are all deeply aware that it’s not always that way so we deserve some of it too.


</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> posting on my tumblr, watering my plants, talking to them, listening to post punk, tattooing, eating, buying clothes, swimming, texting, sexting 

</p>

<p className="hover:skew-y-6"> 
      <a target="_blank" className=' font-bold p-3' >find me @: @oozing_thru
 </a>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/rsGx8n6/firpii.jpg"/>
<h6 className=' p-3 flex-none  text-xl py-8 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>firpal jawanda</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>   i am an artist, illustrator, and print maker. designing zines mostly. across the board drawing creature fantasies and abstracted south asian folklores & mythologies is my forte x
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>cooking! if i remember correctly it was parathas, curries and chutneys in an observatory on a forested hill in liverpool, then watching the sunset from the roof, the sun setting on the sea over wales in the distance.

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> i do that hand on head, other hand on heart hold that aisha mentioned once. i listen to glenn copeland or grouper, i take a bath. i call a friend.

</p>

<p className="hover:skew-y-6"> 
      <a target="_blank" className=' font-bold p-3' >find me @: @firpal
 </a>
 </p>
 </div>
 </div>
 </div> 

{/* <!-- end team member --> */}

      </section>




</div> 
            </div>
        </div>
    </div>

    </section>

  
  
      <Footer></Footer> 
  
      </Layout>
    )
  }