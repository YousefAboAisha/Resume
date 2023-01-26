import React from "react"
import Navbar from "../Components/Navbar"
import Socialbar from "../Components/Socialbar"
import ThemeToggler from "../Components/ThemeToggler"
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
      <ThemeToggler />
      <Navbar />
      <main className="container mt-6 lg:mt-16">{children}</main>
      <Socialbar />
    </>
  )
}

export default Layout
