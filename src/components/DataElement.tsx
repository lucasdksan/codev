import { DataElementTypes } from "@/types/DataElementTypes";

const DataElement = ({ name, subValue, value, type }:DataElementTypes)=>{
    const switchValue = ()=>{
        if(type === "green"){
            return(
                <strong className="font-sans not-italic font-semibold text-3xl text-center text-df-green-clear">{value}</strong>
            );
        } else if(type === "red"){
            return(
                <strong className="font-sans not-italic font-semibold text-3xl text-center text-df-red">{value}</strong>
            );
        } else {
            return (
                <strong className="font-sans not-italic font-semibold text-3xl text-center text-df-gray1">{value}</strong>
            );
        }
    }
    return(
        <div className="flex flex-col items-center justify-center gap-2.5">
            <span className="font-sans not-italic font-medium text-xl text-center text-df-subgray">{name}</span>
            {switchValue()}
            <span className="font-sans not-italic font-medium text-lg text-center text-df-gray">{subValue}</span>
        </div>
    );
}

export default DataElement;