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
import Footer from '../../components/Footer';

export const Resourcesp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,  }) => {


  // console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
  //   ,);
  // // The back-to-top button is hidden at the beginning
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
      {/* <Toolbar />  */}






  
      <section className="h-screen relative hidden md:block ">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


    <div className='float-right h-screen right-0 overflow-scroll  w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          {/* <BlockContent blocks={description} /> */}
          
          <div className=' p-5  h-screen '>
          
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


<div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div>

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


    </div>

    
    </div>
    </div>

{/* -------------------------------------------- left */}
        <div className='  z-0 p-5 top-0 h-screen w-9/12 overflow-scroll max-w-4xl'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

        <div className=" flex-auto mb-2  text-left text[red]">
                    <h1 className={styles.crytext2}>{title}</h1>
                    {/* {faqComponents} */}
        <div className='m-auto text-2xl font-light tracking-tighter'>
        <Link href="../crisis/crisis"><a target="_blank" className=' ' >*click here for crisis support* ↗</a></Link>
          </div>
                </div> 


{/* 
<div className={styles.main}>
        <section className='flex space-x-2 list-decimal max-w-2xl justify-center text-center  mx-auto h-2/6 text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className=" justify-evenly p-5 ">
<Link  href="#phonetextsupport"><a className='pl-10'>☆ phone/text support ☆</a></Link>
<Link href="#inperson"><a className='pl-10'>☆ in-person london-based support ☆</a></Link>
<Link href="#communitiesUk"><a className='pl-10'>☆ communities & collectives (uk) ☆</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className='pl-10'>☆ communities & collectives (global) ☆</a></Link>
<div></div>
<Link href="#housing"><a className='pl-10'>☆ housing (london/uk) ☆</a></Link>
</div>
</div>
</div>
</section>
</div> */}

<div className='m-auto text-2xl font-light tracking-tighter'>
        <Link href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html"><a target="_blank" className=' ' >&quot;you feel like shit&quot; interactive self care guide ↗</a></Link>
          </div>



       
        <section className=' max-w-2xl list-decimal text-center mx-auto pt-10 text-2xl font-thin '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide px-0 ">
      <div className="  ">
<Link  href="#phonetextsupport"><a className=''>☆ phone/text support ☆</a></Link>
<Link href="#inperson"><a className=''>☆ in-person london-based support ☆</a></Link>
<Link href="#communitiesUk"><a className=''>☆ communities & collectives (uk) ☆</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className=''>☆ communities & collectives (global) ☆</a></Link>
<div></div>
<Link href="#housing"><a className=''>☆ housing (london/uk) ☆</a></Link>
</div>
</div>
</div>
</section>


          <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>phone/text support</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <section id="inperson" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>in-person london-based support</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (uk)</h1>
          <BlockContent blocks={communitiesUk} />
        </div>
        </section>



        <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (global)</h1>
          <BlockContent className={styles.body} blocks={communitiesGlobal} />
        </div>
        </section>




        <section id="housing" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>housing (london/uk)</h1>
          <BlockContent className={styles.body} blocks={housing} />
        </div>
        </section>


        {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )}

        <Footer></Footer>
        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
            
  </div>


  </section>










      {/* <section className="  pt-36 z-50 w-screen font-bold text-base mx-auto px-0  border-[.5px] border-[#030303] ">
      <div className=" flex border-[.5px] border-[#030303] w-screen ">
      <Link  href="#memes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>memes</a></Link>
<Link href="#radio"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>radio</a></Link>
<Link href="#zine"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>zine</a></Link>
<Link href="#mixtapes"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>mixtapes</a></Link>
</div>
</section> */}

{/* <div className=' p-5 pt-28 text-center text-5xl font-semibold  relative hidden md:block '>
        <h1 className=' py-8 text-center font-base  tracking-wide'>{title}</h1>
        <div className='m-auto text-2xl font-light'>
        <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link>
          </div>
        </div> */}





      {/* <Toolbar /> */}
      
 
        {/* <div className='pt-28 pb-5 p-5 text-center text-xl  relative hidden md:block '>
        <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1>
        <div className='p-3 m-auto text-xl font-light'>
        <h1 className=' '></h1>
        <Link href="../crisis/crisis"><a target="_blank" className=' font-normal text-4xl tracking-wide' >*click here for crisis support* ↗</a></Link>
          </div>
        </div> */}

{/* <div className={styles.main}>
        <section className='flex space-x-2 list-decimal justify-center text-center max-w-9xl mx-auto h-2/6 '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className=" justify-evenly p-5 ">
<Link  href="#phonetextsupport"><a className='pl-10'>☆ phone/text support ☆</a></Link>
<Link href="#inperson"><a className='pl-10'>☆ in-person london-based support ☆</a></Link>
<Link href="#communitiesUk"><a className='pl-10'>☆ communities & collectives (uk) ☆</a></Link>
<div></div>
<Link href="#communitiesGlobal"><a className='pl-10'>☆ communities & collectives (global) ☆</a></Link>
<div></div>
<Link href="#housing"><a className='pl-10'>☆ housing (london/uk) ☆</a></Link>
</div>
</div>
</div>
</section>
</div> */}

{/* <div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  Resources for qtibpoc healing</span>
</Marquee>

</div>
</div> */}
       
{/* <div className={styles.main}> */}
{/* <section className=' text-center justify-center reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <Link href="https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html"><a target="_blank" className=' font-normal text-2xl tracking-wide' >&quot;you feel like shit&quot; interactive self care guide ↗</a></Link>
        </div>
        </section> */}




        {/* <section id="phonetextsupport" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>phone/text support</h1>
          <BlockContent blocks={phonetextsupport} />
        </div>
        </section>


        <section id="inperson" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>in-person london-based support</h1>
          <BlockContent blocks={inperson} />
        </div>
        </section>


        <section id="communitiesUk" className=' reletive flex  pt-12 lg:pt-62 px-8  z-50 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (uk)</h1>
          <BlockContent blocks={communitiesUk} />
        </div>
        </section>



        <section id="communitiesGlobal" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>communities & collectives (global)</h1>
          <BlockContent className={styles.body} blocks={communitiesGlobal} />
        </div>
        </section>




        <section id="housing" className=' reletive flex  pt-12 lg:pt-62 px-8 z-50 p-10 '>
        <div className={styles.body}>
                    <h1 className='  py-8 tracking-wide  text-5xl font-semibold '>housing (london/uk)</h1>
          <BlockContent className={styles.body} blocks={housing} />
        </div>
        </section> */}




        {/* {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )} */}

      </div>


      // <FooterComponent></FooterComponent>
 
    // </div>
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
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing}`);

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
        title: resources.title,
        phonetextsupport: resources.phonetextsupport,
        inperson: resources.inperson,
        communitiesUk: resources.communitiesUk,
        communitiesGlobal: resources.communitiesGlobal,
        housing: resources.housing,
  
      }
    }
  }
};

export default Resourcesp;