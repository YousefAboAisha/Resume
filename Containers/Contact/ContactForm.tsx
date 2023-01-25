import { useState } from "react"
import { BiUser } from "react-icons/bi"
import { IoIosSend } from "react-icons/io"
import {
  MdOutlineAccountTree,
  MdOutlineEmail,
  MdOutlineMessage,
} from "react-icons/md"
import Button from "../../Components/UI/Button"
import CustomImage from "../../Components/UI/CustomImage"
import Input from "../../Components/UI/Input"
import Select from "../../Components/UI/Select"
import TextArea from "../../Components/UI/TextArea"
import { ProjectTypes } from "../../Data/projectTypes"

const ContactForm = () => {
  const [FormData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    projectType: "",
    messageTitle: "",
    Message: "",
  })

  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden">
      <form className="relative flex flex-col gap-4 mt-24 w-10/12 md:w-8/12 lg:w-6/12 z-10">
        <CustomImage
          src={"/vector.png"}
          width={100}
          height={100}
          alt="Pattern image"
          className="abs-center w-full h-full blur-2xl opacity-30 z-0 rotate-45"
        />

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
        />

        <Select
          title="Select project type"
          options={ProjectTypes}
          value={FormData.projectType}
          onChange={(e) =>
            setFormData({
              ...FormData,
              projectType: e.target.value,
            })
          }
          icon={<MdOutlineAccountTree size={23} />}
        />

        <Input
          placeholder="Message title"
          value={FormData.messageTitle}
          onChange={(e) =>
            setFormData({
              ...FormData,
              messageTitle: e.target.value,
            })
          }
          type="text"
          icon={<MdOutlineMessage size={23} />}
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
        />

        <Button
          title="Submit"
          style="mt-2 w-5/12 h-[48px] p-5 "
          icon={<IoIosSend size={23} />}
          hasLink={false}
          type="submit"
        />
      </form>
    </div>
  )
}

export default ContactForm
