import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Menu.module.css'
import { useRouter } from 'next/router';
import 'animate.css';
import { SectionTitle } from '../components/SectionTitle';
import Layout from "../components/Layout";
// import { Container, Row, Col } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';

export const Menu = () => {
    const router = useRouter();

    return (

        <Layout>
<section>
    <div className=' top-0 z-50 fixed text-l text-black tracking-wide font-light  w-screen '>

{/* search */}
        <div className=' -top-[5]  z-50 '>
            <div className=' text-s flex  justify-between '>
                <div className=' ' onClick={() => router.push('../Menu')}>
                    <svg  stroke="currentColor" fill="currentColor"  className='border-[black]text-black-500  p-3 w-17 h-16  ' viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                </div>
                {/* <TextField id="outlined-basic" label="Search" variant="outlined" color="secondary" /> */}


{/* close */}
                <div className=" " onClick={() => router.back()}>
                <svg stroke="currentColor" fill="currentColor"  className='border-[black]text-black-500  p-3 w-17 h-16 hover:text-[#e6e6e6]  ' viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
            <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
        </svg>
                </div>
            </div>
        </div>


    </div>
</section>


{/* logo */}
<section>
<div className=" z-0 ">
            {/* <img className={styles.logocenter} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
        </div>
</section>


{/* backup was here */}


<section className={styles.menuContainer}>

    <div className=" items-center justify-center text-2xl m-auto mx-auto px-0">
    {/* <h1 className=' text-xs flex ' >More</h1> */}
      {/* <a className='hover:text-[#e6e6e6] z-50 duration-500 p-4 m-auto items-center justify-evenly'onClick={() => router.push('/')} >Press ↗</a>
      <a className='hover:text-[#e6e6e6] z-50 duration-500 p-4 m-auto items-center justify-evenly'onClick={() => router.push('/')}>Get involved ↗</a>
      <a className='hover:text-[#e6e6e6] z-50 duration-500 p-4 m-auto items-center justify-evenly'onClick={() => router.push('/')} >Contact ↗</a>
      <a className='hover:text-[#e6e6e6] z-50 duration-500 p-4 m-auto items-center justify-evenly'onClick={() => router.push('/')} >Shop ↗</a> */}

    {/* newsec */}
    <img className="p-4 text-center items-center m-auto w-2/12 hover:w-3/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('videoBlogPost/our-story')} src="https://i.ibb.co/DMmhFb6/Layer-2.png"/>
    <img className="p-4 text-center items-center m-auto w-2/12 hover:w-3/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/eventsupcoming')} src="https://i.ibb.co/PC6ndJ5/Layer-3.png"/>
    <img className="p-4 text-center items-center m-auto w-4/12 hover:w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/madebymisery/made-by-misery')} src="https://i.ibb.co/tXp19yy/Layer-4.png"/>
    <img className="p-4 text-center items-center m-auto w-3/12 hover:w-4/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]"  onClick={() => router.push('/resources/resources-for-qtibpoc-healing')} src="https://i.ibb.co/V25jWY5/Layer-5.png"/>
    {/* newsec */}
    <img className="p-4 text-center items-center m-auto w-2/12 hover:w-3/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('../press/press')} src="https://i.ibb.co/mCW1MxP/Layer-6.png"/>
    <img className="p-4 text-center items-center m-auto h-1/6 hover:w-4/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335]  " onClick={() => router.push('../getinvolved/get-involved')} src="https://i.ibb.co/s3Mfn3q/Layer-7.png"/>
    <img className="p-4 text-center items-center m-auto w-2/12 hover:w-3/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/contact/contact')} src="https://i.ibb.co/6FJhfp7/Layer-8.png"/>
    <img className=" p-4 text-center items-center m-auto w-2/12 hover:w-3/12 duration-500 hover:drop-shadow-[0_0px_5px_#3d9335] " onClick={() => router.push('/Shop')} src="https://i.ibb.co/g7LwM63/Layer-9.png"/>
    </div>

</section>

</Layout>

     );
};
  export default Menu;