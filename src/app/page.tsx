import Image from "next/image";

import Header from "@/components/Header";
import Section from "@/components/Section";
import AlertLine from "@/components/AlertLine";
import GreenBtn from "@/components/GreenBtn";
import FlagBrazil from "@/components/FlagBrazil";
import WhiteBox from "@/components/WhiteBox";
import DataElement from "@/components/DataElement";
import Title from "@/components/Title";
import TextSection from "@/components/TextSection";
import ListElement from "@/components/ListElement";
import DescriptionCard from "@/components/DescriptionCard";
import Footer from "@/components/Footer";

import firstBanner from "../assets/firstImage.svg";
import secondBanner from "../assets/SecondImage.svg";
import familyIcon from "../assets/Family.svg";
import cleanHand from "../assets/ClearHand.png";
import distPerson from "../assets/Dist.png";
import lastBanner from "../assets/LastImage.png";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-auto mt-32">
        <Section id="bannerHome">
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
        <Section id="dataBlock">
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
        <Section id="whatWeDoBlock">
          <div className="w-full justify-between flex items-center py-9">
            <div className="w-1/2">
              <Image
                src={secondBanner}
                alt="Second Banner in Page"
              />
            </div>
            <div className="flex flex-col items-start w-1/2 gap-5 max-w-lg">
              <Title
                title="What we do?"
              />
              <TextSection
                text="Covid 19 positive or Pneumonitis patient will be treated at home as per doctor order by GNC certified nursing staff."
              />
              <ul className="flex flex-col w-full items-start">
                <ListElement
                  text="Facilities of blood sugar"
                />
                <ListElement
                  text="B.P.  Measurement"
                />
                <ListElement
                  text="Spo2 Measurement"
                />
                <ListElement
                  text="Ryle's tube insertion"
                />
                <ListElement
                  text="Catheterisation"
                />
                <ListElement
                  text="Dressing facilities are available 24*7"
                />
              </ul>
            </div>
          </div>
        </Section>
        <Section id="preventionBlock">
          <div className="flex flex-col items-center justify-center gap-8">
            <Title 
              title="Prevention"
            />
            <TextSection 
              text="Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority."
            />
            <div className="flex flex-row w-full justify-between items-center mt-14">
              <WhiteBox
                height="330px"
                width="330px"
              >
                <Image 
                  src={familyIcon}
                  alt="Icon family"
                  className="mb-5 -mt-16"
                />
                <DescriptionCard
                  title="Wear a mask"
                  text="Masks can help prevent the spread of the virus from the person wearing the mask to others."
                />
              </WhiteBox>
              <WhiteBox
                height="330px"
                width="330px"
              >
                <Image 
                  src={cleanHand}
                  alt="Icon Clean Hand"
                  className="mb-5 -mt-16"
                />
                <DescriptionCard
                  title="Wash your hands often"
                  text="Clean your hands with soop and water, or alcohol-based hand sanitizer."
                />
              </WhiteBox>
              <WhiteBox
                height="330px"
                width="330px"
              >
                <Image 
                  src={distPerson}
                  alt="Icon Clean Hand"
                  className="mb-5 -mt-16"
                />
                <DescriptionCard
                  title="Physical distancing"
                  text="Maintain a safe distance especially from anyone who is coughinf or sneezing."
                />
              </WhiteBox>
            </div>
          </div>
        </Section>
        <Section id="symptomsBlock">
          <div className="flex flex-col justify-between items-center gap-5">
            <Title 
              title="Symptoms"
            />
            <div className="max-w-4xl">
              <TextSection 
                text="COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
              />
            </div>
            <Image 
              src={lastBanner}
              alt="Last Banner Page"
              className="mt-5 h-96 w-auto"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
