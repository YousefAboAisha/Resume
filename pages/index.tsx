import Head from "next/head"
import Image from "next/image"
import Button from "../Components/UI/Button"
import Heading from "../Components/UI/Heading"
import SkillCard from "../Components/UI/SkillCard"
import { Skills } from "../Data/Skills"
import { RxDownload } from "react-icons/rx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chalet | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="container mb-24">
        <div className="relative flex flex-col justify-center items-center mt-6 lg:mt-16 ">
          <div className="relative w-full flex justify-center">
            <Image
              src={"/landing.png"}
              width={450}
              height={450}
              alt="Computer Image"
              className="drop-shadow-2xl animate-HorizentalMove z-10"
            />

            <span className="absolute top-[10%] left-[5%] w-[25vh] h-[25vh] rounded-full bg-primary_dark blur-[100px] mix-blend-plus-lighter"></span>

            <span className="absolute bottom-[10%] right-[5%] w-[25vh] h-[25vh] rounded-full bg-secondary_dark blur-[100px] mix-blend-plus-lighter"></span>
          </div>

          <Heading title="wellcome to my" highLightText="Portfolio" />
        </div>

        <div className="section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Skills.map((elem, index) => {
            return <SkillCard key={index} icon={elem.icon} title={elem.title} />
          })}
        </div>

        <div className="section grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col items-start justify-center">
            <Heading
              title=""
              highLightText="who Am I"
              additionalStyles="mx-0 mb-4"
            />

            <p>
              Every person is looking to build a life on their own needs an
              apartment to live on their own terms,If you are looking to start a
              business in the real estate industry, you need to set up your own
              company first, Every person is looking to build a life on their
              own needs an apartment to live on their own terms,If you are
              looking to start a business in the real estate industry, you need
              to set up your own company first.
            </p>
            <Button
              title="Donwload CV"
              style="mt-4 w-fit h-[48px] p-5"
              icon={<RxDownload size={22} />}
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={"/CV.png"}
              width={500}
              height={500}
              alt="CV Image"
              className="drop-shadow-2xl animate-HorizentalMove z-10"
            />
          </div>
        </div>
      </main>
    </>
  )
}
