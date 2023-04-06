"use client"

import Image from "next/image";

import logo from "../assets/codev.png";
import navigationPage from "@/libs/NavigationPage";

const Header = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 w-100 h-32 py-6 bg-white"
        >
            <div 
                className="max-w-7xl mx-auto my-0 flex flex-row justify-between items-center h-full"
            >
                <div 
                    className="flex flex-row justify-between items-center"
                >
                    <Image
                        src={logo}
                        alt="Logo Image"
                        width={130}
                        height={60}
                    />
                </div>
                <div>
                    <nav>
                        <ul
                            className="flex gap-x-6"
                        >
                            <li 
                                onClick={()=>navigationPage("bannerHome")}
                                className="flex flex-col items-center justify-center cursor-pointer"
                            >
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Home</span>
                            </li>
                            <li 
                                onClick={()=>navigationPage("whatWeDoBlock")}
                                className="flex flex-col items-center justify-center cursor-pointer"
                            >
                                <span className="font-sans not-italic font-normal text-lg text-df-green">What we do?</span>
                            </li>
                            <li 
                                onClick={()=>navigationPage("preventionBlock")}
                                className="flex flex-col items-center justify-center cursor-pointer"
                            >
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Prevention</span>
                            </li>
                            <li 
                                onClick={()=>navigationPage("symptomsBlock")}
                                className="flex flex-col items-center justify-center cursor-pointer"
                            >
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Symptoms</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;