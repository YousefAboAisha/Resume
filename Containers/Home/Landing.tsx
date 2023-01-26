import React from "react"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center items-center ">
      <div className="relative w-full flex justify-center">
        <CustomImage
          src={"/landing.png"}
          width={450}
          height={450}
          alt="Computer Image"
          className="animate-HorizentalMove z-10 drop-shadow-md"
        />

        <span className="absolute top-[10%] left-[5%] w-[25vh] h-[25vh] rounded-full bg-primary blur-[80px]"></span>

        <span className="absolute bottom-[5%] right-[10%] w-[25vh] h-[25vh] rounded-full bg-secondary blur-[80px]"></span>
      </div>

      <CustomImage
        src={"/rocket.png"}
        width={250}
        height={250}
        alt="Rocket Image"
        className="absolute w-[20vw] lg:bottom-[10%] bottom-[20%] right-[0] lg:right-[5%] "
      />

      <CustomImage
        src={"/message.png"}
        width={200}
        height={200}
        alt="Message Image"
        className="absolute w-[15vw] lg:top-[10%] top-[15%] -left-[5%] lg:left-[5%] "
      />

      <Heading
        title="wellcome to my"
        highLightText="Portfolio"
        additionalStyles="mt-4"
      />
    </div>
  )
}

export default Landing
