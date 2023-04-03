import { WhiteBoxTypes } from "@/types/WhiteBoxTypes";

const WhiteBox = ({ children, height, width }:WhiteBoxTypes)=>{
    return(
        <div 
            className="bg-white rounded-3xl shadow-df-shadow flex flex-col items-center justify-center p-5"
            style={{
                height: height,
                width: width
            }}
        >
            {
                children
            }
        </div>
    );
}

export default WhiteBox;