import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { Routes } from "../Data/Routes"

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="fixed flex items-center justify-center bottom-2 md:top-2 left-[50%] translate-x-[-50%] text-primary_dark border rounded-[20px] outline-none w-6/12 md:w-3/12 max-h-8">
      {Routes.map((elem, index) => {
        return (
          <Link
            key={index}
            href={elem.href}
            className={`flex first:rounded-l-[20px] last:rounded-r-[20px] justify-center items-center h-full border-r last:border-r-transparent w-full duration-300 cursor-pointer 
            ${router.pathname == `${elem.href}` ? "text-secondary_dark" : ""} `}
          >
            {<elem.icon />}
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar
