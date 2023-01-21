import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { IoIosSend } from "react-icons/io"
import { MdOutlineEmail } from "react-icons/md"
import Button from "../../Components/UI/Button"
import CustomImage from "../../Components/UI/CustomImage"
import Heading from "../../Components/UI/Heading"
import Input from "../../Components/UI/Input"
import TextArea from "../../Components/UI/TextArea"

const Contact = () => {
  const [FormData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  })

  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-center">
        <Heading
          title="Stay on touch"
          highLightText="with me "
          additionalStyles="mx-0 mb-4"
        />

        <form className="relative flex flex-col gap-4 mt-2 w-full">
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

      <div className="flex justify-center">
        <CustomImage
          src={"/support.png"}
          width={500}
          height={500}
          alt="CV Image"
          className="drop-shadow-2xl animate-HorizentalMove"
        />
      </div>
    </div>
  )
}

export default Contact
