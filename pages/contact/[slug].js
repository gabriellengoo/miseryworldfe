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
      <Toolbar /> 



      {/* <Toolbar /> */}
      

      <div className="pt-28 bg-[white] ">
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
</div>


      <div className=' p-10 h-screen'>
      {/* <div className={styles.main}> */}




        <div className=' pb-5  text-base  relative hidden md:block '>
        {/* <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1> */}
        <h1 className='  pl-3  font-medium tracking-wide'>contact</h1>
        </div>


        <div className=' pb-5  text-base  relative hidden md:block '>
        {/* <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1> */}
        <h1 className='  pl-3  font-light tracking-wide'>  email:<a href="mailto:hello@miseryparty.org"> hello@miseryparty.org</a></h1>
        </div>

        <div className=' pb-5  text-base  relative hidden md:block '>
        <h1 className=' pl-3  font-light tracking-wide'>anonymous Feedback form!
misery confessions: tell us ur secrets</h1>
         </div>
        
        <div className='text-l indent-5 tracking-wide  m-auto text-2xl font-light'>
        {/* <div className='text-l indent-5 tracking-wide p-3 m-auto text-2xl font-light'>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div> */}
        

        <div className='   text-base relative hidden md:block '>
            <h1 className='  font-light tracking-wide'>sign up to our Newsletter</h1>
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



<MuiNextLink sx={{ textDecoration: "none", }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram  className=' text-[#de2a7b]   text-3xl' />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.blue" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter className=' text-3xl ' />
		</MuiNextLink>

    </div>
        
       


  
 

      {/* </div> */}
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