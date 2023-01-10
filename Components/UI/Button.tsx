type ButtonProps = {
  title: string
  style?: string
} & React.ComponentProps<"button">

const Button = ({ title, style, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`capitalize bg-primary_dark text-white w-full py-[10px] outline-none flex justify-center gap-3 items-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer transition shadow-sm rounded-sm ${style}`}
    >
      {title}
    </button>
  )
}

export default Button
