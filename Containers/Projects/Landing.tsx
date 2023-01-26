import React from "react"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative w-full flex justify-center">
        <CustomImage
          src={"/projects.png"}
          width={550}
          height={550}
          alt="About Image"
          className="animate-HorizentalMove z-10 drop-shadow-md"
        />
        {/* <span className="absolute top-[5%] left-[15%] w-[50vh] h-[50vh] rounded-full bg-primary blur-[200px] "></span>

        <span className="absolute bottom-[5%] right-[15%] w-[50vh] h-[50vh] rounded-full bg-secondary blur-[200px]"></span> */}
      </div>

      <Heading
        title="Watch my Recent"
        highLightText="projects"
        additionalStyles="mt-4"
      />
    </div>
  )
}

export default Landing
