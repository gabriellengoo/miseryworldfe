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
import Head from 'next/head';
import { SectionTitle } from "../../components/SectionTitle";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "../../components/MuiNextLink"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../../components/NewsletterForm';
// import FooterComponent from '../components/foottest';
import FooterComponent from '../../components/foottest';
import Marquee from "react-fast-marquee";
import Footer from '../../components/Footer';

export const contactus = ({ title, body, bodytwo, }) => {
//   const [imageUrl, setImageUrl] = useState('');
  console.log(title, body, bodytwo,);

//   useEffect(() => {
//     const imgBuilder = imageUrlBuilder({
//       projectId: 'ngizar2r',
//       dataset: 'production',
//     });

    // setImageUrl(imgBuilder.image(images));
//   }, [images, imagestwo,]);

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div>
             <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>Contact</title>
      </Head>
     
     






      <section className="h-screen relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


    <div className='float-right h-screen right-0 overflow-scroll w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          {/* <BlockContent blocks={description} /> */}
          
          <div className=' p-5  h-screen '>
          
          <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  {/* <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  
  {/* <img className={styles.figurenew} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
   

          {/* /text */}
          {/* <p className="text-left pt-10 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}

{/* min-h-screen w-full */}
{/* flex items-center justify-center */}
{/* className=" mx-auto p-auto fixed w-2/12 object-center justify-center" */}
           <div className=" ">
           {/* <div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div> */}
           {/* <p className="text-left pt-56 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}
           {/* <div className="pt-56"><Toolbar /> </div> */}

           <div className={styles.back}>
           <Link  href="../"><a className=''><img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/></a></Link>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div>
           
           {/* <img className="" src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
           {/* <img className="w-5/6 object-center justify-center" src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
          {/* <p className="text-center object-center font-serif font-light "> u can cry if u want to</p> */}
          </div>

{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#7da392]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#7da392] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#7da392] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#7da392] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#7da392] '>☆ our dreams</a></Link>
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
        <div className='  z-0 p-5 top-0 h-screen w-9/12 overflow-scroll'>
          
        {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}


<div className=''>
        {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
        {/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
        <p className={styles.crytext4}>{title}</p> 
{/* -webkit-text-stroke: 2px black; */}


  


  
<div className=' '>
      {/* <div className={styles.main}> */}




        {/* <div className=' pb-5  text-base  relative hidden md:block '>
        <h1 className='  text-2xl font-light tracking-tighter  '>contact</h1>
        </div> */}


        <div className='   text-base  relative hidden md:block '>
        {/* <h1 className=' text-2xl font-light tracking-tighter ptracking-wide'>{title}</h1> */}
        {/* <h1 className='  text-2xl font-light   '>  email:<a href="mailto:hello@miseryparty.org"> hello@miseryparty.org</a></h1> */}
        <h1 className='  text-2xl font-light text-center   '> <a href="mailto:hello@miseryparty.org"> hello@miseryparty.org</a></h1>

        </div>

        <div className='   text-base  relative hidden md:block '>
        <h1 className=' text-2xl font-light text-center   '>anonymous Feedback form! misery confessions: tell us ur secrets</h1>
         </div>
{/*         
        <div className='text-l indent-5 tracking-wide  m-auto text-2xl font-light'> */}
        {/* <div className='text-l indent-5 tracking-wide p-3 m-auto text-2xl font-light'>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div> */}
        

        <div className=' pt-10 text-center relative hidden md:block text-2xl font-light  '>
            <h1 className='  '>sign up to our Newsletter</h1>
        </div>
              <MailchimpSubscribe
            url={ MAILCHIMP_URL }
            render={ ( props ) => {
              const { subscribe, status, message } = props || {};
              return (
                <NewsletterForm
                  status={ status }
                  message={ message }
                  onValidated={ formData => subscribe( formData ) }
                />
              );
            } }
    />



{/* <MuiNextLink sx={{ textDecoration: "none", }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram  className=' text-[#de2a7b]   text-3xl' />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.blue" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter className=' text-3xl ' />
		</MuiNextLink> */}

    {/* </div> */}
        
       


  
 

      {/* </div> */}
      </div>


 

      {/* </div> */}
             
      </div>


<Footer></Footer>
            </div>

  </div>
  </section>
















      {/* <Toolbar /> */}
      

      {/* <div className="pt-28 bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden text-[#005c99] underline ">
  <a href="mailto:hello@miseryparty.org">
<Marquee>
<span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
    <span className="mx-4  ]">  &nbsp; .｡.:☆.｡.: &nbsp; hello@miseryparty.org</span>
</Marquee>
</a>
</div>
</div> */}



      {/* <FooterComponent></FooterComponent> */}
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

  const query = encodeURIComponent(`*[ _type == "contact" && slug.current == "${pageSlug}" ] { 
    title, body, bodytwo,
}`);

  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const contact = result.result[0];

  if (!contact) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: contact.body,
        title: contact.title,
        bodytwo: contact.bodytwo,
    //   venue: contact.venue,
        // address: contact.address,
        // coordinates: contact.coordinates,
    //     url: contact.url,
    //   category: contact.category,
      }
    }
  }
};

export default contactus;