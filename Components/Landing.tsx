import React from "react"
import CustomImage from "./UI/CustomImage"
import Heading from "./UI/Heading"

type LandingProps = {
  mainImg: string
  width: number
  height: number
  hasBlurColors: boolean
  decorateImage1?: string
  decorateImage2?: string
  normalHeading: string
  highlightHeading: string
}

const Landing = ({
  mainImg,
  width,
  height,
  hasBlurColors,
  decorateImage1,
  decorateImage2,
  normalHeading,
  highlightHeading,
}: LandingProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen ml-[50%] translate-x-[-50%]  before:opacity-60 before:blur-[1px] before:absolute before:bg-main-pattern before:dark:bg-main-pattern2 before:-z-10 before:w-full before:h-full before:bg-fixed ">
      <div className="container ">
        <div className="relative w-full flex justify-center">
          <CustomImage
            src={mainImg}
            width={width}
            height={height}
            alt="Landing Image"
            className="animate-HorizentalMove z-10 drop-shadow-md"
          />

          {hasBlurColors ? (
            <>
              <span className="absolute top-[15%] left-[15%] w-[20vh] h-[20vh] rounded-full dark:bg-primary blur-[80px]"></span>

              <span className="absolute bottom-[5%] right-[20%] w-[20vh] h-[20vh] rounded-full dark:bg-secondary blur-[80px]"></span>
            </>
          ) : null}
        </div>

        {decorateImage1 ? (
          <CustomImage
            src={decorateImage1}
            width={200}
            height={200}
            alt="Decorate Image "
            className="absolute w-[15vw] lg:bottom-[10%] bottom-[20%] right-[5%] lg:right-[15%] "
          />
        ) : null}

        {decorateImage2 ? (
          <CustomImage
            src={decorateImage2}
            width={200}
            height={200}
            alt="Decorate Image"
            className="absolute w-[15vw] lg:top-[10%] top-[20%] left-[5%] lg:left-[15%] "
          />
        ) : null}

        <div className="mx-auto!">
          <Heading
            title={normalHeading}
            highLightText={highlightHeading}
            additionalStyles="mx-auto text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
