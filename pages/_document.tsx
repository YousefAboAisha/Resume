import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative before:blur-sm before:absolute before:bg-main-pattern bg-blend-saturation before:backdrop-blur-[5px] before:dark:bg-main-pattern2 before:dark:backdrop-blur-[1px] before:z-0 before:w-full before:h-full  before:bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
