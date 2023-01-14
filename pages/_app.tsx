import type { AppProps } from "next/app"
import { IBM_Plex_Sans_Arabic, Cairo } from "@next/font/google"
import "../styles/globals.css"
import { motion, useScroll } from "framer-motion"
import Layout from "../Layout/Layout"
import Head from "next/head"
import { useRouter } from "next/router"

const ibm = IBM_Plex_Sans_Arabic({
  weight: ["100", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
})

const cairo = Cairo({
  weight: ["200", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-cairo",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ibm.variable} ${cairo.variable} min-h-[1400px]`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
