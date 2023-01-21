import React from "react"
import { RxDownload } from "react-icons/rx"
import Button from "../../Components/UI/Button"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"

const CV = () => {
  return (
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
          company first, Every person is looking to build a life on their own
          needs an apartment to live on their own terms,If you are looking to
          start a business in the real estate industry, you need to set up your
          own company first.
        </p>
        <Button
          title="Donwload CV"
          style="mt-4 w-fit h-[48px] p-5 group"
          icon={<RxDownload size={23} className="group-hover:animate-pulse" />}
          hasLink={true}
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
  )
}

export default CV
