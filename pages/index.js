import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import OrbitControls from "../components/OrbitControls";

export default function FirstPost() {
  return (
    
    <Layout>
    <section className={styles.das}>
   
    <Head>
      {/* absolute   bottom-0 justify-evenly */}
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>Misery</title>
      </Head>
    
      {/* <Link  href="./"><img className="z-10 text-center items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/6yR3mjn/misery-world-glitter.png"/></Link>
<Link  href="./Miserysite"><img className="z-10 text-center pb-20 items-center m-auto w-5/12 hover:w-7/12 duration-500 drop-shadow-[0_0px_5px_#c21b9e] " src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link>
     */}

    <section className=' h-screen '>
        <div className=" ml-auto ">
        {/* newsec */}
        <Link  href="./"><img className=" z-50 float-right absolute -bottom-20 p-10 w-5/12 hover:w-7/12 duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/6yR3mjn/misery-world-glitter.png"/></Link>
<Link  href="./Miserysite"><img className=" z-50 absolute right-0 -bottom-20 p-10 pb-20  w-5/12 hover:w-7/12 duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link>
{/* <img className={styles.figuredas} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
<img className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/>
        <img className={styles.swerldas} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
        </div>
    

      <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 30, 0]} />
        <Draggable>

        </Draggable>
        <OrbitControls />
        {/* <Box rotateX={3} rotateY={0.2} /> */}
        {/* <Floor position={[0, -1, 0]} /> */}
      </Canvas>
    </div>

    </section>
    
    </section>
    </Layout>
  )
}
