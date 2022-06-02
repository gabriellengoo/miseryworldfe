import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { Aboutnav } from '../../components/aboutnav';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import Footer from '../../components/Footer';
import FooterComponent from '../../components/foottest';
import Marquee from "react-fast-marquee";
import Head from 'next/head';
import Router from 'next/router'
import { useRouter } from 'next/router';

export const EventsComming = ({ name, description, image, summary, posts }) => {
  const [imageUrl, setImageUrl] = useState('');
      const router = useRouter();
    const [mappedPosts, setMappedPosts] = useState([]);

  // useEffect(() => {
  //   const imgBuilder = imageUrlBuilder({
  //     projectId: 'jgs4s870',
  //     dataset: 'production',
  //   });

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
                  image: imgBuilder.image(p.image),
                }
              })
            );
          } else {
            setMappedPosts([]);
          }

    setImageUrl(imgBuilder.image(image));
  }, [posts]);

  


  // export default function Home({ posts }) {
  //   const router = useRouter();
  //   const [mappedPosts, setMappedPosts] = useState([]);
  
  //   useEffect(() => {
  //     if (posts.length) {
  //       const imgBuilder = imageUrlBuilder({
  //         projectId: 'jgs4s870',
  //         dataset: 'production',
  //       });
  
  //       setMappedPosts(
  //         posts.map(p => {
  //           return {
  //             ...p,
  //             image: imgBuilder.image(p.image),
  //           }
  //         })
  //       );
  //     } else {
  //       setMappedPosts([]);
  //     }
  //   }, [posts]);
  
  

  return (
  
  
    <div>

<Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title> events </title>
        </Head>
      
      {/* <Toolbar /> */}
      

      {/* <div className={styles.main}> */}
        {/* <h1>{name}</h1> */}
        {/* {imageUrl && <img className={styles.mainImage} src={imageUrl} />} */}
        <section className=' w-1/6 pt-10  z-50  items-center m-auto flex pb-5 px-8 hover:underline text-4xl font-light tracking-tighter'>
        {/* <h1>{name}</h1>        */}
        {/* <h1>Back</h1>    */}
        <div onClick={() => Router.back()}>Back ↗</div>
         </section> 

      <div className='flex'>
        <div className=' object-cover z-0  top-0  h-6/6 w-5/6 '>
              {/* <Carousel zIndex={-2}  dynamicHeight={false} minHeight={5} interval={4000} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop={true} emulateTouch={true} swipeable={true} > */}
                
                  {/* <div className='z-0  overflow-hidden '>
                      <img  src="/1.jpeg" alt="image1"/>
                  </div> */}
                  <div className='z-0 w-[100%] drop-shadow-xl p-10'>
                  {imageUrl && <img className='z-0 w-[100%] drop-shadow-xl p-10' src={imageUrl} />}
                      {/* <p className="legend">Image 2</p> */}
  
                  </div>
             
                
              {/* </Carousel> */}
            </div>
            <div className='float-right right-0 space-x-2  w-4/6 h-6/6 top-0 font-light text-lg p-10  '>
            <h1 className={styles.crytext2}>{name} 💧 </h1>  
            <p className='text-4xl font-normal pt-20'>{summary}</p>
          <BlockContent className='pt-5 font-light' blocks={description} />
        </div>
            </div>
            {/* </div> */}
      {/* <div className={styles.main}>
{imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.body}>
        <BlockContent blocks={name} />
          <BlockContent blocks={description} />
          <BlockContent blocks={summary} />
        </div>
      </div> */}


{/* <p className=' pt-20 p-5 overflow-hidden text-4xl font-semibold  m-auto items-center justify-evenly  tracking-wide '> latest events </p>
<Link  href="../../eventsupcoming"><a className=' p-5 overflow-hidden  hover:text-[#7da392] text-4xl font-light  m-auto items-center justify-evenly  tracking-wide"'>click here to see more events ↗</a></Link>
<div className=' p-5 z-0 top-0  h-auto w-auto overflow-scroll'>
<div className=' p-5 flex w-screen  h-auto overflow-scroll '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                      <img className='w-50 w-96 p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>

            </div> */}

      {/* <Footer></Footer>  */}
    </div>

    
  );
};




export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }




  const query = encodeURIComponent(`*[ _type == "eventsComming" && slug.current == "${pageSlug}" ]`);
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  }

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        description: post.description,
        name: post.name,
        image: post.image,
        summary: post.summary,
        posts: result.result,
        // date: post.date,
      }
    }
  }
};

export default EventsComming;