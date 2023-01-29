import React from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Socialbar from "../Components/Socialbar"
import ThemeToggler from "../Components/ThemeToggler"
import Snackbar from "../Components/UI/Snackbar"
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
      <main className="container">{children}</main>
      <Socialbar />
      <Footer />
    </>
  )
}

export default Layout
