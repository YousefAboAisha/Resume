import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Routes } from "../Data/Routes"
import { useScrollDirection } from "../Hooks/useScrollDirection"

const Navbar = () => {
  const router = useRouter()
  const [Style, setStyle] = useState("")
  const path = router.pathname
  const scrollDirection = useScrollDirection()

  const setTransform = () => {
    switch (path) {
      case "/":
        setStyle("left-[12%]")
        break

      case "/projects":
        setStyle("left-[45%]")
        break

      case "/contact":
        setStyle("left-[79%]")
        break
    }
  }

  useEffect(() => {
    setTransform()
  }, [path])

  console.log(scrollDirection)

  return (
    <div
      className={`fixed ${
        scrollDirection === "down" ? "lg:-top-12" : "lg:top-4"
      } flex items-center justify-center bottom-2 left-[50%] translate-x-[-50%] text-white outline-none 
      w-6/12 md:w-3/12 h-12 rounded-3xl duration-500 bg-secondary_dark  shadow-md z-50`}
    >
      {Routes.map((elem, index) => {
        return (
          <Link
            key={index}
            href={elem.href}
            className={`flex peer/${
              elem.title
            } border-r border-[#dddddd44] last-of-type:border-r-0 justify-center items-center h-full w-full duration-300 cursor-pointer 
            ${router.pathname == `${elem.href}` ? "text-primary_dark" : ""} `}
            title={elem.title}
          >
            {<elem.icon size={25} />}
          </Link>
        )
      })}
      <span
        className={`${Style} absolute left-[12%] top-[83%] -z-10 h-[2px] w-[9.2%] origin-center rounded-full bg-primary_dark transition-all duration-500 outline-none`}
      ></span>
    </div>
  )
}

export default Navbar
