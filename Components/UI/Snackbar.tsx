import React, { useEffect, useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Snackbar = () => {
  const [IsActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)

    setTimeout(() => {
      setIsActive(false)
    }, 3000)

    return () => {
      setIsActive(false)
    }
  }, [])

  console.log(IsActive)

  return (
    <div
      className={`fixed flex flex-row gap-2 items-center z-50 bg-primary p-2 px-2 rounded-md min-w-[20%] text-md shadow-lg top-3 ${
        IsActive ? "left-3 duration-1000" : "-left-[100%] duration-1000"
      }`}
    >
      <IoMdCheckmarkCircleOutline size={23} />
      <span className="font-secondary">This is message</span>
    </div>
  )
}

export default Snackbar
