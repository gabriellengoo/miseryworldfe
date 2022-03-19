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
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "../../components/MuiNextLink"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../../components/NewsletterForm';


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
      <div className=' h-screen'>
        <div className='pt-28 pb-5 p-5 text-center text-xl  relative hidden md:block '>
        {/* <h1 className=' pl-3 py-8 font-black text-6xl tracking-wide'>{title}</h1> */}
        <h1 className='  pl-3 text-6xl font-black tracking-wide'>Contact</h1>
        </div>

        
        <div className='text-center text-l indent-5 tracking-wide  m-auto text-2xl font-light'>
        
        
    {/* <BlockContent className={styles.body} blocks={body} /> */}
  

        <div className='text-center text-l p-10 font-light indent-5 tracking-wide p-3 m-auto text-2xl font-light'>
          <BlockContent className={styles.body} blocks={bodytwo} />
        </div>
        

        <div className=' text-center indent-5 tracking-wide p-3 m-auto text-2xl font-light  relative hidden md:block '>
        <h1 className=' pl-3 tracking-wide'>Sign up to our Newsletter</h1>
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
		<Instagram  className=' text-[#de2a7b] p-5  text-9xl' />
		</MuiNextLink>

		<MuiNextLink sx={{ textDecoration: "none", color: "common.blue" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter className=' text-9xl p-5' />
		</MuiNextLink>

    </div>
        
       



 

      </div>


      <Footer></Footer> 
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