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

export const getin = ({ title, body, bodytwo,
    bodythree, bodyfour, bodyfive }) => {
//   const [imageUrl, setImageUrl] = useState('');
  console.log(title, body, bodytwo,
    bodythree, bodyfour, bodyfive,);

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: 'ngizar2r',
//       dataset: 'production',
//     });

    // setImageUrl(imgBuilder.image(images));
//   }, [images, imagestwo,]);

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>getinvolved</title>
      </Head>
      <Toolbar /> 


      {/* <Toolbar /> */}
      
        {/* <h1>hi</h1> */}
        <div className='pt-28 pb-5 p-5 text-left text-xl  relative hidden md:block '>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold '>{title}</h1>
        <div className=' text-3xl tracking-wide justify-center mx-auto px-0 p-5 font-normal border-b-[.5px] border-[#030303]'>
        <p className=' font-light p-3'>
        it’s so affirming to hear from people who want to work with misery in some capacity. as you might have seen in our
      <Link href="../../about"><a target="_blank" className=' font-semibold p-3 hover:text-[#85ff85]' > ☆‘about’☆ </a></Link>
      section, we have a small core   
       <Link href="../../theteam"><a target="_blank" className=' font-semibold p-3 hover:text-[#85ff85]' > ☆team☆ </a></Link>
       supported by many
        <Link href="../collaborators"><a target="_blank" className=' font-semibold p-3 hover:text-[#92ff92]' > ☆collaborators☆ </a></Link>
        we love and work with regularly. 
</p>  </div>
        </div>

        <div className={styles.main}>
        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=''>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>join the team</h1>
          <BlockContent className={styles.body} blocks={body} />
        </div>
        {/* </div>
    </div> */}


        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=''>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>hire us</h1>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div>
        {/* </div>
    </div> */}

        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=''>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>donate to us</h1>
          <BlockContent className={styles.body} blocks={bodythree} />
        </div>
        {/* </div>
    </div> */}

    {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=''>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold'>share our work with someone</h1>
          <BlockContent className={styles.body} blocks={bodyfour} />
        </div>
        {/* </div>
    </div> */}

    {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className='pb-8'>
        <h1 className=' py-8  tracking-wide  text-5xl font-semibold'>give us feedback</h1>
          <BlockContent className={styles.body} blocks={bodyfive} />
        </div>
        {/* </div>
    </div> */}


 

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

  const query = encodeURIComponent(`*[ _type == "getinvolved" && slug.current == "${pageSlug}" ] { 
    title, body, bodytwo,
    bodythree, bodyfour, bodyfive
}`);

  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const getinvolved = result.result[0];

  if (!getinvolved) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: getinvolved.body,
        title: getinvolved.title,
        bodytwo: getinvolved.bodytwo,
      bodythree: getinvolved.bodythree,
      bodyfour: getinvolved.bodyfour,
      bodyfive: getinvolved.bodyfive,
    //   venue: getinvolved.venue,
        // address: getinvolved.address,
        // coordinates: getinvolved.coordinates,
    //     url: getinvolved.url,
    //   category: getinvolved.category,
      }
    }
  }
};

export default getin;