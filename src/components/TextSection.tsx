import { TextSectionTypes } from "@/types/TextSectionTypes";

const TextSection = ({ text }:TextSectionTypes)=>{
    return(
        <p className="font-sans not-italic font-medium text-xl text-center text-df-gray">{text}</p>
    );
}

export default TextSection;