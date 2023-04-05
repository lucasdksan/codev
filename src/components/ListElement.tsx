import { ListElementTypes } from "@/types/ListElementTypes";
import Image from "next/image";

import covidIcon from "../assets/virus.svg";

const ListElement = ({ text }:ListElementTypes)=>{
    return(
        <li className="flex flex-row items-center justify-center gap-5 my-1">
            <Image 
                src={covidIcon}
                alt="Covid Icon"
            />
            <p className="font-sans not-italic font-medium text-xl tracking-wide text-df-subgray">{text}</p>
        </li>
    );
}

export default ListElement;