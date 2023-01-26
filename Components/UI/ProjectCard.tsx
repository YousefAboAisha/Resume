import Image, { StaticImageData } from "next/image"
import { FaEye, FaGithub } from "react-icons/fa"
import CustomImage from "./CustomImage"
import LinkButton from "./LinkButton"
import Tag from "./Tag"

type ProjectCardProps = {
  src: string
  alt: string
  title: string
  tags: string[]
  githubLink: string
  liveLink: string
}

const ProjectCard = ({
  src,
  alt,
  title,
  tags,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div
      className="group relative flex flex-col border-background border
     rounded-md shadow-lg"
    >
      <div className="w-full border-b border-[#dddddd44] max-h-[200px] h-[200px] overflow-hidden duration-300">
        <CustomImage
          src={src}
          width={200}
          height={200}
          alt={alt}
          className="w-full rounded-t-md group-hover:scale-110 duration-700"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 bg-background">
        <h2 className="text-xl uppercase font-medium">{title}</h2>

        <div className="flex flex-row gap-1 flex-wrap h-[70px] overflow-auto">
          {tags.map((elem, index) => {
            return <Tag key={index} title={elem} />
          })}
        </div>

        <div className="relative w-full flex flex-row mt-4 gap-2">
          <LinkButton
            title="Source code"
            style="w-10/12 rounded-lg"
            icon={<FaGithub />}
            href={githubLink}
            target="_blank"
          />

          <LinkButton
            title=""
            style="w-2/12 rounded-[12px] bg-transparent border border-primary hover:bg-transparent"
            icon={<FaEye size={22} />}
            href={liveLink}
            target="_blank"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
