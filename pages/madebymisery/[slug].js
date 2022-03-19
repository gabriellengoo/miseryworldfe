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

export const madebymisery = ({ title, mainImage, images, body, bodytwo,
    bodythree, }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'ngizar2r',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(images));
  }, [images]);

  return (
    <div>
             <Head>
       <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
<title>Made by misery</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      <div className={styles.main}>


        <div className='pt-28 pb-5 p-5  text-xl  relative hidden md:block '>
        <h1 className='  py-8 text-center font-black text-6xl tracking-wide'>{title}</h1>
        <div className=' m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Memes</h1>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          </div>
        </div>


        <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Mixtapes</h1>
        {/* {imageUrl && <img className={styles.images} src={imageUrl} />} */}
        <BlockContent blocks={body} />
          
          </div>

          <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Radio</h1>
        {/* {imageUrl && <img className={styles.images} src={imageUrl} />} */}
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <BlockContent blocks={bodytwo} />
          </div>


          <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Zine</h1>
        <BlockContent blocks={bodythree} />
          </div>

          {/* <embeded></embeded> */}


          <div className='p-3 m-auto text-xl font-light'>


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

  const query = encodeURIComponent(`*[ _type == "madebymisery" && slug.current == "${pageSlug}" ] { 
    title, mainImage, images, body, bodytwo,
    bodythree,
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
        mainImage: press.mainImage,
        bodytwo: press.bodytwo,
      bodythree: press.bodythree,
      }
    }
  }
};

export default madebymisery;