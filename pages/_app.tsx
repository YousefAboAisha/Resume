import type { AppProps } from "next/app"
import {
  IBM_Plex_Sans_Arabic,
  Cairo,
  Open_Sans,
  Roboto,
} from "@next/font/google"
import "../styles/globals.css"
import Layout from "../Layout/Layout"
import Head from "next/head"
import useCurrentRoute from "../Hooks/useCurrentRoute"
import { ThemeProvider, useTheme } from "next-themes"

// const ibm = IBM_Plex_Sans_Arabic({
//   weight: ["100", "400", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--font-ibm",
//   display: "swap",
// })

const roboto = Roboto({
  weight: ["100", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

// const cairo = Cairo({
//   weight: ["200", "400", "500"],
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--font-cairo",
//   display: "swap",
// })

const OpenSans = Open_Sans({
  weight: ["300", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  const Title = useCurrentRoute()
  const { theme } = useTheme()

  return (
    <div
      className={`${theme} ${OpenSans.variable} ${roboto.variable} min-h-[1000px]`}
    >
      <Head>
        <title>{Title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
