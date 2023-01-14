import React from "react"
import Navbar from "../Components/Navbar"
import Socialbar from "../Components/Socialbar"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Socialbar />
    </>
  )
}

export default Layout
