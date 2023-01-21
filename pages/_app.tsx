import type { AppProps } from "next/app"
import { IBM_Plex_Sans_Arabic, Cairo, Open_Sans } from "@next/font/google"
import "../styles/globals.css"
import Layout from "../Layout/Layout"

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

const OpenSans = Open_Sans({
  weight: ["300", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${OpenSans.variable} ${cairo.variable} min-h-[1400px]`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
