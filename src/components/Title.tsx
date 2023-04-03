import { TitleTypes } from "@/types/TitleTypes";

const Title = ({ title }: TitleTypes)=>{
    return(
        <div 
            className="flex flex-col justify-center items-center gap-1.5 mb-3.5"
        >
            <h2 
                className="font-sans not-italic font-semibold text-4xl text-df-graphite tracking-wide m-0"
            >{title}</h2>
            <span className="w-28 h-1 border-b-4 border-df-green"></span>
        </div>
    );
}

export default Title;