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


      {/* <section className="  pt-36 z-50 w-screen font-bold text-base mx-auto px-0  border-[.5px] border-[#030303] ">
      <div className=" flex border-[.5px] border-[#030303] w-screen ">
      <Link  href="#memes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>memes</a></Link>
<Link href="#radio"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>radio</a></Link>
<Link href="#zine"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>zine</a></Link>
<Link href="#mixtapes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>mixtapes</a></Link>
</div>
</section> */}

<div className=' p-5 pt-28 text-center text-5xl font-semibold  relative hidden md:block '>
        <h1 className=' py-8 text-center font-base  tracking-wide'>{title}</h1>
        <div className='m-auto text-2xl font-light'>
        <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link>
          </div>
        </div>





      {/* <Toolbar /> */}
      
 
        {/* <div className='pt-28 pb-5 p-5 text-center text-xl  relative hidden md:block '>
        <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1>
        <div className='p-3 m-auto text-xl font-light'>
        <h1 className=' '></h1>
        <Link href="../crisis/crisis"><a target="_blank" className=' font-normal text-4xl tracking-wide' >*click here for crisis support* ↗</a></Link>
          </div>
        </div> */}

<div className={styles.main}>
        <section className='flex space-x-2 list-decimal justify-center text-center max-w-9xl mx-auto h-2/6 '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className=" justify-evenly p-5 ">
<Link  href="#phonetextsupport"><a className='pl-10'>☆ phone/text support ☆</a></Link>
<Link href="#inperson"><a className='pl-10'>☆ in-person london-based support ☆</a></Link>
<Link href="#communitiesUk"><a className='pl-10'>☆ communities & collectives (uk) ☆</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className='pl-10'>☆ communities & collectives (global) ☆</a></Link>
<div></div>
<Link href="#housing"><a className='pl-10'>☆ housing (london/uk) ☆</a></Link>
</div>
</div>
</div>
</section>
</div>

<div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
</Marquee>

</div>
</div>
       
<div className={styles.main}>
<section className=' text-center justify-center reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <Link href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html"><a target="_blank" className=' font-normal text-2xl tracking-wide' >&quot;you feel like shit&quot; interactive self care guide ↗</a></Link>
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

      </div>


      <FooterComponent></FooterComponent>
 
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

  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;

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
        phonetextsupport: resources.phonetextsupport,
        inperson: resources.inperson,
        communitiesUk: resources.communitiesUk,
        communitiesGlobal: resources.communitiesGlobal,
        housing: resources.housing,
  
      }
    }
  }
};

export default Resourcesp;