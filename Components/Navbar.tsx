import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Routes } from "../Data/Routes"

const Navbar = () => {
  const router = useRouter()
  const [Style, setStyle] = useState("")

  const path = router.pathname

  const setTransform = () => {
    switch (path) {
      case "/":
        setStyle("left-[12%]")
        break

      case "/about":
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

  return (
    <div className="fixed flex items-center justify-center bottom-2 md:top-2 left-[50%] translate-x-[-50%] text-primary_dark border rounded-[20px] outline-none w-6/12 md:w-3/12 h-8">
      {Routes.map((elem, index) => {
        return (
          <Link
            key={index}
            href={elem.href}
            className={`flex peer/${
              elem.title
            } first:rounded-l-[20px] border-r last:rounded-r-[20px] last-of-type:border-r-0 justify-center items-center h-full  w-full duration-300 cursor-pointer 
            ${router.pathname == `${elem.href}` ? "text-secondary_dark" : ""} `}
          >
            {<elem.icon />}
          </Link>
        )
      })}
      <span
        className={`${Style} absolute left-[12%] top-[78%] -z-10 h-[2px] w-[9.2%] origin-center rounded-full bg-secondary_dark transition-all duration-300 `}
      ></span>
    </div>
  )
}

export default Navbar
