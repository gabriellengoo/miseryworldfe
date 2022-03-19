import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
import Image from "../../components/Image"
import Link from "next/link"
import Footer from '../../components/Footer';
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";

export const Crisisp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing, grief, sexualhealth, antiblackness,fatphobia, }) => {


  console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia,);
  
    // The back-to-top button is hidden at the beginning
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
<title>Crisis</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      <div className={styles.main}>
 
        <div className='pt-28  p-5 text-center text-xl  relative hidden md:block '>
        <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1>

        </div>
       




        <section className=' justify-center p-3 m-auto text-xl font-normal reletive flex  z-50 '>
        <div className='text-center'>
                    {/* <h1 className='  py-8 font-black text-3xl tracking-wide'>phone/text support</h1> */}
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <div className={`container mx-auto flex items-center p-12 lg:p-62  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center  bg-[#ffffff] drop-shadow-lg shadow-[#f70909] rounded-xl m-5 md:m-10 " + styles.shadow}>
        <section className=' justify-center  reletive flex   px-8  z-50 '>
        <div className='text-center py-8 font-black text-3xl tracking-wide'>
          <BlockContent blocks={inperson} />
        </div>
        </section>
        </div>
        </div>

        <section  className=' font-bold reletive text-xl flex lg:pt-62 px-8  z-50 '>
        <BlockContent blocks={communitiesUk} />
        </section>


        <section  className=' reletive   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={communitiesGlobal} />
                </div>
        </section>
        <section  className=' reletive pl-20   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={fatphobia} />
                </div>
        </section>
        {/*  */}



        <section  className=' reletive flex pt-20   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={housing} />                </div>
        </section>

        <section  className=' reletive flex   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={grief} />
                </div>
        </section>


        <section className=' reletive flex p-20   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={sexualhealth} />
                </div>
        </section>


        <section className=' reletive flex p-20   px-8  z-50 '>
        <div className={styles.body}>
        <BlockContent className={styles.body} blocks={antiblackness} />
                </div>
        </section>



        {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}

      </div>


      <Footer></Footer> 
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
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia, suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, transformativejustice,
}`);

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
        // body: resources.body,
        title: resources.title,
        phonetextsupport: resources.phonetextsupport,
        inperson: resources.inperson,
        communitiesUk: resources.communitiesUk,
        communitiesGlobal: resources.communitiesGlobal,
        housing: resources.housing,
        grief: resources.grief,
        sexualhealth: resources.sexualhealth,
        antiblackness: resources.antiblackness,
        fatphobia: resources.fatphobia,
      }
    }
  }
};

export default Crisisp;