type HeadingProps = {
  title: string
  additionalStyles?: string
  highLightText?: string
}

const Heading = ({ title, additionalStyles, highLightText }: HeadingProps) => {
  return (
    <h2
      className={`group z-10 text-5xl font-semibold ${additionalStyles} duration-500 uppercase`}
    >
      {title}
      <div className="relative w-fit before:absolute before:left-0 before:h-2/5 before:backdrop:blur-md before:bottom-0 before:rounded-sm before:bg-primary_dark before:blur-none before:w-4/12 group-hover:before:w-8/12 duration-500 before:duration-500 before:mix-blend-plus-lighter">
        {highLightText}
      </div>
    </h2>
  )
}

export default Heading
