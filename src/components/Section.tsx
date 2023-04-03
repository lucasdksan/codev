import { SectionTypes } from "@/types/SectionTypes";

const Section = ({ children }:SectionTypes)=>{
    return(
        <section
            className="w-full h-auto bg-white"
        >
            <div className="max-w-7xl mx-auto my-0 flex flex-row justify-center items-center">
                {
                    children
                }
            </div>
        </section>
    );
}

export default Section;