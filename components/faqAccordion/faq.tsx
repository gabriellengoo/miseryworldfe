import {useState} from "react";

export type FaqProps = {
    title: string;
    description: string;
}

export default function FaqComponent(props: FaqProps){

    const [expanded, setExpanded] = useState(false);

    return <div onClick={() => setExpanded(!expanded)} className=" text-light  border-b-[.5px] hover:bg-[#9beea600] border-[#030303] text-center flex flex-col p-5 cursor-pointer">
        <div className=" flex text-light flex-row items-center ">
            <p className={`flex-auto  text-xl font-light text-light ${expanded ? "hover:bg-[#9beea600] text-gray-dark p-5 " : "font-light text-xl"}`}>{props.title}</p>
            <img className="flex-none w-3" src="/images/icon-arrow-down.svg" alt="arrow down"/>
        </div>
        <div className={` transition-max-height duration-700 ease-in-out overflow-hidden text-center font-light text-xl ${expanded ? " hover:bg-[#9beea600] max-h-50 p-10 text-xl" : "max-h-0"}`}>
            <p>{props.description}</p>
        </div>
    </div>
}