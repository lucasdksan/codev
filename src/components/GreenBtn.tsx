import { GreenBtnTypes } from "@/types/GreenBtnTypes";

const GreenBtn = ({ name, onClick }:GreenBtnTypes)=>{
    return(
        <button
            onClick={onClick}
            className="text-white bg-df-green rounded-3xl h-12 w-48 flex items-center justify-center font-sans not-italic font-medium text-2xl"
        >{name}</button>
    );
}

export default GreenBtn;