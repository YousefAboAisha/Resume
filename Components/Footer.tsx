import Link from "next/link"
import React from "react"
import { FooterData } from "../Data/FooterData"
import { Social } from "../Data/Social"
import CustomImage from "./UI/CustomImage"
import FooterCard from "./UI/FooterCard"

const Footer = () => {
  return (
    <footer className="relative container grid grid-cols-1 lg:grid-cols-2 mt-24 mb-12 p-8 gap-4 text-text_light dark:text-text_dark bg-background_light dark:bg-background_dark border border-dark rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        {FooterData.map((elem, index) => {
          return (
            <FooterCard
              key={index}
              label={elem.label}
              value={elem.value}
              Icon={elem.icon}
            />
          )
        })}
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <CustomImage
          src="/icon.png"
          width={80}
          height={80}
          alt="Logo"
          className=""
        />

        <div className="flex flex-row gap-4 ">
          {Social.map((elem, index) => {
            return (
              <Link
                key={index}
                href={elem.href}
                target={"_blank"}
                rel={"noreferrer"}
                className="duration-500 hover:bg-primary dark:hover:bg-primary bg-background_light dark:bg-background_dark text-text_light dark:text-text_dark p-3 shadow-lg"
              >
                {<elem.icon size={18} />}
              </Link>
            )
          })}
        </div>
        <h2 className="font-light text-sm">
          All Rights Reserved To Yousef R Abo Aisha ©
        </h2>
      </div>
    </footer>
  )
}

export default Footer
