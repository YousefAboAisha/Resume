import Image, { StaticImageData } from "next/image"

type SkillCardProps = {
  title: string
  icon: StaticImageData
}

const SkillCard = ({ title, icon }: SkillCardProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-1 drop-shadow-lg rounded-xl p-4 bg-[#00000013] backdrop-blur-sm border-[#dddddd1a] border-[1px] shadow-md hover:shadow-md hover:bg-primary_dark hover:translate-y-2 duration-500 cursor-pointer animate-shadowPulse ">
      <Image src={icon} width={70} height={70} alt="image" />
      <span className="uppercase font-semibold font-secondary">{title}</span>
    </div>
  )
}

export default SkillCard
