import Image from "next/image";

import flagBrazil from "../assets/brazilFlag.png";

const FlagBrazil = ()=>{
    return(
        <div className="flex flex-row items-center justify-center gap-5">
            <Image 
                className="w-8 h-6"
                src={flagBrazil}
                alt="Flag Brazil Icon"
            />
            <span className="font-sans not-italic font-normal text-lg text-df-gray">Brazil | Last update: Abril 03, 2023</span>
        </div>
    );
}

export default FlagBrazil;