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

export const Pressp = ({ title, bodypanels, images, imagestwo, body, bodytwo,
    bodythree, }) => {
  const [imageUrl, setImageUrl] = useState('');
  console.log(title, bodypanels, images, imagestwo, body, bodytwo,
    bodythree,);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'ngizar2r',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(images));
  }, [images, imagestwo,]);

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>Press</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      <div className={styles.main}>
        {/* <h1>hi</h1> */}
        <div className='pt-28 pb-5 p-5 text-center text-xl  relative hidden md:block '>
        <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1>
        <div className='p-3 m-auto text-xl font-light'>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          <BlockContent blocks={bodypanels} />
          </div>
        </div>


        <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}>
        <div className='text-center text-l p-5 font-light indent-5 tracking-wide'>
        <h1 className=' pl-3 py-8 font-black text-3xl tracking-wide'>awards</h1>
          <BlockContent className={styles.body} blocks={body} />
        </div>
        </div>
    </div>


        <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}>
        <div className='text-center text-l p-5 font-light indent-5 tracking-wide'>
        <h1 className=' pl-3 py-8 font-black text-3xl tracking-wide'>research</h1>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div>
        </div>
    </div>

        <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}>
        <div className='text-center text-l p-5 font-light indent-5 tracking-wide'>
        <h1 className=' pl-3 py-8 font-black text-3xl tracking-wide'>press  ↗</h1>
          <BlockContent className={styles.body} blocks={bodythree} />
        </div>
        </div>
    </div>


 

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

  const query = encodeURIComponent(`*[ _type == "press" && slug.current == "${pageSlug}" ] { 
    title, images, imagestwo, body, bodytwo,
    bodythree,
    bodypanels,
}`);

  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const press = result.result[0];

  if (!press) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: press.body,
        title: press.title,
        images: press.images,
        bodytwo: press.bodytwo,
      bodythree: press.bodythree,
      imagestwo: press.imagestwo,
      bodypanels: press.bodypanels,
    //   venue: press.venue,
        // address: press.address,
        // coordinates: press.coordinates,
    //     url: press.url,
    //   category: press.category,
      }
    }
  }
};

export default Pressp;