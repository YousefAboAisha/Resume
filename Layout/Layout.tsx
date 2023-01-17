import React from "react"
import Navbar from "../Components/Navbar"
import Socialbar from "../Components/Socialbar"
import Spinner from "../Components/UI/Spinner"
import useLoading from "../Hooks/useLoading"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const loading = useLoading()

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Socialbar />
    </>
  )
}

export default Layout
