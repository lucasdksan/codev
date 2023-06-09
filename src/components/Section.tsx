import { SectionTypes } from "@/types/SectionTypes";

const Section = ({ children, id }:SectionTypes)=>{
    return(
        <section
            id={id}
            className="w-full h-auto bg-white mb-6"
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