import type { AppProps } from "next/app"
import { IBM_Plex_Sans_Arabic, Cairo } from "@next/font/google"
import "../styles/globals.css"
import Navbar from "../Components/Navbar"

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
    <div
      className={`relative min-h-[1400px] ${ibm.variable} ${cairo.variable} `}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
