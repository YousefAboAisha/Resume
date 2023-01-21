import Link from "next/link"

type ButtonProps = {
  title: string
  style?: string
  icon?: JSX.Element
  hasLink: boolean
} & React.ComponentProps<"button">

const Button = ({ title, icon, hasLink, style, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`relative uppercase bg-primary_dark text-white w-full py-[10px] outline-none flex justify-center gap-3 items-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer transition shadow-sm rounded-sm ${style} rounded-md border-transparent border-[1px] hover:bg-primary_light hover:border-[1px] duration-500`}
    >
      {hasLink ? (
        <Link
          href={"/resume.pdf"}
          className="flex flex-row gap-2 items-center font-secondary"
          download
          target={"_blank"}
        >
          {title} {icon}
        </Link>
      ) : (
        <span className="flex flex-row gap-2 items-center font-secondary">
          {title} {icon}
        </span>
      )}
    </button>
  )
}

export default Button
