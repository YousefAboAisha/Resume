type HeadingProps = {
  title: string
  additionalStyles?: string
  highLightText?: string
  details?: string
}

const Heading = ({
  title,
  additionalStyles,
  highLightText,
  details,
}: HeadingProps) => {
  return (
    <h2
      className={`group z-10 text-5xl font-semibold duration-500 uppercase ${additionalStyles} `}
    >
      {title}
      <div className="relative w-fit before:absolute before:left-0 before:h-2/5 before:backdrop:blur-md before:bottom-0 before:rounded-sm before:bg-primary before:w-4/12 group-hover:before:w-8/12 duration-500 before:duration-500 before:mix-blend-plus-lighter">
        {highLightText}
      </div>
      {details ? (
        <p className="text-lg font-normal mt-1 w-11/12 lg:w-6/12">{details}</p>
      ) : null}
    </h2>
  )
}

export default Heading
