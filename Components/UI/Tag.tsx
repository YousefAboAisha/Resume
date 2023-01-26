import React from "react"

type TagProps = {
  title: string
}

function Tag({ title }: TagProps) {
  return (
    <div className="text-[12px] bg-background font-normal w-fit px-3 py-1 rounded-xl h-fit uppercase shadow-md border border-dark">
      {title}
    </div>
  )
}

export default Tag
