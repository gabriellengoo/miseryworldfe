import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import FooterComponent from '../components/foottest';
import Marquee from "react-fast-marquee";
import Link from 'next/link';

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'jgs4s870',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (

    
    <div>

<Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>events</title>
      </Head>

   
      <section className="h-screen relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


    <div className='float-right h-screen right-0 overflow-scroll w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          {/* <BlockContent blocks={description} /> */}
          {/* <Toolbar />    */}
          <div className=' p-5  h-screen '>
          
          {/* <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
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
           <Link  href="./"><a className=''><img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/></a></Link>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div>
           {/* <p className="text-left pt-56 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}


           <div className="flex items-center  w-full">
           {/* <div className="flex items-center justify-center min-h-screen w-full"> */}
           {/* <img className="w-4/6 " src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
           {/* <img className="w-5/6 object-center justify-center" src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
           {/* <img className="w-5/6 object-center justify-center" src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
          {/* <p className="text-center object-center font-serif font-light "> u can cry if u want to</p> */}
          </div>

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

        {/* <p className="text-3xl  text-left pt-20 font-semibold  "> now & coming up</p>  */}
        {/* <p className="text-center object-center font-light "> now & coming up</p> */}



        <p className={styles.crytext2}> archive </p> 
        <p className=" italic text-left font-base text-[black] justify-center text-3xl pb-10 no-underline hover:underline "> <Link  href="./eventsupcoming">events</Link> <p className='underline float-right text-[#1b1b1b] hover:text-[black]  '><Link  href="./">archive</Link></p> </p> 

        <div className=' container grid grid-cols-3 gap-1 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsarchivebby/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                {/* hover:saturate-50 w-96  hover:z-0 */}
                      <img  className='flex w-12/12 h-auto p-1 float-left hover:z-0 font-italic' src={p.image} />
                      <div className=" text-center object-center text-lg z-50 font-semibold ">{p.name}</div>
                      <div className=" text-center object-center text-lg z-50 font-light ">{p.summary}</div>
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>

       

        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
  </div>

  </section>






      {/* <Toolbar /> */}
      {/* <div className="text-center  justify-center  mx-auto  p-0 ">
    
      <div className='pt-28  text-left text-xl max-w-7xl mx-auto my-md  relative hidden md:block '>
    </div>

    <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>events</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div>
  


<div className="">
    <div className=' p-5 text-5xl border-b-[.5px] border-[#030303]  font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>now & coming up</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div> */}


        {/* <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
  <h1  className="tracking-wider" >Title</h1>
  <p  className="mx-auto">Description</p>
  </a> */}
    {/* <div className=' text-center justify-center mx-auto my-md  relative hidden md:block '>
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsarchivebby/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.name}</h3>
              <h3>{p.div}</h3>
              <img className=' w-56 h-auto ' src={p.image} /> */}
{/* <a href="#" className="relative">
    <div className="w-56 h-auto flex flex-wrap content-center">
        <img src={p.image} className="w-56 h-auto   " alt=""/>
    </div>
</a> */}
            {/* </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
    </div> */}


        {/* <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>archive</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div>

        <div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>

</Marquee>

</div>
</div> */}

{/* <div className="">
    <div className=' p-5 text-5xl font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>events archive</h1>
        <div className='m-auto text-2xl font-light'>
          </div>
        </div>
        </div> */}

    {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "eventsarchivebby" ]');
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};
