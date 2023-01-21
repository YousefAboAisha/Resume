type InputProps = {
  value: string
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  style?: string
  icon?: JSX.Element
} & React.ComponentProps<"input">

const Input = ({ value, placeholder, style, icon, ...rest }: InputProps) => {
  return (
    <div className="relative">
      <div className="absolute flex justify-center p-2 rounded-l-md items-center left-1 top-[50%] translate-y-[-50%] h-full border-none outline-none">
        {icon}
      </div>

      <input
        value={value}
        {...rest}
        className={`h-[56px] pl-10 border rounded-[8px] outline-none duration-300 w-full focus:invalid:bg- focus:valid:border-primary_dark focus:border-primary_dark
      disabled:cursor-not-allowed bg-transparent ${style}`}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default Input
