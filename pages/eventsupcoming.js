import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'ngizar2r',
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
       <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
<title>now & coming up</title>
      </Head>

   


      <Toolbar />
      <div className="text-center  justify-center  mx-auto  p-0 ">
    
      <div className='pt-28  text-left text-xl max-w-7xl mx-auto my-md  relative hidden md:block '>
<h1 className=" pl-3 text-5xl py-8   mx-auto font-black tracking-wide"> now & coming up</h1>
    </div>



    <div className=' text-center justify-center max-w-7xl mx-auto my-md pb-20  relative hidden md:block '>
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
    <Footer></Footer> 
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "eventsComming" ]');
  const url = `https://ngizar2r.api.sanity.io/v1/data/query/production?query=${query}`;
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
