type TextAreaProps = {
  value: string
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  style?: string
} & React.ComponentProps<"textarea">

const TextArea = ({ value, placeholder, style, ...rest }: TextAreaProps) => {
  return (
    <textarea
      value={value}
      {...rest}
      className={`px-3 pt-3 border rounded-[8px] outline-none duration-300 w-full focus:valid:border-primary focus:border-primary
      disabled:cursor-not-allowed bg-transparent resize-none ${style}`}
      placeholder={placeholder}
      rows={5}
    ></textarea>
  )
}

export default TextArea
