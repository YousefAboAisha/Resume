import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const useCurrentRoute = () => {
  const [Title, setTitle] = useState("")
  const route = useRouter()

  console.log(route)

  useEffect(() => {
    if (route.pathname == "/") {
      setTitle("Home")
    } else {
      let title = route.pathname.slice(1)
      setTitle(title)
    }
  }, [route])

  return Title
}

export default useCurrentRoute
