import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link"
import Footer from '../../components/Footer';
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";

export const Resourcesp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing, grief, sexualhealth, antiblackness, fatphobia, suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, transformativejustice }) => {


  console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia, suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, transformativejustice,);
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
<title>Resources for qtibpoc healing</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      <div className={styles.main}>
 
        <div className='pt-28 pb-5 p-5 text-center text-xl  relative hidden md:block '>
        <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1>
        <div className='p-3 m-auto text-xl font-light'>
        {/* <BlockContent blocks={communitiesUk} /> */}
        <h1 className=' '></h1>
        <Link href="../crisis/crisis"><a target="_blank" className=' font-normal text-4xl tracking-wide' >*click here for crisis support* ↗</a></Link>
          </div>
        </div>


        <section className='flex space-x-2 list-decimal justify-center text-center max-w-9xl mx-auto h-2/6 '>
            <div className={styles.links}>
        <div className="  text-4xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className=" justify-evenly p-5 ">
<Link  href="#phonetextsupport"><a className='pl-10'>phone/text support</a></Link>
<Link href="#inperson"><a className='pl-10'>in-person london-based support</a></Link>
<Link href="#communitiesUk"><a className='pl-10'>communities & collectives (uk)</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className='pl-10'>communities & collectives (global)</a></Link>
<div></div>
<Link href="#housing"><a className='pl-10'>housing (london/uk)</a></Link>
<Link href="#grief"><a className='pl-10'>grief</a></Link>
<Link href="#sexualhealth"><a className='pl-10'>sexual health</a></Link>
<div></div>
<Link href="#antiblackness"><a className='pl-10'>anti-blackness</a></Link>

<Link href="#fatphobia"><a className='pl-10'>fatphobia</a></Link>
<Link href="#suicide"><a className='pl-10'>suicide</a></Link>
<div></div>
<Link href="#substancereduction"><a className='pl-10'>substance use/harm reduction</a></Link>
<div></div>
<Link href="#lgbtqiaherbalism"><a className='pl-10'>lgbtqia+ & trauma herbalism</a></Link>
<Link href="#therapy"><a className='pl-10'>therapy</a></Link>
<div></div>
<Link href="#movingyourbody"><a className='pl-10'>queer and trans friendly: moving your body!</a></Link>
<div></div>
<Link href="#transformativejustice"><a className='pl-10'>transformative justice</a></Link>
</div>
</div>
</div>
</section>
       

<section className=' text-center justify-center reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <Link href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html"><a target="_blank" className=' py-8 font-black text-3xl tracking-wide' >&quot;you feel like shit&quot; interactive self care guide</a></Link>
        </div>
        </section>




        <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>phone/text support</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <section id="inperson" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>in-person london-based support</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>communities & collectives (uk)</h1>
          <BlockContent blocks={communitiesUk} />
        </div>
        </section>



        <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>communities & collectives (global)</h1>
          <BlockContent className={styles.body} blocks={communitiesGlobal} />
        </div>
        </section>




        <section id="housing" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>housing (london/uk)</h1>
          <BlockContent className={styles.body} blocks={housing} />
        </div>
        </section>




        <section id="grief" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>grief</h1>
        <BlockContent className={styles.body} blocks={grief} />
        </div>
        </section>

 

        <section id="sexualhealth" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>sexual health</h1>
        <BlockContent className={styles.body} blocks={sexualhealth} />
        </div>
        </section>



        <section id="antiblackness" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>anti-blackness</h1>
        <BlockContent className={styles.body} blocks={antiblackness} />
        </div>
        </section>



        <section id="fatphobia" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>fatphobia</h1>
        <BlockContent className={styles.body} blocks={fatphobia} />
        </div>
        </section>



        <section id="suicide" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>suicide</h1>
        <BlockContent className={styles.body} blocks={suicide} />
        </div>
        </section>
        


        <section id="substancereduction" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>substance use/harm reduction</h1>
        <BlockContent className={styles.body} blocks={substancereduction} />
        </div>
        </section>



        <section id="lgbtqiaherbalism" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>lgbtqia+ & trauma herbalism</h1>
        <BlockContent className={styles.body} blocks={lgbtqiaherbalism} />
        </div>
        </section>



        <section id="therapy" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>therapy</h1>
        <BlockContent className={styles.body} blocks={therapy} />
        </div>
        </section>



        <section id="movingyourbody" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>queer and trans friendly: moving your body!</h1>
        <BlockContent className={styles.body} blocks={movingyourbody} />
        </div>
        </section>



        <section id="transformativejustice" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>transformative justice</h1>
        <BlockContent className={styles.body} blocks={transformativejustice} />
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
        suicide: resources.suicide,
        substancereduction: resources.substancereduction,
        lgbtqiaherbalism: resources.lgbtqiaherbalism,
        therapy: resources.therapy,
        movingyourbody: resources.movingyourbody,
        transformativejustice: resources.transformativejustice,
      }
    }
  }
};

export default Resourcesp;