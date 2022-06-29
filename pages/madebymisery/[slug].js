import imageUrlBuilder from '@sanity/image-url';
// import client from './sanityClient'
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { sanityClient } from '@sanity/client'
// import Image from "../../components/Image"
import Link from "next/link";
// import Footer from '../../components/Footer';
import FooterComponent from '../../components/foottest';
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Spotify from 'react-spotify-embed';
import Footer from '../../components/Footer';


export const Madebymisery = ({ title, body, bodytwo,
    bodythree,  }) => {
      // const mixtapesAmount = mixtapes.length
  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   const imgBuilder = imageUrlBuilder({
  //     projectId: 'jgs4s870',
  //     dataset: 'production',
  //   });

  //   setImageUrl(imgBuilder.image(images));
  // }, [images]);

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>made by misery</title>
      </Head>
      <Toolbar /> 






  
      <section className=" relative hidden md:block ">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  {/* <div className=''> */}


 {/* --------------------------------------------  right */}
 


    {/* <div className='float-right h-screen right-0 overflow-scroll  w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}> */}
          {/* <BlockContent blocks={description} /> */}
          
          {/* <div className=' p-5  h-screen '> */}
          
          {/* <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  
  {/* <img className={styles.figurenew} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
   

          {/* /text */}
          {/* <p className="text-left pt-10  text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}


{/* <div className={styles.back}>
           <Link  href="../"><a className=''><img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/></a></Link>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div> */}

{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#dbff00]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#dbff00] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#dbff00] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#dbff00] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#dbff00] '>☆ our dreams</a></Link>
</div> */}


  {/* <div className=" p-5 flex bottom-0 absolute ">
            <div className="p-5 ">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5 m-auto items-center justify-evenly  tracking-wide">
        <Link  href="./"><a className='  m-auto items-center font-light justify-evenly  tracking-wide'>© Misery 2022</a></Link>
        </div>
  </div> */}


    {/* </div>

    
    </div>
    </div> */}

{/* -------------------------------------------- left */}
        <div className=' mx-auto z-0 p-5 top-0  w-9/12 pt-36 max-w-4xl'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

        <div className=" flex-auto mb-2 w-full text-left text[red]">
                    <h1 className={styles.crytext2}>{title}</h1>
                    {/* {faqComponents} */}
                </div> 

                <div className=" list-[none] text-left  object-left text-2xl font-thin  ">
      {/* <Link  href="#memes"><a className=' hover:text-[#7da392]'>☆ memes </a></Link> */}
<Link href="#radio"><a className=' hover:text-[#7da392] '>☆ radio </a></Link>
<Link href="#zine"><a className=' hover:text-[#7da392] '>☆ zine </a></Link>
<Link href="#mixtapes"><a className=' hover:text-[#7da392] '>☆ mixtapes </a></Link>
</div>



<div id="zine" className=' pt-10 m-auto text-large font-light'>
        <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">zine</h1>
        <p className='text-left justify-center font-base '> <BlockContent blocks={body} /></p>
        <p className='text-left pl-5 justify-center font-base '>zine will be here</p>
          </div>
        




          <div id="mixtapes" className=' pt-10 m-auto text-large font-light'>
        <h1 className="flex-none  text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">mixtapes</h1>
        {/* <p className=' text-left justify-center font-base text-2xl font-light tracking-tighter '>misery has a mixtape for every occasion. treat yourself to these communally compiled wonders</p> */}
        <p className='text-left justify-center font-base '><BlockContent blocks={bodytwo} /></p>
        <div className='text-left pl-5 justify-center font-base '>
        <Link  href="../mixtapes" >see them here ↗ </Link>
        </div>
          </div>


       



        
        {/* <div className=' font-base p-3  z-0 overflow-scroll'>

            <p  className='   z-0 p-3 text-left '>it’s my race war and i’ll cry if i want to (songs 2 cry 2)</p>
            <Spotify wide link="https://open.spotify.com/playlist/6mTp95jFfaVmnYYdht2xTt?si=Ph6mbWZ3Q0GQFEno7XzCFQ&nd=1"/>
            
            <p  className='   z-0 p-3 text-left '>sloe berries: (songs about slowness, being slow, slowing down, taking your time, resisting the rush, going at your own goddamn pace, bl00ming slowly, being right on time... made with those anxious about a return to too-fast before-times in mind 💗)</p>
            <Spotify wide link="https://open.spotify.com/playlist/65cVjFWL0vkbQnfSkb9Kih?si=76652aaca14f4962&nd=1"/>
            
            <p  className='   z-0 p-3 text-left '>misery valentines</p>
            <Spotify wide link="https://open.spotify.com/playlist/011OdWaKZxrjx3jQENnQw7"/>
            
            <p  className='   z-0 p-3 text-left'>trans fem futures</p>
            <Spotify wide link="https://open.spotify.com/playlist/5j4SXkiCgAPMU6iSh26gjE?si=7a0e923ba16c4488"/>
            
            <p  className='  z-0 p-3 text-left overflow-hidden'>magic and spirituality</p>
            <Spotify wide link=" https://open.spotify.com/playlist/7qXX0rOokJ82Ec9o2zkQje?si=95fa4b45f0e94b6c"/>
            
            <p  className='   z-0 p-3 text-left overflow-hidden'>sexual health</p>
            <Spotify wide link="https://open.spotify.com/playlist/6Fgwq8U2zD1Qj14dbBETeV?si=673663dff5b04bcd"/>
            
            <p  className='   z-0 p-3 text-left overflow-hidden'>grief </p>
            <Spotify wide link="https://open.spotify.com/playlist/78F7nnKzRwDg9aX6lXwKU3?si=c4372d4b88074121"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>pleasure</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eThUBeZ5Q9hJPbEb4XaV6?si=afbbc09bf3a2414e"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>bdsm</p>
            <Spotify wide link="https://open.spotify.com/playlist/022tUmXe2Ig3cFqxI4v7MA?si=085a894a842e4d19"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>family</p>
            <Spotify wide link="https://open.spotify.com/playlist/6WKX8bRWOF0fxaz9UBjCPa?si=0a49392a2cae4b97"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>addiction</p>
            <Spotify wide link="https://open.spotify.com/playlist/6XDehgp2XzmjacGV7TrdFz?si=4e7797d3f7c74c9f"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>confidence</p>
            <Spotify wide link="https://open.spotify.com/playlist/6OTVTrT5RHooAeAZUZOK6t?si=aedc5f440d1e4c46"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>confidence (felix and bronze edition)</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eUdDWCjqyaxCPMzbYChiA?si=94425ac5f1064d89"/>
            </div>
 */}

<div className='z-0  pt-5 mx-auto w-12/12'>
                      <img src="https://i.ibb.co/6tzptwJ/radio3-1.jpg" alt="miseryparty" />
                  </div>

            <div id="radio" className=' m-auto font-light'>
        <h1 className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">radio</h1>
        <p className='text-left justify-center font-base '><BlockContent blocks={bodythree} /></p>
          </div>


          {/* <div className=' m-auto text-xl font-light'>
        <h1 id="memes" className="flex-none pt-10 text-left justify-center font-semibold border-b-[.5px] text-5xl tracking-wide">memes</h1>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          </div> */}


        <Footer></Footer>
        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
            
  {/* </div> */}


  </section>









{/* old ------------------------------------ */}

      {/* <div className=' pt-36  relative hidden md:block '>
        <h1 className=' text-center font-base  py-8 tracking-wide  text-5xl font-semibold'>{title}</h1>
        </div> */}

{/* <section className="  z-50 w-screen font-bold text-base mx-auto px-0  border-[.5px] border-[#030303] ">
      <div className=" flex border-[.5px] border-[#030303] w-screen ">
      <Link  href="#memes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>memes</a></Link>
<Link href="#radio"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>radio</a></Link>
<Link href="#zine"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>zine</a></Link>
<Link href="#mixtapes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>mixtapes</a></Link>
</div>
</section>
 */}



{/* className={styles.main} */}
      {/* <Toolbar /> */}
      <div >

      

        

        {/* <div id="zine" className=' m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 py-8 text-center justify-center font-base border-b-[.5px] text-4xl border-[#030303] tracking-wide">zine</h1>
        <p className=' p-10 border-b-[.5px] text-center justify-center border-[#030303]'> <BlockContent blocks={bodythree} /></p>
        <p>zine will be here</p>
          </div> */}

{/* 
        <div className='flex tracking-wider  overflow-scroll h-screen w-screen '>
<div className='float-right right-0 overflow-scroll border-[.5px] border-[#030303]  w-2/6 h-4/6 top-0  p-5 '>
<h1 id="mixtapes" className="flex-none pl-3 py-8 text-center justify-center font-base text-4xl tracking-wide">mixtapes</h1>
        <p className='  text-xl text-center '>misery has a mixtape for every occasion. treat yourself to these communally compiled wonders</p>
        </div>
        
        <div className=' text-base border-[.5px] border-[#030303] z-0  h-4/6 w-5/6 overflow-scroll'>
            
            <p  className='   z-0 p-3 text-left '>it’s my race war and i’ll cry if i want to (songs 2 cry 2)</p>
            <Spotify wide link="https://open.spotify.com/playlist/6mTp95jFfaVmnYYdht2xTt?si=Ph6mbWZ3Q0GQFEno7XzCFQ&nd=1"/>
            
            <p  className='   z-0 p-3 text-left '>sloe berries: (songs about slowness, being slow, slowing down, taking your time, resisting the rush, going at your own goddamn pace, bl00ming slowly, being right on time... made with those anxious about a return to too-fast before-times in mind 💗)</p>
            <Spotify wide link="https://open.spotify.com/playlist/65cVjFWL0vkbQnfSkb9Kih?si=76652aaca14f4962&nd=1"/>
            
            <p  className='   z-0 p-3 text-left '>misery valentines</p>
            <Spotify wide link="https://open.spotify.com/playlist/011OdWaKZxrjx3jQENnQw7"/>
            
            <p  className='   z-0 p-3 text-left'>trans fem futures</p>
            <Spotify wide link="https://open.spotify.com/playlist/5j4SXkiCgAPMU6iSh26gjE?si=7a0e923ba16c4488"/>
            
            <p  className='  border-[.5px] border-[#030303] z-0 p-3 text-left overflow-hidden'>magic and spirituality</p>
            <Spotify wide link=" https://open.spotify.com/playlist/7qXX0rOokJ82Ec9o2zkQje?si=95fa4b45f0e94b6c"/>
            
            <p  className='   z-0 p-3 text-left overflow-hidden'>sexual health</p>
            <Spotify wide link="https://open.spotify.com/playlist/6Fgwq8U2zD1Qj14dbBETeV?si=673663dff5b04bcd"/>
            
            <p  className='   z-0 p-3 text-left overflow-hidden'>grief </p>
            <Spotify wide link="https://open.spotify.com/playlist/78F7nnKzRwDg9aX6lXwKU3?si=c4372d4b88074121"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>pleasure</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eThUBeZ5Q9hJPbEb4XaV6?si=afbbc09bf3a2414e"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>bdsm</p>
            <Spotify wide link="https://open.spotify.com/playlist/022tUmXe2Ig3cFqxI4v7MA?si=085a894a842e4d19"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>family</p>
            <Spotify wide link="https://open.spotify.com/playlist/6WKX8bRWOF0fxaz9UBjCPa?si=0a49392a2cae4b97"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>addiction</p>
            <Spotify wide link="https://open.spotify.com/playlist/6XDehgp2XzmjacGV7TrdFz?si=4e7797d3f7c74c9f"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>confidence</p>
            <Spotify wide link="https://open.spotify.com/playlist/6OTVTrT5RHooAeAZUZOK6t?si=aedc5f440d1e4c46"/>

            <p  className='   z-0 p-3 text-left overflow-hidden'>confidence (felix and bronze edition)</p>
            <Spotify wide link="https://open.spotify.com/playlist/5eUdDWCjqyaxCPMzbYChiA?si=94425ac5f1064d89"/>
            </div>

         
            </div> */}

      


        {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Mixtapes</h1>
        <BlockContent blocks={body} /> 
          </div> */}

{/* <div id="radio" className=' m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 py-8 text-center justify-center font-base border-b-[.5px] text-4xl border-[#030303] tracking-wide">radio</h1>
        <p className=' p-10 border-b-[.5px] text-center justify-center border-[#030303]'><BlockContent blocks={bodytwo} /></p>
          </div> */}

{/* old */}
          {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Radio</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <BlockContent blocks={bodytwo} />
          </div> */}

        

        

          {/* <div className=' m-auto text-xl font-light'>
        <h1 id="memes" className="flex-none pl-3 text-3xl py-8 font-base  tracking-wide">memes</h1>
        {imageUrl && <img className={styles.images} src={imageUrl} />}
          </div> */}
{/* old */}
          {/* <div className='p-3 m-auto text-xl font-light'>
        <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">Zine</h1>
        <BlockContent blocks={bodythree} />
          </div> */}

          {/* <embeded></embeded> */}

      </div>


      {/* <FooterComponent></FooterComponent> */}
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
    title, body, bodytwo,
    bodythree, 
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

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
        // images: press.images,
        // mainImage: press.mainImage,
        bodytwo: press.bodytwo,
      bodythree: press.bodythree,
      // mixtapes: press.mixtapes,
      }
    }
  }
};

export default Madebymisery;