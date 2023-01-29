import React from "react"
import Landing from "../Components/Landing"
import ContactFrom from "../Containers/Contact/ContactForm"

const contact = () => {
  return (
    <main className="mb-24">
      <Landing
        hasBlurColors={false}
        mainImg={"/contact.png"}
        width={450}
        height={450}
        normalHeading={"Having An Idea"}
        highlightHeading={"Contact Me."}
      />

      <ContactFrom />
    </main>
  )
}

export default contact
