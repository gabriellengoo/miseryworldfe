
// import { Toolbar } from './toolbar';
// import Meta from "../components/meta";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from 'next/link'

export default function Aboutnav() {
  return (
<section className=" border-dashed border-b-2 border-t-2 border-black text-2xl mx-auto px-0 p-20 ">
      <div className=" flex ">
<Link  href="#whatismisery?"><a className='border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>What is misery?</a></Link>
<Link href="#whatwedo"><a className='border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>What we do</a></Link>
<Link href="#ourgoals"><a className='border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our goals</a></Link>
<Link href="#ourroots"><a className='border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our roots</a></Link>
<Link href="#ourdreams"><a className='border border-solid border-black  hover:bg-[#dbff00] rounded-full p-4 m-auto items-center justify-evenly"'>Our dreams (for a less miserable world)</a></Link>
</div>
</section>
  );
}