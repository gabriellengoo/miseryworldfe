import FaqComponent from "../components/faqAccordion/faq";
import styles from '../styles/Theteam.module.css';
import Link from "next/dist/client/link";
import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
// import Footer from '../components/Footer';
import FooterComponent from '../components/foottest';
import Marquee from "react-fast-marquee";
import Footer from '../components/Footer';

export default function Index() {
    
    const faqs = [
        {
            key: 0,
            title: "why “misery”?",
            description: "there is pressure on everyone, but particularly people of colour, queer people, trans people, marginalised people, to be happy / strong / fierce / hot / inspirational. we too often hear accounts from people who have been miserable once they have found their way out the other side of it, as though sadness can only be tolerated in hindsight. misery is an invitation to come as you are. to be sad or quiet in public. to talk freely, listen actively and heal collectively. to celebrate, give gratitude for and remember those who support us and those who have not been supported. to dream of existence without fear, pain, greed or oppression and imagine the solidarities that might get us there. \n what does your misery have to teach you?  "
        },
        {
            key: 1,
            title: "why do you center qtibpoc?",
            description: "there is a bunch of research confirming what we know, that problematic substance use is much higher in lgbtq communities compared to other demographics. homelessness, mental health issues and suicide are also significantly more common among lgbtq populations. we’re living on a melting planet and sharing memes about wanting to die for sport -- it’s a hard time for everyone -- but it’s harder still for those of us who are different, for whom society was not designed to accommodate, let alone nurture. harder still for black and brown people who experience alarming levels of despair, isolation, barriers to support and oppression both in the world and within our often white-dominated lgbtq minority groups. misery was built by & for us.            "
        },
        {
            key: 2,
            title: "why “BPoC”?",
            description: "we use the phrase ‘black people and people of colour’ in recognition of the fact white supremacy is particularly violent towards Black people. we use this phrase to acknowledge the specific harms of anti-blackness which is perpetuated by all non-black people, and honour the intense oppression that black people have and do face. “the phrase ‘black people and people of colour’ is not perfect. terms and language are ongoing, constantly moving as power and resistance to oppression evolves. by the time our work has reached you, the terms we use may have become outdated or even redundant. we encourage you to engage with our work and text in a dynamic way that follows less the form and more the substance.”- adapted from voices that shake! an anthology of creative movements (2021)"
        },
        {key: 3, title: "why is misery a sober space?", description: "it’s not that we set out with a strictly sober vibe in mind, but the more we thought about it, the clearer it became that if we were trying to make some kind of real mental health intervention, we’d need people to be present for it. when we started out, trying to run a sober rave in an accessible venue in london on a friday or saturday night got us laughed at. nightlife, venues and as a result queer events programming is completely beholden to alcohol sales, hence the lack of sober spaces available. sober spaces aren’t just a health asset, but an anti-capitalist one too, which, call us dated or whatever, feels important. we’ve built misery - using harm reduction principles - as a non-judgmental space. we do not police anyone’s relationship to substances or what they do before or after our events. everyone is welcome, whatever their relationship to substance use and sobriety. we understand people’s trepidations about sober spaces. addiction rhetoric has historically been chock-full of judgement, moralism, unhelpful and unrealistic goal setting, and inherently shaming language like “getting clean”. we’re careful not to replicate these sometimes well-meaning but ultimately damaging frameworks and are looking instead to use our understanding of radical mental health practices which centre the voices of people in need, to create opportunities for marginalised people to have fun in alcohol-free spaces. we do this for friends actively struggling with mental health and/or substance use issues, for people who are curious about their relationship to intoxication and wellness, and for people who just want to have a good time. for many of us, moments of freedom are often facilitated by a kind of dissociation and self-medication that can only be provided by alcohol and other drugs. we deserve some other options too. if you have any questions or concerns about this, and where you fit in with it all, we are here to chat with you."},
       
       
        {key: 4, title: "what is harm reduction & why do you love it so much?", description: "harm reduction is a mental health framework that was developed in the uk in the 1980s in response to the increasing number of hiv cases among drug injectors. rather than shaming drug users, this radical rethinking resulted in the establishment of syringe exchange schemes, where injecting drug users were able to obtain sanitary hypodermic needles at little or no cost, reducing the spread of hiv. harm reduction is now applied globally as a way of engaging with communities and people who may be participating in risky behaviours without shaming, judging, stigmatising or simply telling them to stop. instead, it encourages us to support, listen, help inform others of risks and potential safety measures, and honour eachother’s agency to make choices for ourselves. this can be with regard to drinking, drugs, sex, self-harm – anything really.  haters will say that harm reduction increases the likelihood of people doing risky things, but it doesn’t. there are many studies that prove it doesn’t but also fuck a study and consider it. if we work to remove the stigma and judgement that so often silences and isolates vulnerable people and their coping mechanisms, and listen to them instead, it makes sense that they might feel more cared for and therefore empowered to do what’s right for them with the knowledge, support and resources to be safe while they’re doing it. this feels particularly important when thinking about qtibpoc who by nature of being othered so many times over are no strangers to judgement, guilt and shame and can so easily internalise the belief that they are not worthy of care."},
        
        
        {key: 5, title: "how can i get involved?", description: "see here!"},

    ];

    const faqComponents = faqs.map((faq) => {
        // <div key={faqs.key}>
        return <FaqComponent  key={faqs.key}  title={faq.title} description={faq.description}/>
        // </div>
    });




    

    return <div >

<Head>
         {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
  <title>f𝓐q</title>
        </Head>
        {/* <Toolbar />  */}


        {/* <div className={styles.main}>
        <section className=' pt-36 w-4/6  z-50 text-4xl font-normal text-center items-center m-auto  justify-center pb-5 px-8'>
        <p className=' font-bold p-3'>.｡.:*☆ f𝓐q.｡.:*☆</p>
        </section> 
</div> */}


   
<section className="h-screen relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}




  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 


    <div className='float-right h-screen right-0 overflow-scroll  w-3/12 top-0 font-normal text-lg '>
    <div className={styles.righthome}>
          {/* <BlockContent blocks={description} /> */}
          
          <div className=' p-5  h-screen '>
          
          {/* <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  
  {/* <img className={styles.figurenew} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
   

          {/* /text */}
          {/* <p className="text-left pt-10  text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}


<div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#dbff00] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div>

{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#dbff00]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#dbff00] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#dbff00] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#dbff00] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#dbff00] '>☆ our dreams</a></Link>
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
        {/* <p className="text-center  font-serif font-light "> u can cry if u want to</p> */}

        <div className=" flex-auto mb-2 w-full p-2  text-center text[red]">
                    <h1 className="text-center font-semibold text-7xl">f𝓐q</h1>
                    {/* {faqComponents} */}
                </div> 


                <div className="  flex-auto mb-2 w-full p-2  text-center text[red]">
                    {/* <h1 className="border-b-[.5px] border-[#030303] flex-none pl-3 text-2xl py-8 font-black tracking-wide">.｡.:*☆ f𝓐q.｡.:*☆</h1> */}
                    {faqComponents}
                </div> 




        <Footer></Footer>
        {/* <Link href="https://www.youtube.com/watch?v=5TY_VbQXlkU"><p className="text-2xl  text-center italic pt-10 font-semibold  "> WATCH: chosen family: exploring the importance of LGBTQI+ safe spaces with Aisha Mirza </p></Link> */}
            </div>
            {/* <FooterComponent></FooterComponent>  */}
            
  </div>


  </section>








{/* old site */}

  {/* <div className=" pt-36 flex-auto mb-2 w-full p-2  text-center text[red]">
                    <h1 className=" flex-none pl-3 text-4xl py-8 font-black tracking-wide">.｡.:*☆ f𝓐q.｡.:*☆</h1>
                </div> 

        <section className="  z-50 w-screen font-normal text-base mx-auto px-0 ">
      <div className=" flex border-b-[.5px] border-t-[.5px] w-screen border-[#030303] ">
<Link  href="../videoBlogPost/our-story"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our story</a></Link>
<Link href="../theteam"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>the team</a></Link>
<Link href="../collaborators"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>collaborators</a></Link>
<Link href="./"><a className='  hover:bg-[#dbff00] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>faqs </a></Link>
</div>
</section> */}




        {/* TEAM MEMBERS  hover:drop-shadow-[0_35px_35px_#d1b200] */}

  

{/* <section >
<div >
    border-dashed border-t-2 border-b-2 border-black
    <div className=' font-bold text-5xl w-3/6 col-md-6 col-md-offset-3 p-5'>
    faqs
    </div>
</div>
</section> */}

{/* <div className="flex-auto mb-2 w-full p-2  text-center text[red]">
                    {faqComponents}
                </div>  */}


{/* old */}
        {/* <div className={`container mx-auto flex items-center   ${styles.wrapper}`}>
            <div className={"flex-auto flex flex-col  md:flex-row items-center bg-[#ffffff] m-5  p-3 md:m-10 " + styles.shadow}>
            <div className="flex-auto mb-2 w-full p-2  text-center text[red]">
                    <h1 className="border-b-[.5px] border-[#030303] flex-none pl-3 text-2xl py-8 font-black tracking-wide">.｡.:*☆ f𝓐q.｡.:*☆</h1>
                    {faqComponents}
                </div>         
            </div>
         </div> */}
{/* old */}

<div>
              
                </div> 
    {/* <FooterComponent></FooterComponent> */}
 
    </div>
}