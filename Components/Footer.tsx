import Link from "next/link";
import React from "react";
import { FooterData } from "../Data/FooterData";
import { Social } from "../Data/Social";
import CustomImage from "./UI/Cards/CustomImage";
import FooterCard from "./UI/Cards/FooterCard";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="relative full-theme container grid grid-cols-1 lg:grid-cols-2 mt-24 mb-12 p-6 gap-4 rounded-lg shadow-lg">
      <div className="flex flex-col gap-6">
        {FooterData.map((elem, index) => {
          return (
            <FooterCard
              key={index}
              label={elem.label}
              value={elem.value}
              Icon={elem.icon}
            />
          );
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
                className="bg-background_light dark:bg-background_dark text-text_light dark:text-text_dark p-3 shadow-lg rounded-md border border-transparent hover:border-light dark:hover:border-dark duration-500 "
              >
                {<elem.icon size={19} />}
              </Link>
            );
          })}
        </div>
        <h2 className="text-[15px] mt-2 font-secondary">
          All Rights Reserved To Yousef R Abo Aisha © {date}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
