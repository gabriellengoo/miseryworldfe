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

export const Crisisp = ({ title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing, grief, sexualhealth, antiblackness,fatphobia,suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, }) => {


  console.log( title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia,);
  
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
<title>crisis</title>
      </Head>
      <Toolbar /> 







   
      <section className=" relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  {/* <div className='flex '> */}


 {/* --------------------------------------------  right */}
 


    {/* <div className='float-right h-screen right-0 overflow-scroll  w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          
          <div className=' p-5  h-screen '> */}
          
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
        <div className=' mx-auto pt-36 z-0 p-5 top-0 h-screen w-9/12 overflow-scroll'>
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

        <div className=" flex-auto mb-2 w-full p-2  text-center text[red]">
                    <h1 className={styles.crytext}>{title}</h1>
                </div> 

                <div className={styles.main}>
 
 





 <section className=' justify-center  m-auto text-xl font-normal reletive flex  z-50 '>
 <div className='text-center'>
             {/* <h1 className='  py-8 font-black text-3xl tracking-wide'>phone/text support</h1> */}
   <BlockContent blocks={phonetextsupport} />
 </div>
 </section>


 <div className={`container mx-auto flex items-center p-12 lg:p-62  ${styles.wrapper}`}>
 <div className={"flex-auto flex-col md:flex-row items-center  bg-[#ffffff] drop-shadow-lg shadow-[#f70909] rounded-xl m-5 md:m-10 " + styles.shadow}>
 <section className=' justify-center  reletive flex   px-8  z-50 '>
 <div className='text-center py-8 font-black text-3xl tracking-wide'>
   <BlockContent blocks={inperson} />
 </div>
 </section>
 </div>
 </div>

 <section  className=' font-bold reletive text-xl flex lg:pt-62 px-8  z-50 '>
 <BlockContent blocks={communitiesUk} />
 </section>


 <section  className=' reletive   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={communitiesGlobal} />
         </div>
 </section>
 <section  className=' reletive pl-20   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={fatphobia} />
         </div>
 </section>
 {/*  */}



 <section  className=' reletive flex pt-20   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={housing} />                </div>
 </section>

 <section  className=' reletive flex   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={grief} />
         </div>
 </section>


 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={sexualhealth} />
         </div>
 </section>


 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={antiblackness} />
         </div>
 </section>

 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={fatphobia} />
         </div>
 </section>

 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={suicide} />
         </div>
 </section>

 {/* <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={substancereduction} />
         </div>
 </section> */}

 {/* <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={lgbtqiaherbalism} />
         </div>
 </section> */}

 {/* <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
 <BlockContent className={styles.body} blocks={therapy} />
         </div>
 </section> */}

 <section className=' reletive flex p-5   px-8  z-50 '>
 <div className={styles.body}>
         <Link href="../resources/resources-for-qtibpoc-healing"><p className="text-2xl  text-center italic pt-10 font-semibold  "> if you’re looking for more resources: click here </p></Link>
         </div>
 </section>

 {showButton && (
 <button onClick={scrollToTop} className={styles.backtotop}>
   &#8679;
 </button>
)}

</div>


             




        <Footer></Footer>
        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            {/* </div> */}
            {/* <FooterComponent></FooterComponent>  */}
            
  </div>


  </section>














  
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

  const query = encodeURIComponent(`*[ _type == "crisis" && slug.current == "${pageSlug}" ] { 
    title, phonetextsupport, inperson, communitiesUk, communitiesGlobal, housing,
    grief, sexualhealth, antiblackness, fatphobia, suicide, substancereduction, lgbtqiaherbalism, therapy, movingyourbody, transformativejustice,
}`);

  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const crisis = result.result[0];

  if (!crisis) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        // body: crisis.body,
        title: crisis.title,
        phonetextsupport: crisis.phonetextsupport,
        inperson: crisis.inperson,
        communitiesUk: crisis.communitiesUk,
        communitiesGlobal: crisis.communitiesGlobal,
        housing: crisis.housing,
        grief: crisis.grief,
        sexualhealth: crisis.sexualhealth,
        antiblackness: crisis.antiblackness, 
        fatphobia: crisis.fatphobia,
        suicide: crisis.suicide,
        // substancereduction: crisis.substancereduction,
        // lgbtqiaherbalism: crisis.lgbtqiaherbalism,
        // therapy: crisis.therapy,
        // movingyourbody: crisis.movingyourbody,
      }
    }
  }
};

export default Crisisp;