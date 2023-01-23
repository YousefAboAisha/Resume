import React from "react"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mt-6 lg:mt-16 ">
      <div className="relative w-full flex justify-center">
        <CustomImage
          src={"/ai.png"}
          width={450}
          height={450}
          alt="About Image"
          className="drop-shadow-2xl animate-HorizentalMove z-10 "
        />

        <span className="absolute top-[5%] left-[10%] w-[25vh] h-[25vh] rounded-full bg-primary_dark blur-[100px] mix-blend-plus-lighter"></span>

        <span className="absolute bottom-[5%] right-[10%] w-[25vh] h-[25vh] rounded-full bg-secondary_light blur-[100px] mix-blend-plus-lighter"></span>
      </div>

      <Heading
        title="Watch my Recent"
        highLightText=" projects"
        additionalStyles="mt-4"
      />
    </div>
  )
}

export default Landing