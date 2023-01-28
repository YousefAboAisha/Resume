import { IconType } from "react-icons/lib"

type FooterCardProps = {
  label: string
  value: string
  Icon: IconType
}

const FooterCard = ({ label, value, Icon }: FooterCardProps) => {
  return (
    <div className="relative">
      <div className="flex flex-row gap-4 items-center">
        <Icon size={24} className="text-text_light dark:text-text_dark" />
        <div className="flex flex-col">
          <h4>{label}</h4>
          <span className="font-light">{value}</span>
        </div>
      </div>
    </div>
  )
}

export default FooterCard
