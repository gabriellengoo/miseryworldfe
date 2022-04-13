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
  <title>collaborators</title>
        </Head>
        <Toolbar /> 

{/* https://i.ibb.co/tzGs55c/taali.jp */}
{/*  */}


<section className=" max-w-2xl font-normal text-xl mx-auto px-0 pt-36 ">
      <div className=" flex ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00]  rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>our story</a></Link>
<Link href="./theteam"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>the team</a></Link>
<Link href="./"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>collaborators</a></Link>
<Link href="./faq"><a className='  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly font-black tracking-wide"'>faqs </a></Link>
</div>
</section>


<div className="items-center mx-auto px-0">
      <div className=" text-center flex md:block   z-10 w-1/2">
            <h1 className=" pl-3 py-8 font-black text-6xl tracking-wide items-center justify-evenly m-auto ">collaborators</h1>
            <p className=" pl-3 text-xl tracking-wide items-center justify-evenly m-auto ">        here are some of the big hearts and brilliant minds we have been lucky enough to work with regularly over the last few years
</p>
            </div>
            </div>

{/* mini nav          ---------------- */}

{/* TEAM MEMBERS  hover:drop-shadow-[0_35px_35px_#d1b200] */}
<section className='max-w-9xl mx-10 '>


<section className=" grid m-0 grid-cols-2 gap-30 text-center text-xs">

<div className=' duration-500 p-5 hover:skew-x-6  '>
<div className={styles.card}>
<div className="  hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3]  items-center border-2 rounded-3xl border-black">

<div className=" w-[40vw]  p-5 ">
<img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] items-center m-auto rounded-full w-[10vw] ' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/9sckD7N/nooriyah.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>nooriyah </h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> i play and make music on a mission to make the influence of arabic music known globally. yallaaaa
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>  i was a guest on the misery balamii radio show where mental health and music meet - two of my biggest passions in life. i also dj-ed at one of the misery’s nights years ago and it stayed with me because you can have a boogie and/or have a 1:1 activity like henna, get a reading or drink chai. where else can you get all these options?

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b><Link href="https://www.seriouspuzzles.com/"><a target="_blank" className=' font-bold p-3' >https://www.seriouspuzzles.com/ </a></Link>
</p>

      <p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/nooriyah._/"><a target="_blank" className=' font-bold p-3' >find me @: https://www.instagram.com/nooriyah._/ 
 </a></Link>
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
<img className='hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3]p-5 items-center m-auto rounded-full w-[10vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/SNM6D4f/lady-shaka.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>lady shaka</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>  lady shaka is an afro pasifika dj, producer and interdisciplinary artist originally from aotearoa (new zealand) based in london, uk whose musical selection and art is a representation of both her queer identity as a fem queen and her connection to the moana (ocean) and her diaspora. 

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>one thing i will say is that the people who attend misery always know how to uplift and empower each other. every single time i have played at misery and on behalf of misery my heart is always filled with joy. my favourite memories exist on the dance floor because the conversations aren’t always spoken but expressed through movement, laughter, screaming with joy but also tears. my favourite memory was playing chop suey by system of a down at misery and seeing the shock but also pure excitement in people’s eyes. she loves to wine her waistline but she also loves a bit of heavy metal.
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>
      living on the other side of the world and being so far away from my whānau (family) and kainga (home) it is always hard on my wairua (spirit), so more often than not i find myself playing the ukulele, doing the siva (dance) and listening to pacific island jams and music from my parent’s generation. i take the time to honour my sadness and my emotions by connecting to my culture.

</p>
</div>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' > find me @: @ladyshaka </a></Link>
</p>
 </div>
 </div>
 </div>
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>
<div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/S0s3c3S/hannah.png"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>hannah rose</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> dj, event management, sound tech
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>what misery means to me:</b> i’ve been with misery since their second party. i’ve been a facilitator, producer, sound tech and various other bits.

</p>


<p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>the moment after every party when me and aisha go through all the lovely instagram messages people send!
</p>



      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> final fantasy
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @_foxdyke
 </a></Link>
 </p>

 </div>
 </div>
 </div>
{/* <!-- end team member --> */}

<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>   
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/fn0xZ73/leala.jpg"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>camille barton</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> renegade researcher, educator, embodiment explorer. i love to work with dance, bass and plants as healing tools. i’m very interested in nervous system regulation, and i like to explore this using the resilience tool kit, mindfulness and trauma informed practices. i’m currently running a program called ecologies of transformation which is researching how art-making and embodiment can create social change. 
 </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> i remember having really tender feels witnessing people being able to do art therapy practices whilst also having check-in moments, and it was an honour to be someone that people checked in with. 
      </  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>i really like cuddles, hot water bottles and watching star trek: the next generation. 

</p>


<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' > find me @: www.camillebarton.co.uk // @afrooankali  </a></Link>
      </p>
 </div>
 </div>
 </div> 

 <div className="hover:skew-x-6 p-5 duration-500">
     <div className={styles.card}>
      <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/hKgXMHS/maymana.png"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>ama josephine</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> science fiction workshops and sensual healing breath meditations </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>  i absolutely loved giving massages at misery events
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> cartoons under the duvet in the middle of the day, or a long walk 
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @amajosephine / www.amajosephine.me
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/N3r4Y2H/huq-that.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>huq that (nuzhat fatima & sabira haque)</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> running henna workshops, art direction, henna stalls for events, styling and art!
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>all of our one on one conversations during doing henna on clients . it gives us a chance to have in-depth conversations with individuals from all walks of life and learn from lived experiences.
</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>doing henna makes us feel better ( it’s legit like therapy for us)
</p>


<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @huqthat (as a collective)
@me.a.snowflake - nuz 
@sabirahaque - sabira
 </a></Link>
 </p>

 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
    <div className={styles.card}>
      <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black">
<img className=' p-5  items-center m-auto rounded-full w-[15vw] ' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/31CmbLP/oopie.png"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>oopie</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they/them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> my name is opashona ghosh (or oopie if you love me). i am a visual artist, illustrator and facilitator based in london. my work explores feminist approaches to mental and sexual health, and club culture, locating the intersections of body, community and ritual. i co-founded honey, a zine meditating on the experience of friendship.
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>  while making the poster for misery (at the yard, february 2020), i remember aisha checking in to make sure i don&apos;t overextend myself and remember to take breaks 💖 💖. at that time their genuine gesture of kindness made me simultaneously awkward and cry! 
      looking back now, that interaction helped me make positive and intentional changes to how and who i work with. never going back 💖

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>making sobcore playlists on youtube. sitting quietly in a dimly lit room. burning incense. drawing. cuddling. dancing! long nature walks. acupuncture. bedroom dj-ing. munching on sweeties. writing down things i am grateful for. yoga. telling my friends how much i love them. daydreaming. cooking. feeding. deep diving into critical theory.

</p>

<p className="hover:skew-y-6"> 
      <Link href="https://www.instagram.com/opashona/"><a target="_blank" className=' font-bold p-3' >find me @: https://www.instagram.com/opashona/
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/KjxFQ5V/kemoy.png"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>kemoy</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>    for most of my adult life i have worked as a counsellor and sex educator. i recently trained as a doula and yoga teacher in order to support clients through pregnancy, birth and postpartum. my offerings all surround providing care, education and support to the queer and bipoc communities.
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>when misery came to berlin in 2019 and we were all able to draw out our emotions together and i also got a &apos;sad femme&apos; flash tattoo to commemorate the moment

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  zelda and chill playlist on spotify/ going somewhere that i can walk around barefoot. / cuddling with my cat / watching movie recaps 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me@: @kjcounselling.com 
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}



<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/WknQLNZ/minara-el-waters.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>minara él waters, h2hoe, southgaysian fine-ass-t</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> he/she/they/them/thot
      <p>im easy with my pronouns but if i clock any disrespect i will make a scene i.e. if i got a wig on, full face and heels then you must be special or touched by allah because “common sense is a saving grace” (karen hugers mum rhwop) how about you don’t need to know whats going on with my downstairs because your never gonna see it.)
</p>
       </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>    i want to perform on stages all around the world, i want everyone to get a look, from the basements of shoreditch to, inshallah, stadiums and arenas. even if my only legacy was a superbowl halftime show that slapped, i’d peace out this world calm. 
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>so basically i was going to use the story i always use; people come in the afternoon, no alcohol, stay till past midnight and the roof was still raising. it went from healing and self defence, to fun fair and then nightclub, which was packed. the energy was not only refreshingly new, but a complete gag, simple minded as it may seem but it was a sober party and it was more turnt than just any club. if not being sober means no drunk fights, slipping tripping and in a drag queens case some chick leaning her soaked hand towards your hair to only ask ‘can i touch it’ after her hands already grabbed a fist and now all you can think of is this the day someone swipes you bold at the gig. but i do recall a misery zoom which i completely forgot till now, aisha was playing music to hype me while i dance like an amateur home porn star with wig changes and everything. the first months into quarantine were i was at my lowest. i got to dance and someone was there to watch. its what my childhood dreams are made of.  

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  dancing/lipsyncing/performing - any way in which i can mentally transport myself to my fantasy world. i can often be found just playing a whole scenario in my head which from an outsiders perspective looks like that lady that was dancing waiting for the bus meme. getting older makes it harder to reach the fantasy but it is always worth it.  

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @minaraelwaters
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}



<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/rsGx8n6/firpii.jpg"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>fawziyah ‘fawzy’ rahman</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>    i am an artist/painter & emergency department nurse. i paint about psychosomatic experiences, reconciling my identity and off loading what is absorbed from patients, merging elements of healing, suffering, altered mental states and hope. i’ve seen lots of people in crisis and like to help them. 

</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>chopping limes kneeling on the kitchen floor because we ran out of counter space; delivering hot, steamy, delicious food to hungry people having a good time. 

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b>  the bakery aisle.
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >
      find me @: fawziyah.com
 </a></Link>
 {/* <Link href="./"><a target="_blank" className=' font-bold p-3' >
 find me @: fawziyah.com
 </a></Link> */}
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/rsGx8n6/firpii.jpg"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>bones tan jones</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> they them </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>    i make art i make music i make medicine sometimes and i like to share all of the above with ppl!! i like being close to the soil and creating spaces where ppl sculpt their dreams from clay.
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>me and shadow sistxrs taught some self defence at misery and shared herbal connections and it was super cute and fun! misery reminds me i’m allowed to be sad and also cute and sexy and be positive about life at the same time as being disheartened bc it’s all valid and exists simultaneously and there are spaces where i can be held in that together. and that nature will never judge me. getting massaged by ama to club music was deffo a memory i won’t forget!!

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> sniffing soil or stroking moss
</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @y4y4bones
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/ZXTSp9g/tryb.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>tryb</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> dj & radio host.</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> i remember turning up to a workshop by myself, i think it was a little before the pandemic and i ended up talking to everyone, hanging out and really just connecting with people. it was random moment that i decided to go but by the end of it i was really glad i did.

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> submerging my self in water, whether that&apos;s the sea, ocean or river. did that alot during lockdown. it&apos;s definitely my point of bliss. 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @tryb.official or tryb_official 
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}



<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/XYQjJmm/neo10y.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>neo 10y</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b>  oneness </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>  i’m here for a spiritual revolution. i make cerebral and subversive, genre bending post-pop, and play piano and guitar. conscious leadership and a utopian future for humxnity are important to me. 
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> one of my first misery experiences was when they partnered with pxssy palace upstairs at the garage and it was such a vibe, being around sober folx who were connected with the universe. i loved the recent collaboration with artsadmin - it was so multidimensional. misery as a construct is iconic because understanding sadness is integral to self realization.


</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> trusting the universe. connecting with oneness. choosing love and listening to misery playlists.

</p>

<p className="hover:skew-y-6"> 
      <Link href="www.instagram.com/neo10y"><a target="_blank" className=' font-bold p-3' >find me @: www.instagram.com/neo10y 
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}



<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/rsGx8n6/firpii.jpg"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>alexandra (ali)</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b>  i’m a community grower, trainee forest school teacher & project manager. here to spread the joy of food growing, natural crafts and cooking with others. i also love to talk and hold discussions on plant & food history 
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>   yoooowww, my first misery was such a defining point for me. i&apos;d really never hosted a session with so many folk and the gang at misery believed in & opened that door for me. i remember leaving my partner to tend the balm-making table and creeping downstairs for the first time in the night, the warmth of bodies crowded into a basement in east london, i wandered around alone, was embraced by strangers who felt so familiar, so much like family. i filled my plate with the beautiful food on offer and then came back upstairs to my little stall to continue making balms with community. when i left, i talked about the energy in the space for months after. it&apos;s unlike anything else. ever since, i always feel at peace and softened by the love in the space. and i&apos;m so hyped we get to go on foraging walks together now too, aaaah!! 

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> prayer, connecting with loved ones, preparing foods that uplift my spirit and being outside to appreciate the shifts in the elements which are much like those within me: temporary 

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: tallawah_ali 
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/wKqJ6k2/parissah.png"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>parissah</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her/my name </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> i make some pretty/yucky/emotional/silly/chaotic/gay visuals, graphics and video. sometimes i make textile and performance art but mostly i hold spaces for joy, political practice and processing queer asian american feelings. i do a lot of teaching, cooking, yelling, dancing and crying. i like to read, write, do research, facilitate, teach, hold space, laugh, play with my gay little friends and sow the seeds of revolutionary future. 
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> as an abroad misery family member i have never gotten to share physical space with the misery team but i remember early in pandemic at my very first misery event, hopping on the zoom (late as per usual) and being greeted with a chorus of beautiful faces and accents about to settle into a space to speak about magic and spirituality to share the intimacy (and also trauma) of our relationships to magic and spirit. [also going to misery confidence and getting to pass zoom private notes back and forth with hotties admiring their makeup and to be admired back wow. ]

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> going to the beach with my loves and getting absolutely swept away by the sea and submerged with the jellies until the sun sets and we are just held by the moon. also any form of body movement, dance, skate, climbing, always always with my friends and loves.

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @wonton.titties  
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
<img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/gtbwHf2/jamilla.jpg"/>
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>jamila. aka scotch bonnet bby ❤️‍🔥</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> *u k g? hi, i’m a casually confused girly who loves a likkle djing on the 1s and 2s, born and raised in east london. i’m the 90s raver born in the wrong year! (98) i would say i’m open form/multi genre dj, cause music is life init. outside of that i currently i have my fingers in a few pies. i am a bbc radio production apprentice, trying to learn all the ticks of the trade when it come to national radio. a youth worker finding ways to give young people a space to come, feel safe and get involved in activities. plus i am head artist liaison for pxssy palace, which i love! also trying out a few other things when i can.  ask and i’ll probably say yea.*
</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b> misery’s 1st ever event was my 1st proper set after learning how to dj. i remember being nervous and speaking to the people around me just put me at ease. i asked for help and it was given with so much love. it was during the summer so it was hot and i was just doing what i do sweating my life away and i’m that moment my 1st proper dj pic of me was taken, at misery! misery to me means safety, enjoyment sober fun. i know that some of the stresses, annoyances and situations that i would have to deal with while being at normal night out i don’t have to there. 

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> something funny or cute or my dogs as they are always cute and will annoy me with kisses. time to just do nothing and come to terms with why i’m sad so that i can get up and be a little better.

</p>

<p className="hover:skew-y-6"> 
      <Link href="https://linktr.ee/JamilaNoniLouise"><a target="_blank" className=' font-bold p-3' >find me @: https://linktr.ee/jamilanonilouise
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}



<div className="hover:skew-x-6 p-5 duration-500">
<div className={styles.card}>  
 <div className="hover:drop-shadow-[0_35px_35px_#ffffffd3]  duration-1000 bg-[#ffffffd3] w-[40vw] items-center rounded-3xl border-2 border-black  ">
{/* <img className=' p-5 items-center m-auto rounded-full w-[15vw]' onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/rsGx8n6/firpii.jpg"/> */}
<h6 className='  text-xl p-3 font-black tracking-wide underline underline-offset-8 decoration-sky-500 '>Rasheeqa</h6>
      <p  className=' font-light p-3'>
      <b className=' font-bold '>my pronouns:</b> she/her </p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>my offerings:</b> herbalism as community</p>

      <p className=' font-light p-3'>
      <b className=' font-bold'>a misery memory:</b>first in the pandemic! Sharing herbal medicine knowledge for emotional health with a massive online crowd of Misery family that amazed me with the connections and wisdom and energy living in the bonds and the spread around the earth that you all represented

</  p>

      <p className='  font-light p-3'>
      <b className=' font-bold'>when i am sad this makes me feel better:</b> walking with trees, face in the sunlight

</p>

<p className="hover:skew-y-6"> 
      <Link href="./"><a target="_blank" className=' font-bold p-3' >find me @: @hedgeherbs, @communityapothecary.wf
 </a></Link>
 </p>
 </div>
 </div>
 </div> 
{/* <!-- end team member --> */}


</section>

















      </section>


  
  
      <Footer></Footer> 
  
      </Layout>
    )
  }