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
<title>press</title>
      </Head>
      {/* <Toolbar />  */}






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
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#7da392] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
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
          
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" /> 
        {/* <Toolbar />  */}

        {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
        {/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
        <p className={styles.crytext}> {title}</p> 
{/* -webkit-text-stroke: 2px black; */}


<section className=' p-5 list-decimal text-center mx-auto  '>
            {/* <div className={styles.links}> */}
        <div className="   mx-auto px-0 text-2xl font-light tracking-tighter">
      <div className=" ">
<Link  href="https://brainchildfestival.co.uk/lineup/rave-to-resist-community-partying-politics/"><a className='pl-10'>BRAINCHILD ↗</a></Link>
</div>
{/* </div> */}
</div>
</section>
<section className=' p-5 list-decimal text-center mx-auto  '>
            {/* <div className={styles.links}> */}
        <div className="   mx-auto px-0 text-2xl font-light tracking-tighter">
      <div className=" ">
      <Link href="https://www.somaskool.com/"><a className='pl-10'>INFERNO ↗</a></Link>
</div>
{/* </div> */}
</div>
</section>
<section className=' p-5 list-decimal text-center mx-auto  '>
            {/* <div className={styles.links}> */}
        <div className="   mx-auto px-0 text-2xl font-light tracking-tighter">
      <div className=" ">
<Link href="https://www.youtube.com/watchv=saPZI5aNGTw&ab_channel=LewisGBurton"><a className='pl-10'>NIGHT EMBASSY ↗</a></Link>
</div>
{/* </div> */}
</div>
</section>
<section className=' p-5 list-decimal text-center mx-auto  '>
            {/* <div className={styles.links}> */}
        <div className="   mx-auto px-0 text-2xl font-light tracking-tighter">
      <div className=" ">
<Link href="https://night-embassy.com/berlin/events/1193/-sweetest-taboo-present-mental-health-in-nightlife-panel"><a className='pl-10'>THE YARD ↗</a></Link>
</div>
{/* </div> */}
</div>
</section>
        {/* <div className=' flex w-auto pt-5 h-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                      <img className='flex w-80 h-auto p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div> */}


<div className={styles.main}>
        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=' text-l  font-light indent-5 text-left tracking-wide'>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold '>press </h1>
          <BlockContent className={styles.body} blocks={bodythree} />
        </div>
        {/* </div>
    </div> */}


        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=' text-l  font-light indent-5 text-left tracking-wide'>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold '>awards</h1>
          <p><BlockContent className={styles.body} blocks={body} /></p>
        </div>
    {/* //     </div>
    // </div> */}


        {/* <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div className={"flex-auto flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}> */}
        <div className=' text-l p-5 font-light text-left indent-5 tracking-wide'>
        <h1 className=' py-8 tracking-wide  text-5xl font-semibold '>research</h1>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div>
    {/* //     </div>
    // </div> */}

  


 

      </div>
             



<Footer></Footer>
            </div>

  </div>
  </section>














      {/* <Toolbar /> */}
      {/* <h1 className='pt-28  py-8 text-center font-base font-semibold tracking-wide text-5xl border-[.5px] border-[#030303]'>{title}</h1> */}

      
        {/* <h1>hi</h1> */}
        {/* <div className='pb-5 p-5 text-center text-xl  relative hidden md:block '>
        <div className='p-3 m-auto text-xl font-light'>
        {imageUrl && <img className={styles.images} src={imageUrl} />} */}

        {/* <section className=' p-5 list-decimal text-center mx-auto h-2/6 border-[.5px] border-[#030303] '>
            <div className={styles.links}>
        <div className="  text-3xl tracking-wide justify-center mx-auto px-0 p-5 ">
      <div className="  p-5 ">
<Link  href="https://brainchildfestival.co.uk/lineup/rave-to-resist-community-partying-politics/"><a className='pl-10'>BRAINCHILD ↗</a></Link>
<Link href="https://www.somaskool.com/"><a className='pl-10'>INFERNO ↗</a></Link>
<Link href="https://www.youtube.com/watchv=saPZI5aNGTw&ab_channel=LewisGBurton"><a className='pl-10'>NIGHT EMBASSY ↗</a></Link>
<Link href="https://night-embassy.com/berlin/events/1193/-sweetest-taboo-present-mental-health-in-nightlife-panel"><a className='pl-10'>THE YARD ↗</a></Link>
</div>
</div>
</div>
</section> */}

{/* block stuff was here */}


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