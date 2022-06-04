import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link"
// import Footer from '../../components/Footer';
import FooterComponent from '../../components/foottest';
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Footer from '../../components/Footer';

export const Resourcesp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,  }) => {


  // console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
  //   ,);
  // // The back-to-top button is hidden at the beginning
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
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>Resources for qtibpoc healing</title>
      </Head>
      <Toolbar /> 




      <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
          <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 

  
      <section className="h-screen pt-36 relative hidden md:block ">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}

<div className='  z-0 p-5 top-0 h-screen w-10/12 mx-auto  max-w-4xl'>
          
          {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
          <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}
          {/* <Toolbar />  */}
          {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}
  
          <div className=" flex-auto mb-2  text-left text[red]">
                      <h1 className={styles.crytext2}>{title}</h1>

          <div className='m-auto text-2xl font-light tracking-tighter'>
          <Link href="../crisis/crisis"><a target="_blank" className=' ' >*click here for crisis support* ↗</a></Link>
            </div>
                  </div> 
                  <div className='m-auto text-2xl font-light tracking-tighter'>
        <Link href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html"><a target="_blank" className=' ' >&quot;you feel like shit&quot; interactive self care guide ↗</a></Link>
          </div>



       
        <section className=' max-w-2xl list-decimal text-center mx-auto pt-10 text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide px-0 ">
      <div className="  ">
<Link  href="#phonetextsupport"><a className=''>☆ phone/text support ☆</a></Link>
<Link href="#inperson"><a className=''>☆ in-person london-based support ☆</a></Link>
<Link href="#communitiesUk"><a className=''>☆ communities & collectives (uk) ☆</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className=''>☆ communities & collectives (global) ☆</a></Link>
<div></div>
<Link href="#housing"><a className=''>☆ housing (london/uk) ☆</a></Link>
</div>
</div>
</div>
</section>


          <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>phone/text support</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <section id="inperson" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>in-person london-based support</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (uk)</h1>
          <BlockContent blocks={communitiesUk} />
        </div>
        </section>



        <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (global)</h1>
          <BlockContent className={styles.body} blocks={communitiesGlobal} />
        </div>
        </section>




        <section id="housing" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>housing (london/uk)</h1>
          <BlockContent className={styles.body} blocks={housing} />
        </div>
        </section>


        {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}

        <Footer></Footer>

     
                  </div>
                  </section>
 
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug)


  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "resources" && slug.current == "${pageSlug}" ] { 
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const resources = result.result[0];

  if (!resources) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        title: resources.title,
        // phonetextsupport: resources.phonetextsupport,
        // inperson: resources.inperson,
        // communitiesUk: resources.communitiesUk,
        // communitiesGlobal: resources.communitiesGlobal,
        // housing: resources.housing,
  
      }
    }
  }
};

export default Resourcesp;