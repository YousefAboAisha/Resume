import Image from "next/image"

type ProjectCardProps = {
  src?: string
  alt?: string | "alt"
  title?: string
}

const ProjectCard = ({ src, alt, title }: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col bg-secondary_dark rounded-md shadow-lg">
      <div className="w-full">
        <Image
          src={"/notFound.jpg"}
          width={200}
          height={200}
          alt={"alt"}
          className="w-full rounded-t-md"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl">This is title</h2>
      </div>
    </div>
  )
}

export default ProjectCard
