import Link from "next/link"
import { Social } from "../Data/Social"

const Socialbar = () => {
  return (
    <div className="fixed top-[50%] translate-y-[-50%] left-4 flex flex-col gap-3 z-20 ">
      {Social.map((elem, index) => {
        return (
          <Link
            key={index}
            href={elem.href}
            target={"_blank"}
            rel={"noreferrer"}
            className="duration-500 hover:bg-primary bg-background p-3 rounded-full shadow-md"
          >
            {<elem.icon size={18} />}
          </Link>
        )
      })}
    </div>
  )
}

export default Socialbar
