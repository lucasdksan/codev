import { DescriptionCardTypes } from "@/types/DescriptionCardTypes";

const DescriptionCard = ({ text, title }: DescriptionCardTypes)=>{
    return(
        <div>
            <h3 
                className="font-sans not-italic font-semibold text-xl text-df-graphite text-center mb-2.5"
            >{title}</h3>
            <p
                className="font-sans not-italic font-medium text-sm text-df-gray"
            >{text}</p>
        </div>
    );
}

export default DescriptionCard;