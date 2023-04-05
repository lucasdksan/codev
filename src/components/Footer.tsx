"use client"

import Image from "next/image";

import iconBtnTop from "../assets/iconBtnTop.svg";

const Footer = ()=>{
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return(
        <footer className="w-full h-auto bg-df-green py-5">
            <div className="max-w-7xl mx-auto my-0 flex flex-row justify-between items-center">
                <span className="font-sans not-italic font-medium text-lg text-white">
                    © 2021, Design & Developed by Atik Gohel and Lucas da Silva Leoncio.
                </span>
                <button
                    onClick={scrollToTop}
                    className="flex flex-row gap-2 items-center justify-center"
                >
                    <Image 
                        src={iconBtnTop}
                        alt="Icon button top"
                        className="-mt-1"
                    />
                    <span className="font-sans not-italic font-medium text-lg text-white">Back to Top</span>
                </button>
            </div>
        </footer>
    );
}

export default Footer;