import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    
    <Layout>
    <section className={styles.das}>
   
    <Head>
       <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
<title>Misery</title>
      </Head>
    
    
    <section className='flex h-screen mx-auto px-0'>
        <div className="text-8xl top-0 p-15 flex h- screen m-auto mx-auto px-0">
        {/* newsec */}
        <Link  href="./"><img className="z-10 text-center items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/>
</Link>
<Link  href="./Miserysite"><img className="z-10 text-center items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/>
</Link>
<img className={styles.figuredas} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.swerldas} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
        </div>
    
    </section>
    
    </section>
    </Layout>
  )
}
