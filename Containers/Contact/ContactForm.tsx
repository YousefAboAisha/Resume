import { ChangeEvent, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import {
  MdOutlineAccountTree,
  MdOutlineEmail,
  MdOutlineMessage,
} from "react-icons/md";
import Button from "../../Components/UI/Inputs/Button";
import Input from "../../Components/UI/Inputs/Input";
import Select from "../../Components/UI/Inputs/Select";
import TextArea from "../../Components/UI/Inputs/TextArea";
import { ProjectTypes } from "../../Data/projectTypes";
import emailjs from "@emailjs/browser";
import Snackbar from "../../Components/UI/Utils/Snackbar";

const ContactForm = () => {
  const [Loading, setLoading] = useState(false);
  const [IsActive, setIsActive] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    projectType: "",
    messageTitle: "",
    message: "",
  });

  const emptyForm = () => {
    setFormData({
      fname: "",
      lname: "",
      email: "",
      projectType: "",
      messageTitle: "",
      message: "",
    });
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;

    if (currentForm == null) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_3n86cqi",
        "project_form",
        currentForm,
        "user_D9y1Gws0dAtyKLW4zOemd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsActive(true);
          setTimeout(() => {
            setIsActive(false);
          }, 5000);
          emptyForm();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="First name"
            value={formData.fname}
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            icon={<BiUser size={23} />}
            name="fname"
          />

          <Input
            placeholder="Last name"
            value={formData.lname}
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            icon={<BiUser size={23} />}
            name="lname"
          />
        </div>

        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            handleChange(e);
          }}
          type="email"
          icon={<MdOutlineEmail size={23} />}
          name="email"
        />

        <Select
          title="Select project type"
          options={ProjectTypes}
          value={formData.projectType}
          onChange={(e) => {
            handleChange(e);
          }}
          icon={<MdOutlineAccountTree size={23} />}
          name="projectType"
        />

        <Input
          placeholder="Message title"
          value={formData.messageTitle}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          icon={<MdOutlineMessage size={23} />}
          name="messageTitle"
        />

        <TextArea
          placeholder="Enter Your Message..."
          value={formData.message}
          onChange={(e) => {
            handleChange(e);
          }}
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
  );
};

export default ContactForm;
