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
      <body>
        <main className="container bg-transparent">{children}</main>
      </body>
      <Socialbar />
    </>
  )
}

export default Layout
