import React from "react"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mt-6 lg:mt-16 ">
      <div className="relative w-full flex justify-center">
        <CustomImage
          src={"/contact.png"}
          width={420}
          height={400}
          alt="About Image"
          className="animate-HorizentalMove z-10 "
        />

        <span className="absolute top-[5%] left-[10%] w-[25vh] h-[25vh] rounded-full bg-primary blur-[100px] mix-blend-plus-lighter"></span>

        <span className="absolute bottom-[5%] right-[10%] w-[25vh] h-[25vh] rounded-full bg-secondary blur-[100px] mix-blend-plus-lighter"></span>
      </div>

      <Heading
        title="Having An Idea"
        highLightText="Contact Me."
        additionalStyles="mt-4"
      />
    </div>
  )
}

export default Landing
