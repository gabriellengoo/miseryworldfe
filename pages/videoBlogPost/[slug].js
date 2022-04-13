import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/videoBlogPost.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { Aboutnav } from '../../components/aboutnav';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import Footer from '../../components/Footer';


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
      <Toolbar />
      


      <div className={styles.main}>
        {/* <h1>{name}</h1> */}
        {/* {imageUrl && <img className={styles.mainImage} src={imageUrl} />} */}


        <section className=" w-screen font-light text-xl mx-auto px-0 pt-36 p-5 ">
      <div className=" flex border-[.5px] w-screen border-[#030303] ">
<Link  href="./"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our story</a></Link>
<Link href="../../theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>the team</a></Link>
<Link href="../../collaborators"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="../../faq"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>faqs </a></Link>
</div>
</section>


        <section className=' text-[48px] font-black text-center items-center m-auto flex justify-center pt-12 lg:pt-62 px-8'>
        <p className=''> 𝓐&#039;bout .｡.:*☆ </p>
        </section> 






       

        
<section className=' border-[.5px] border-[#030303] reletive flex justify-center pt-12 lg:pt-62 px-8 z-50 '>
        <div className=' font-light text-xl '>
          <BlockContent blocks={description} />
        </div>
        </section>

        <section className=' text-[48px]  font-black text-center items-center m-auto flex justify-center pt-12 lg:pt-62 px-8'>
        <p className=''> <a href="https://vimeo.com/402987081">QB FILM gal-dem x Levi&#039;s x Queer Britain: Aisha Mirza &amp; DJ Ritu</a> from <a href="https://vimeo.com/queerbritain">Queer Britain</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </section> 

        <div className=' '>
        {/* <ReactPlayer className='text-center items-center m-auto' url='https://player.vimeo.com/video/402987081?h=1d50017fb2' /> */}
        <iframe className=' object-cover h-screen w-screen z-0' src="https://player.vimeo.com/video/402987081?h=1d50017fb2" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>

      </div>

      <Footer></Footer> 
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