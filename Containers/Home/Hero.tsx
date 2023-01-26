import React from "react"
import Heading from "../../Components/UI/Heading"

const Hero = () => {
  return (
    <div className="section bg-hero-pattern w-full h-[40vh] bg-fixed lg:bg-cover bg-center rounded-lg flex flex-col justify-center p-5">
      <Heading
        title="Future is yours!"
        details="Technology is not just about machines, it's about service."
        additionalStyles="text-text_dark"
      />
    </div>
  )
}

export default Hero
