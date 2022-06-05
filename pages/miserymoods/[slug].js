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

export const eventsMiseryMoods = ({ name, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing }) => {
    
   
      // const [imageUrl, setImageUrl] = useState('');
    
      // useEffect(() => {
        // const imgBuilder = imageUrlBuilder({
          // projectId: 'jgs4s870',
          // dataset: 'production',
        // });
    
        // console.log(images)
        // setImageUrl(imgBuilder.image(mainImage));
        
      // }, []);
    // The back-to-top button is hidden at the beginning
  // const [showButton, setShowButton] = useState(false);



  // This function will scroll the window to the top 



  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>misery moods</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      <div className={styles.main}>
 
        <div className='pt-36  p-5 text-left text-xl  relative hidden md:block '>
        <h1 className={styles.crytext2}>{name}</h1>
<p className=' p-3 m-auto text-xl font-light'>
misery has 5 main strands of work and we dip into, enrich and expand each one depending on our mood and what we feel us and our community really needs at a given time. 
</p>
    </div>
       

    {/* <section className='flex space-x-2 list-decimal justify-center text-center max-w-9xl mx-auto '>
            <div className={styles.links}>
        <div className="  text-7xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className=" justify-evenly p-5 ">
<Link  href="#miseryparty"><a className='pl-10'>misery party</a></Link>
<div></div>
<Link href="#miserymoves"><a className='pl-10'>misery moves</a></Link>
<div></div>
<Link href="#miserymeets"><a className='pl-10'>misery meets</a></Link>
<div></div>
<Link href="#miserymedicine"><a className='pl-10'>misery medicine</a></Link>
<div></div>
<Link href="#miserymakes"><a className='pl-10'>misery makes</a></Link>
</div>
</div>
</div>
</section> */}

<section className=' max-w-xl list-decimal text-center mx-auto pt-5 text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide px-0 ">
      <div className="  ">
<Link  href="#miseryparty"><a className=''>☆ misery party ☆</a></Link>
<Link href="#miserymoves"><a className=''>☆ misery moves ☆</a></Link>
<div></div>
</div>
</div>
</div>
</section>
<section className=' max-w-2xl list-decimal text-center mx-auto  text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide px-0 ">
      <div className="  ">
<div></div>
<Link href="#miserymeets"><a className=''>☆ misery meets ☆</a></Link>

<Link href="#miserymedicine"><a className=''>☆ misery medicine ☆</a></Link>
<div></div>
<Link href="#miserymakes"><a className=''>☆ misery makes ☆</a></Link>
</div>
</div>
</div>
</section>





        <section id="miseryparty" className=' justify-center p-3 m-auto font-normal reletive flex  px-8  z-50 '>
        <div className='text-left'>
                    <h1 className='  py-8 font-black text-3xl tracking-wide'>misery party (u can cry if u want 2)</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>



        <section id="miserymoves" className=' justify-center  reletive flex   px-8  z-50 '>
        <div className='text-left'>
        <h1 className='  py-8 font-black text-3xl tracking-wide'>misery moves</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="miserymeets"  className=' justify-center  reletive flex   px-8  z-50 '>
        <div className='text-left'>
        <h1 className='  py-8 font-black text-3xl tracking-wide'>misery meets</h1>
        <BlockContent blocks={communitiesUk} />
        </div>
        </section>


        <section id="miserymedicine"  className=' justify-center  reletive flex   px-8  z-50  '>
        <div className='text-left'>
        <h1 className='  py-8 font-black text-3xl tracking-wide'>misery medicine</h1>
        <BlockContent className={styles.body} blocks={communitiesGlobal} />
                </div>
        </section>
  



        <section id="miserymakes"  className=' justify-center  reletive flex   px-8  z-50  '>
        <div className='text-left'>
        <h1 className='  py-8 font-black text-3xl tracking-wide'>misery makes</h1>
        <BlockContent className={styles.body} blocks={housing} />                </div>
        </section>


        {/* {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )} */}

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

  const query = encodeURIComponent(`*[ _type == "eventsMiseryMoods" && slug.current == "${pageSlug}" ]`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        name: post.name,
        phonetextsupport: post.phonetextsupport,
        inperson: post.inperson,
        communitiesUk: post.communitiesUk,
        communitiesGlobal: post.communitiesGlobal,
        housing: post.housing,
        // grief: post.grief,
        // sexualhealth: post.sexualhealth,
        // antiblackness: post.antiblackness,
        // fatphobia: post.fatphobia,

  
      }
    }
  }
};

export default eventsMiseryMoods;