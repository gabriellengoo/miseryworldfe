import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/videoBlogPost.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { Aboutnav } from '../../components/aboutnav';
import FooterComponent from '../../components/foottest';
import ReactPlayer from 'react-player'
import Link from 'next/link'
// import Footer from '../../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';

export const videoBlogPost = ({ name, description }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: 'ngizar2r',
//       dataset: 'production',
//     });

//     // setImageUrl(imgBuilder.image(image));
//   }, []);

  return (
    
    <div>
  <Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title> .｡.:*☆ our story</title>
        </Head>

      <Toolbar />
      


      <div className={styles.main}>
        {/* <h1>{name}</h1> */}
        {/* {imageUrl && <img className={styles.mainImage} src={imageUrl} />} */}
        <section className=' pt-36 border-b-[.5px] border-[#030303] z-50 text-4xl font-normal text-center items-center m-auto flex justify-center pb-5 px-8 font-black '>
        <p className=''> .｡.:*☆ our story </p>
        </section> 



        <section className=" z-50 w-screen font-normal text-base mx-auto px-0  ">
      <div className=" flex w-screen  ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our story</a></Link>
<Link href="../../theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>the team</a></Link>
<Link href="../../collaborators"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="../../faq"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>faqs </a></Link>
</div>
</section>





<div className='flex overflow-scroll h-screen'>
        <div className=' object-cover  border-[.5px] border-[#030303] z-0  top-0 cursor-grabbing h-6/6 w-5/6 overflow-hidden'>
              <Carousel zIndex={-2}  dynamicHeight={false} minHeight={5} interval={4000} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop={true} emulateTouch={true} swipeable={true} >
                
                  {/* <div className='z-0  overflow-hidden '>
                      <img  src="/1.jpeg" alt="image1"/>
                  </div> */}
                  <div className='z-0 w-[160%]'>
                      <img src="/2.jpg" alt="image2" />
                      {/* <p className="legend">Image 2</p> */}
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/3.jpg" alt="image3"/>
                      {/* <p className="legend">Image 3</p> */}
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/4.jpg" alt="image4"/>
                      {/* <p className="legend">Image 4</p> */}
  
                  </div>
                  <div className='z-0 w-[160%]'>
                      <img src="/5.jpg" alt="image5"/>
                      {/* <p className="legend">Image 5</p> */}
  
                  </div>
                
              </Carousel>
            </div>
            <div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-3/6 h-6/6 top-0 font-normal text-lg '>
          <BlockContent blocks={description} />
        </div>
            </div>




       
            {/* <div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-3/6 h-4/6 top-0 font-normal text-sm '>
          <BlockContent blocks={description} />
        </div> */}

        
{/* <section className=' float-left border-[.5px] border-[#030303] reletive flex justify-center pt-12 lg:pt-62 px-8 z-50 '>
        <div className='float-left font-light text-xl '>
          <BlockContent blocks={description} />
        </div>
        </section> */}

        {/* <section className=' text-[48px]  font-black text-center items-center m-auto flex justify-center pt-12 lg:pt-62 px-8'>
        <p className=''> <a href="https://vimeo.com/402987081">QB FILM gal-dem x Levi&#039;s x Queer Britain: Aisha Mirza &amp; DJ Ritu</a> from <a href="https://vimeo.com/queerbritain">Queer Britain</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </section>  */}

        <div className='border-[.5px] border-[#030303] '>
        {/* <ReactPlayer className='text-center items-center m-auto' url='https://player.vimeo.com/video/402987081?h=1d50017fb2' /> */}
        <iframe className=' object-cover h-screen w-screen z-0' src="https://player.vimeo.com/video/402987081?h=1d50017fb2" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>

      </div>

      <FooterComponent></FooterComponent>
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

  const query = encodeURIComponent(`*[ _type == "videoBlogPost" && slug.current == "${pageSlug}" ]`);
  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        description: post.description,
        name: post.name,
      }
    }
  }
};

export default videoBlogPost;