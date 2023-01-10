type InputProps = {
  value: string
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  style?: string
} & React.ComponentProps<"input">

const Input = ({ value, placeholder, style, ...rest }: InputProps) => {
  return (
    <input
      value={value}
      {...rest}
      className={`h-[56px] px-3 border rounded-[8px] outline-none duration-300 bg-[#F5F5F5] w-full focus:invalid:bg-[#ffb6b68c] focus:invalid:border-red-500 focus:valid:border-green-500 disabled:cursor-not-allowed ${style}`}
      placeholder={placeholder}
    />
  )
}

export default Input
