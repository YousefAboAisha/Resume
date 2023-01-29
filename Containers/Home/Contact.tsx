import React, { useRef, useState } from "react"
import { BiUser } from "react-icons/bi"
import { IoIosSend } from "react-icons/io"
import { MdOutlineEmail } from "react-icons/md"
import Button from "../../Components/UI/Button"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"
import Input from "../../Components/UI/Input"
import TextArea from "../../Components/UI/TextArea"
import emailjs from "@emailjs/browser"
import Snackbar from "../../Components/UI/Snackbar"

const Contact = () => {
  const [Loading, setLoading] = useState(false)
  const [IsActive, setIsActive] = useState(false)

  const form = useRef<HTMLFormElement>(null)

  const [FormData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  })

  const emptyForm = () => {
    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Message: "",
    })
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const currentForm = form.current
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_ltj2944",
        "Real_Estate_App",
        currentForm,
        "user_D9y1Gws0dAtyKLW4zOemd"
      )
      .then(
        (result) => {
          console.log(result.text)
          setLoading(false)
          setIsActive(true)
          setTimeout(() => {
            setIsActive(false)
          }, 5000)
          emptyForm()
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
        }
      )
  }

  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Snackbar IsActive={IsActive} message={"Thanks for sending notes!"} />

      <div className="flex flex-col items-start justify-center">
        <Heading
          title="Stay on touch"
          highLightText="with me "
          additionalStyles="mx-0 mb-4"
        />

        <form
          onSubmit={(e) => sendEmail(e)}
          ref={form}
          className="relative flex flex-col gap-4 mt-2 w-full"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="First name"
              value={FormData.FirstName}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  FirstName: e.target.value,
                })
              }
              type="text"
              icon={<BiUser size={23} />}
              name="fname"
            />
            <Input
              placeholder="Last name"
              value={FormData.LastName}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  LastName: e.target.value,
                })
              }
              type="text"
              icon={<BiUser size={23} />}
              name="lname"
            />
          </div>
          <Input
            placeholder="Email"
            value={FormData.Email}
            onChange={(e) =>
              setFormData({
                ...FormData,
                Email: e.target.value,
              })
            }
            type="email"
            icon={<MdOutlineEmail size={23} />}
            name="email"
          />

          <TextArea
            placeholder="Enter Your Message..."
            value={FormData.Message}
            onChange={(e) =>
              setFormData({
                ...FormData,
                Message: e.target.value,
              })
            }
            maxLength={100}
            name="message"
          />

          <Button
            title="Submit"
            style="mt-2 w-5/12 h-[48px] p-5 "
            icon={<IoIosSend size={23} />}
            type="submit"
            loading={Loading}
          />
        </form>
      </div>

      <div className="flex justify-center">
        <CustomImage
          src={"/support.png"}
          width={450}
          height={450}
          alt="CV Image"
          className="drop-shadow-2xl animate-HorizentalMove"
        />
      </div>
    </div>
  )
}

export default Contact
