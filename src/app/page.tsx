import DescriptionCard from "@/components/DescriptionCard";
import GreenBtn from "@/components/GreenBtn";
import Header from "@/components/Header";
import ListElement from "@/components/ListElement";
import TextSection from "@/components/TextSection";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";

export default function Home() {
  return (
    <>
      <Title title="Apenas um teste"/>
      <TextSection 
        text="Apenas um texto"
      />
      <ul>
        <ListElement 
          text="Apenas um teste"
        />
        <ListElement 
          text="Apenas um teste"
        />
        <ListElement 
          text="Apenas um teste"
        />
        <ListElement 
          text="Apenas um teste"
        />
      </ul>
      <GreenBtn 
        name="Lucas"
      />
      <WhiteBox
        height={330}
        width={330}
      >
        <DescriptionCard
          title="Wear a mask"
          text="Masks can help prevent the spread of the virus from the person wearing the mask to others."
        />
      </WhiteBox>
    </>
  )
}
