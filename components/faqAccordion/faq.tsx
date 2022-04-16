import {useState} from "react";

export type FaqProps = {
    title: string;
    description: string;
}

export default function FaqComponent(props: FaqProps){

    const [expanded, setExpanded] = useState(false);

    return <div onClick={() => setExpanded(!expanded)} className=" hover:bg-[#9beea6] border-b-[.5px] border-[#030303] text-center flex flex-col p-3 border-b cursor-pointer">
        <div className="flex flex-row items-center ">
            <p className={`flex-auto  font-medium text-light ${expanded ? "text-gray-dark p-5 " : "font-normal"}`}>{props.title}</p>
            <img className="flex-none w-3" src="/images/icon-arrow-down.svg" alt="arrow down"/>
        </div>
        <div className={` transition-max-height duration-700 ease-in-out overflow-hidden w-3/6 text-left text-light text-xs ${expanded ? "max-h-50 p-10 text-xs" : "max-h-0"}`}>
            <p>{props.description}</p>
        </div>
    </div>
}