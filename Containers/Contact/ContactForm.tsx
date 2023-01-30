import { useRef, useState } from "react"
import { BiUser } from "react-icons/bi"
import { IoIosSend } from "react-icons/io"
import {
  MdOutlineAccountTree,
  MdOutlineEmail,
  MdOutlineMessage,
} from "react-icons/md"
import Button from "../../Components/UI/Button"
import Input from "../../Components/UI/Input"
import Select from "../../Components/UI/Select"
import TextArea from "../../Components/UI/TextArea"
import { ProjectTypes } from "../../Data/projectTypes"
import emailjs from "@emailjs/browser"
import Snackbar from "../../Components/UI/Snackbar"

const ContactForm = () => {
  const [Loading, setLoading] = useState(false)
  const [IsActive, setIsActive] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const [FormData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    ProjectType: "",
    MessageTitle: "",
    Message: "",
  })

  const emptyForm = () => {
    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      ProjectType: "",
      MessageTitle: "",
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
        "service_3n86cqi",
        "project_form",
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
    <div className="relative flex flex-col items-center w-full overflow-hidden">
      <Snackbar
        IsActive={IsActive}
        message={"We will review your project request very soon!"}
      />

      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="relative flex flex-col gap-4 mt-24 w-10/12 md:w-8/12 lg:w-6/12 z-10"
      >
        {/* <CustomImage
          src={"/vector.png"}
          width={100}
          height={100}
          alt="Pattern image"
          className="abs-center w-full h-full blur-2xl opacity-20 -z-10 rotate-45"
        /> */}

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

        <Select
          title="Select project type"
          options={ProjectTypes}
          value={FormData.ProjectType}
          onChange={(e) =>
            setFormData({
              ...FormData,
              ProjectType: e.target.value,
            })
          }
          icon={<MdOutlineAccountTree size={23} />}
          name="projectType"
        />

        <Input
          placeholder="Message title"
          value={FormData.MessageTitle}
          onChange={(e) =>
            setFormData({
              ...FormData,
              MessageTitle: e.target.value,
            })
          }
          type="text"
          icon={<MdOutlineMessage size={23} />}
          name="messageTitle"
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
  )
}

export default ContactForm
