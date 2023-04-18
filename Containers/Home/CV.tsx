import React from "react";
import { RxDownload } from "react-icons/rx";
import CustomImage from "../../Components/UI/Cards/CustomImage";
import Heading from "../../Components/UI/Typography/Heading";
import LinkButton from "../../Components/UI/Inputs/LinkButton";

const CV = () => {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-center">
        <Heading
          title=""
          highLightText="who Am I"
          additionalStyles="mx-0 mb-2"
        />

        <p className="text-text_light dark:text-text_dark">
          Hi, I am Yousef Rashad Abu Aisha, Highly motivated software developer
          in Front End development and a strong background in computer science.
          Proficient in a variety of programming languages and frameworks,
          including: JavaScript, TypeScript, and the basics of PHP and JAVA.
          Skilled in designing and implementing solutions for complex problems
          and delivering high-quality software products on time.
        </p>

        <LinkButton
          title="Donwload CV"
          style="mt-4 w-fit h-[48px] p-5 group"
          icon={<RxDownload size={23} className="group-hover:animate-pulse" />}
          href={"/resume.pdf"}
        />
      </div>

      <div className="flex justify-center">
        <CustomImage
          src={"/CV.png"}
          width={500}
          height={500}
          alt="CV Image"
          className="drop-shadow-2xl animate-HorizentalMove z-10 "
        />
      </div>
    </div>
  );
};

export default CV;
