import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative dark:before:blur-sm before:blur-[9px] before:absolute before:bg-background_light before:dark:bg-background_dark before:z-0 before:w-full before:h-full before:bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
