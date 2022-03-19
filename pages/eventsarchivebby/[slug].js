import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Toolbar } from '../../components/toolbar';
import { Aboutnav } from '../../components/aboutnav';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import Footer from '../../components/Footer';


export const eventsarchivebby = ({ name, description, images, summary }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'ngizar2r',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, []);

  return (
    <div>
      <Toolbar />
      


      <div className={styles.main}>
{imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.body}>
          <BlockContent blocks={description} />
          <BlockContent blocks={summary} />
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

  const query = encodeURIComponent(`*[ _type == "eventsarchivebby" && slug.current == "${pageSlug}" ]`);
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
        images: post.images,
        summary: post.summary,
      }
    }
  }
};

export default eventsarchivebby;