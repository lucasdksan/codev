import Image from "next/image";
import alertIcon from "../assets/Alert.svg";

const AlertLine = ()=>{
    return(
        <div className="flex flex-row items-center justify-center gap-1 mb-3">
            <Image 
                src={alertIcon}
                alt="Alert Icon"
            />
            <span className="font-sans not-italic font-medium text-lg text-red-600">COVID-19 ALERT</span>
        </div>
    );
}

export default AlertLine;