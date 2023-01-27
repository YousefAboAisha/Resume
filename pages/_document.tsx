import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative dark:before:blur-sm before:blur-[7px] before:absolute before:bg-main-pattern before:dark:bg-main-pattern2 before:z-0 before:w-full before:h-full before:bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
