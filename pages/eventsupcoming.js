import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import FooterComponent from '../components/foottest';
import Marquee from "react-fast-marquee";


export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'jgs4s870',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image).width(500).height(250),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (

    
    <div>

<Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>now & coming up</title>
      </Head>

   


      <Toolbar />
      <div className="text-center  justify-center  mx-auto  p-0 ">
    
      <div className='pt-28  text-left text-xl max-w-7xl mx-auto my-md  relative hidden md:block '>
{/* <h1 className=" pl-3 text-5xl py-8   mx-auto font-black tracking-wide"> now & coming up</h1> */}
    </div>

    <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>events</h1>
        <div className='m-auto text-2xl font-light'>
        {/* <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link> */}
          </div>
        </div>
        </div>
  


        <div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events now & coming up</span>
</Marquee>

</div>
</div>


<div className="">
    <div className=' p-5 text-5xl border-b-[.5px] border-[#030303]  font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>now & coming up</h1>
        <div className='m-auto text-2xl font-light'>
        {/* <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link> */}
          </div>
        </div>
        </div>

    <div className=' text-center justify-center mx-auto my-md  relative hidden md:block '>
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.name}</h3>
              <h3>{p.summary}</h3>
              <img className=' w-36 h-auto ' src={p.image} />
            </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
    </div>


        <div className="  ">
    <div className=' p-5 text-left h-5/6 text-9xl  font-semibold   relative hidden md:block '>
        <h1 className=' py-8  text-left  h-5/6  font-base  tracking-wide flex-none '>archive</h1>
        <div className='m-auto text-2xl font-light'>
        {/* <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link> */}
          </div>
        </div>
        </div>

        <div className=" bg-[white] ">
  <div className=" p-3 border-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp; events archive</span>

</Marquee>

</div>
</div>

<div className="">
    <div className=' p-5 text-5xl font-light  relative hidden md:block '>
        <h1 className=' font-base text-center  tracking-wide flex-none text-5xl '>events archive</h1>
        <div className='m-auto text-2xl font-light'>
        {/* <Link href="../crisis/crisis"><a target="_blank" className=' font-normal tracking-wide' >*click here for crisis support* ↗</a></Link> */}
          </div>
        </div>
        </div>

    <FooterComponent></FooterComponent>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "eventsComming" ]');
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};
