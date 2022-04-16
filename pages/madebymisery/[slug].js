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
import Spotify from 'react-spotify-embed'

export const Madebymisery = ({ title, mainImage, images, body, bodytwo,
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
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>made by misery</title>
      </Head>
      <Toolbar /> 

      <div className=' pt-36  relative hidden md:block '>
        <h1 className=' text-center font-base  py-8 tracking-wide  text-5xl font-semibold'>{title}</h1>
        </div>

<section className="  z-50 w-screen font-bold text-base mx-auto px-0  border-[.5px] border-[#030303] ">
      <div className=" flex border-[.5px] border-[#030303] w-screen ">
      <Link  href="#memes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>memes</a></Link>
<Link href="#radio"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>radio</a></Link>
<Link href="#zine"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>zine</a></Link>
<Link href="#mixtapes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>mixtapes</a></Link>
</div>
</section>


<div className=" bg-[white] ">
  <div className=" p-3 border-b-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  made by misery</span>
</Marquee>

</div>
</div>



{/* className={styles.main} */}
      {/* <Toolbar /> */}
      <div >

      

        

        <div id="zine" className=' m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 py-8 text-center justify-center font-base border-b-[.5px] text-4xl border-[#030303] tracking-wide">zine</h1>
        <p className=' p-10 border-b-[.5px] text-center justify-center border-[#030303]'> <BlockContent blocks={bodythree} /></p>
        <p>zine will be here</p>
          </div>

        <div className='flex tracking-wider  overflow-scroll h-screen w-screen '>
<div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-2/6 h-4/6 top-0  p-5 '>
<h1 id="mixtapes" className="flex-none pl-3 py-8 text-center justify-center font-base text-4xl tracking-wide">mixtapes</h1>
        <p className='  text-xl text-center '>misery has a mixtape for every occasion. treat yourself to these communally compiled wonders</p>
        </div>
        
        <div className=' text-base border-[.5px] border-[#030303] z-0  h-4/6 w-5/6 overflow-scroll'>
            {/* mix tapes */}
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center '>it’s my race war and i’ll cry if i want to (songs 2 cry 2)</p>
            <Spotify wide link="https://open.spotify.com/playlist/6mTp95jFfaVmnYYdht2xTt?si=Ph6mbWZ3Q0GQFEno7XzCFQ&nd=1"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center '>sloe berries: (songs about slowness, being slow, slowing down, taking your time, resisting the rush, going at your own goddamn pace, bl00ming slowly, being right on time... made with those anxious about a return to too-fast before-times in mind 💗)</p>
            <Spotify wide link="https://open.spotify.com/playlist/65cVjFWL0vkbQnfSkb9Kih?si=76652aaca14f4962&nd=1"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center '>misery valentines</p>
            <Spotify wide link="https://open.spotify.com/playlist/011OdWaKZxrjx3jQENnQw7"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center'>trans fem futures</p>
            <Spotify wide link="https://open.spotify.com/playlist/5j4SXkiCgAPMU6iSh26gjE?si=7a0e923ba16c4488"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>magic and spirituality</p>
            <Spotify wide link=" https://open.spotify.com/playlist/7qXX0rOokJ82Ec9o2zkQje?si=95fa4b45f0e94b6c"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>sexual health</p>
            <Spotify wide link="https://open.spotify.com/playlist/6Fgwq8U2zD1Qj14dbBETeV?si=673663dff5b04bcd"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>grief </p>
            <Spotify wide link="https://open.spotify.com/playlist/78F7nnKzRwDg9aX6lXwKU3?si=c4372d4b88074121"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>pleasure</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eThUBeZ5Q9hJPbEb4XaV6?si=afbbc09bf3a2414e"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>bdsm</p>
            <Spotify wide link="https://open.spotify.com/playlist/022tUmXe2Ig3cFqxI4v7MA?si=085a894a842e4d19"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>family</p>
            <Spotify wide link="https://open.spotify.com/playlist/6WKX8bRWOF0fxaz9UBjCPa?si=0a49392a2cae4b97"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>addiction</p>
            <Spotify wide link="https://open.spotify.com/playlist/6XDehgp2XzmjacGV7TrdFz?si=4e7797d3f7c74c9f"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>confidence</p>
            <Spotify wide link="https://open.spotify.com/playlist/6OTVTrT5RHooAeAZUZOK6t?si=aedc5f440d1e4c46"/>

            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-center overflow-hidden'>confidence (felix and bronze edition)</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eUdDWCjqyaxCPMzbYChiA?si=94425ac5f1064d89"/>
            </div>

         
            </div>

      


        {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Mixtapes</h1>
        <BlockContent blocks={body} /> 
          </div> */}

<div id="radio" className=' m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 py-8 text-center justify-center font-base border-b-[.5px] text-4xl border-[#030303] tracking-wide">radio</h1>
        <p className=' p-10 border-b-[.5px] text-center justify-center border-[#030303]'><BlockContent blocks={bodytwo} /></p>
          </div>

{/* old */}
          {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Radio</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <BlockContent blocks={bodytwo} />
          </div> */}

        

        

          <div className=' m-auto text-xl font-light'>
        <h1 id="memes" className="flex-none pl-3 text-3xl py-8 font-base  tracking-wide">memes</h1>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          </div>
{/* old */}
          {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Zine</h1>
        <BlockContent blocks={bodythree} />
          </div> */}

          {/* <embeded></embeded> */}


          <div className='p-3 m-auto text-xl font-light'>


          </div>

      </div>


      <FooterComponent></FooterComponent>
      {/* <Footer></Footer>  */}
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

export default Madebymisery;