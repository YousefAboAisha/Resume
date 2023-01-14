import Image from "next/image"
import React from "react"

const contact = () => {
  return (
    <main className="container">
      <div className="relative flex flex-col justify-center items-center mt-8 ">
        <Image src={"/3d.png"} width={300} height={300} alt="image" />
        <h2>This is Personal Resume</h2>
      </div>
    </main>
  )
}

export default contact
