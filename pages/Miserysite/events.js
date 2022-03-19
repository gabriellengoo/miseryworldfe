import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Toolbar } from '../../components/toolbar';
// import { Header } from '../components/Header';
import Footer from '../../components/Footer';
import image from '../../public/hero.jpg';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'animate.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'


export default function Miserysite({ posts }) {
    const router = useRouter();
    const [mappedPosts, setMappedPosts] = useState([]);
  
    useEffect(() => {
      if (posts.length) {
        const imgBuilder = imageUrlBuilder({
          projectId: 'ngizar2r',
          dataset: 'production',
        });
  
        setMappedPosts(
          posts.map(p => {
            return {
              ...p,
              mainImage: imgBuilder.image(p.mainImage).width(400).height(400),
            }
          })
        );
      } else {
        setMappedPosts([]);
      }
    }, [posts]);
  
    return (
      <div>

        <BrowserView>

     
        <div className={styles.main}>

<Toolbar />  
<div className=' h-screen'>
<div className={styles.wrapper}>
<div className={styles.noscroll}>
<img src="https://i.ibb.co/5cyWWR7/40560006.jpg" alt="Copy-of-07780014"/>
          </div>
    <div className={styles.allpost}>
    <div className={styles.allpost} >
     <div  className={styles.feed}>
            {mappedPosts.length ? mappedPosts.map((p, index) => (
              <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.posttwo}>
                <img className={styles.mainImage} src={p.mainImage} />
                <h3>{p.title}</h3>
              </div>
            )) : <>No Posts Yet</>}
          </div>
          </div>
          </div>
          </div>
          </div>
  <div className={styles.alltop}>
    <div className={styles.figure}>
    
    {/* <img className={styles.logoa} src="https://i.ibb.co/WPYRtZS/MISERY-SLIME-2.png" /> */}
    {/* <img className=' relative z-50 h-32 w-32 drop-shadow-[0_35px_35px_rgba(252,23,215,0.65)]' src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png" /> */}
   {/* <div className='text-5xl font-light'>Misery site</div>  */}
   {/* </div> */}
    {/* </div> */}
    </div>
    {/* </div> */}
    {/* <img className={styles.swerl} src="https://i.ibb.co/94CGpwH/Masturbateblackthicktransparent.png" /> */}
    {/* <img className='inset-x-0 bottom-0 w-2/12 fixed z-50 drop-shadow-[0_0_5px_#ff34ff]' src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> */}

    {/* <div className>
    <div className='flex  '>
    <div className= 'mx-auto inset-x-0 fixed justify-center'>
    <div className='animate__animated animate__fadeIn'>
    <img className={styles.clouda} src="https://i.ibb.co/nczDCgY/cloud10.png" />
    <img className={styles.cloudb} src="https://i.ibb.co/nczDCgY/cloud10.png" />
    <img className={styles.cloudc} src="https://i.ibb.co/nczDCgY/cloud10.png" />
    </div>
    </div>
    </div>
    </div> */}
   
  </div>
 
 
  

<div className={styles.secsec}>
          <div className="h-screen z-60">
            <div className=" h-3/6 bg-[#f1e4fa] z-60">
          <h1 className={styles.secsec}>Resources →</h1>
          </div>
    <div className={styles.allpost2}>
    <div className=' justify-end z-0' >
     <div  className={styles.feed2}>
            {mappedPosts.length ? mappedPosts.map((p, index) => (
              <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
                <h3>{p.title}</h3>
                <div className={styles.arrowpost}>
     <svg className='' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
        </svg>
        </div>
                <img className={styles.mainImage} src={p.mainImage} />
              </div>
            )) : <>No Posts Yet</>}
          </div>
          </div>
          </div>
          </div>
          </div>


          {/* <img className={styles.logo} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png" /> */}
          

</div>

</BrowserView>

<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>
      
      </div>
    );
  }

   export const getServerSideProps = async pageContext => {
    const query = encodeURIComponent('*[ _type == "post" ]');
    const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;
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
  
 








  