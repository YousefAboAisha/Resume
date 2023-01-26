import React from "react"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative w-full flex justify-center">
        <CustomImage
          src={"/contact.png"}
          width={420}
          height={400}
          alt="About Image"
          className="animate-HorizentalMove z-10 drop-shadow-md"
        />
        {/* 
        <span className="absolute top-[5%] left-[15%] w-[50vh] h-[50vh] rounded-full bg-primary blur-[150px] "></span>

        <span className="absolute bottom-[5%] right-[15%] w-[50vh] h-[50vh] rounded-full bg-secondary blur-[150px]"></span> */}
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
