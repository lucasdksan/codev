"use client"

import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Image from "next/image";

import logo from "../assets/codev.png";

const Header = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [value, setValue] = useState(0);

    const bannerHomeProps = document.querySelector("#bannerHome")?.getBoundingClientRect();
    const dataBlock = document.querySelector("#dataBlock")?.getBoundingClientRect();
    const whatWeDoBlock = document.querySelector("#whatWeDoBlock")?.getBoundingClientRect();
    const preventionBlock = document.querySelector("#preventionBlock")?.getBoundingClientRect();
    const symptomsBlock = document.querySelector("#symptomsBlock")?.getBoundingClientRect();
    const footerBlock = document.querySelector("footer")?.getBoundingClientRect();

    const bannerTop = bannerHomeProps?.top || 0;
    const dataTop = dataBlock?.top || 0;
    const whatWeDoTop = whatWeDoBlock?.top || 0;
    const preventionTop = preventionBlock?.top || 0;
    const symptomsTop = symptomsBlock?.top || 0;
    const footerTop = footerBlock?.top || 0;

    useEffect(() => {
        setValue(pageYOffset);
    }, [pageYOffset]);

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
                            <li className="flex flex-col items-center justify-center cursor-pointer">
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Home</span>
                                {
                                    (value >= 0 && value < whatWeDoTop)&&
                                    <em className="w-1 h-1 bg-df-green rounded-full"></em>
                                }
                                {
                                    !(value >= 0 && value < whatWeDoTop)&&
                                    <em className="w-1 h-1 bg-transparent rounded-full"></em>
                                }
                            </li>
                            <li className="flex flex-col items-center justify-center cursor-pointer">
                                <span className="font-sans not-italic font-normal text-lg text-df-green">What we do?</span>
                                {
                                    (value > dataTop && value < preventionTop)&&
                                    <em className="w-1 h-1 bg-df-green rounded-full"></em>
                                }
                                {
                                    !(value > dataTop && value < preventionTop)&&
                                    <em className="w-1 h-1 bg-transparent rounded-full"></em>
                                }
                            </li>
                            <li className="flex flex-col items-center justify-center cursor-pointer">
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Prevention</span>
                                {
                                    (value > whatWeDoTop && value < symptomsTop)&&
                                    <em className="w-1 h-1 bg-df-green rounded-full"></em>
                                }
                                {
                                    !(value > whatWeDoTop && value < symptomsTop)&&
                                    <em className="w-1 h-1 bg-transparent rounded-full"></em>
                                }
                            </li>
                            <li className="flex flex-col items-center justify-center cursor-pointer">
                                <span className="font-sans not-italic font-normal text-lg text-df-green">Symptoms</span>
                                {
                                    (value > preventionTop && value < footerTop*2)&&
                                    <em className="w-1 h-1 bg-df-green rounded-full"></em>
                                }
                                {
                                    !(value > preventionTop && value < footerTop*2)&&
                                    <em className="w-1 h-1 bg-transparent rounded-full"></em>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;