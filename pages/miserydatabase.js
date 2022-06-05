import Map from "../components/Map"
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
import Footer from '../components/Footer';
import { sanityClient } from "../sanity"


// const Miserydatabase = ({
//     location,
//   }) => {
    // const reviewAmount = reviews.length

export default function Miserydatabase({ posts }) {
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
            image: imgBuilder.image(p.mainImage),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
    
  return (
    
    <Layout>
       <Head>
      {/* absolute   bottom-0 justify-evenly */}
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>misery database</title>

      </Head>
      <div className=""><Toolbar /> </div>


{/* <div> */}








<section className="relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  {/* <div className='flex '> */}


 {/* --------------------------------------------  right */}
 


    {/* <div className='float-right  right-0 overflow-scroll w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}> */}
          {/* <BlockContent blocks={description} /> */}
          
          {/* <div className=' p-5   '> */}
          
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
           <Link  href="#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}

{/* min- w-full */}
{/* flex items-center justify-center */}
{/* className=" mx-auto p-auto fixed w-2/12 object-center justify-center" */}
           {/* <div className=" "> */}
           {/* <div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div> */}
           {/* <p className="text-left pt-56 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}
           {/* <div className="pt-56"><Toolbar /> </div> */}

           {/* <div className={styles.back}>
           <Link  href="./"><a className=''><img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/></a></Link>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div> */}
           
           {/* <img className="" src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
           {/* <img className="w-5/6 object-center justify-center" src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
          {/* <p className="text-center object-center font-serif font-light "> u can cry if u want to</p> */}
          {/* </div> */}

{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#7da392]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#7da392] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#7da392] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#7da392] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#7da392] '>☆ our dreams</a></Link>
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


    {/* </div>

    
    </div>
    </div> */}

{/* -------------------------------------------- left */}
        <div className='  z-0 p-5 top-0  w-9/12 mx-auto pt-36'>
          
        <p className={styles.crytext2}> misery database </p> 


        <div  className={styles.songinfo}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div key={index}>
              {/* <div className='p-20 border-b border-[#1e90ff]'> */}
              <div className={styles.songcontainer}>
              <div  className={styles.songinfo}>
    <div  className={styles.songlink} >
    {/* <h2>Location</h2> */}
      <Map location={location}></Map>
            <div>

            {/* <img className={styles.songimg} src={p.mainImage} /> */}
            {/* <Link className={styles.songartist} href='../'></Link> */}
        
            {/* <Link className={styles.songartist} href={p.url}><img className={styles.songimg} src={p.image} /></Link> */}
                    {/* <div  className={styles.play}>▶︎</div> */}
                
            </div>
            
    </div>

                <span  className={styles.songname}>{p.name}</span>
                
                <div  className={styles.songdescription} >
                    <div>{p.summary}</div>
                    <div>{p.body}</div>
                    {/* ↗ */}
                    {/* <a  className={styles.songartist}> {p.url}</a> */}
                    {/* <Link className={styles.songartist} href={p.url}>listen here ↗ </Link> */}
                </div>
</div>
                </div>
                {/* </div> */}
            </div>
          )) : <>Coming Soon !</>}
        </div>



        {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}

       
        {/* <h2>Location</h2>
      <Map location={location}></Map> */}

      <div className=" my-auto grid place-items-center text-5xl">
  
   {/* <p  className=" tracking-wide m-auto  font-semibold"> <p  className=" tracking-wide  m-auto   text-5xl font-semibold place-items-center text-center">misery merch coming soon!</p></p> */}
   </div>
   



<Footer></Footer>
            </div>

  {/* </div> */}
  </section>












{/* old */}

{/* <div className=" grid place-items-center text-5xl">
  
   <p  className="py-8 tracking-wide m-auto  font-semibold"> <p  className="py-8 tracking-wide  m-auto   text-5xl font-semibold place-items-center text-center">shop</p>＊misery merch coming soon!＊</p>
   </div>
   <div className="flex  grid place-items-center text-5xl">
        </div> */}
    {/* // </div> */}
    {/* <FooterComponent></FooterComponent> */}
    </Layout>
  )
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "miserydatabase" ]');
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
  // export default Miserydatabase