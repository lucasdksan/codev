import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";

import firstBanner from "../assets/firstImage.svg";
import AlertLine from "@/components/AlertLine";
import GreenBtn from "@/components/GreenBtn";
import FlagBrazil from "@/components/FlagBrazil";
import WhiteBox from "@/components/WhiteBox";
import DataElement from "@/components/DataElement";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-auto mt-32">
        <Section>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-col items-start w-1/3">
              <AlertLine />
              <h1 className="font-sans not-italic font-bold text-5xl text-df-graphite mb-5">Together we fight COVID-19</h1>
              <p className="font-sans not-italic font-normal text-xl text-df-grayRGBA mb-5">Seque empowers you to get more done with intense focus and zero interruptions.Seque empowers you to get more done with intense focus and zero interruptions.</p>
              <GreenBtn
                name="Let us help"
              />
            </div>
            <div>
              <Image
                src={firstBanner}
                alt="Image main Banner"
              />
            </div>
          </div>
        </Section>
        <Section>
          <WhiteBox 
            height="230px"
            width="100%"
          >
            <div className="w-full flex flex-row items-center justify-center gap-14 mb-5">
              <DataElement 
                name="Total Cases"
                subValue="+2,584"
                type="normal"
                value="492,667"
              />
              <DataElement 
                name="Active Cases"
                subValue="18% from total cases"
                type="normal"
                value="492,667"
              />
              <DataElement 
                name="Recovered"
                subValue="55% from total cases"
                type="green"
                value="492,667"
              />
              <DataElement 
                name="Deaths"
                subValue="20% from total Cases"
                type="red"
                value="492,667"
              />
            </div>
            <FlagBrazil />
          </WhiteBox>
        </Section>
      </main>
    </>
  )
}
