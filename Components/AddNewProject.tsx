import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { FaEye, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { PUBLIC_URL } from "../config";
import ImageUploader from "./ImageUploader";
import Button from "./UI/Inputs/Button";
import Input from "./UI/Inputs/Input";
import TagsInput from "./UI/Inputs/TagsInput";
import Heading from "./UI/Typography/Heading";

export interface AddNewProjectProps {
  addForm: {
    alt: string;
    github_link: string;
    href: string;
    live_link: string;
    tags: string[];
    title: string;
  };
  setAddForm: Dispatch<
    SetStateAction<{
      alt: string;
      github_link: string;
      href: string;
      live_link: string;
      tags: string[];
      title: string;
    }>
  >;
}

export interface FormErrorsProps {
  formErrors?: {
    imageError: string;
    nameError: string;
    passwordError: string;
    ghError: string;
    liveError: string;
    tagsError: string;
  };
  setFormErrors: Dispatch<
    SetStateAction<{
      imageError: string;
      nameError: string;
      passwordError: string;
      ghError: string;
      liveError: string;
      tagsError: string;
    }>
  >;
}

type setOpenType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddNewProject = ({ setIsOpen }: setOpenType) => {
  var httpRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  // Errors states
  const [formErrors, setFormErrors] = useState({
    imageError: "",
    nameError: "",
    passwordError: "",
    ghError: "",
    liveError: "",
    tagsError: "",
  });

  //Form states
  const [addForm, setAddForm] = useState({
    alt: "Project photo",
    github_link: "",
    href: "",
    live_link: "",
    tags: [] as string[],
    title: "",
  });

  // Set all Inputs Errors if found
  const checkInputValidity = () => {
    const newErrors = {
      imageError: "",
      nameError: "",
      passwordError: "",
      ghError: "",
      liveError: "",
      tagsError: "",
    };

    let flag_1 = true;
    let flag_2 = true;
    let flag_3 = true;
    let flag_4 = true;
    let flag_5 = true;
    let flag_6 = true;

    // Image validation
    if (addForm.href == "" || !addForm.href) {
      newErrors.imageError = "Please upload project image!";
      flag_1 = false;
    }

    // Github link validation
    if (!httpRegex.test(addForm.github_link)) {
      newErrors.ghError = "Please enter a valid URL";
      flag_2 = false;
    }

    // Live link validation
    if (!httpRegex.test(addForm.live_link)) {
      newErrors.liveError = "Please enter a valid URL";
      flag_3 = false;
    }

    // Project title validation
    if (addForm.title.trim() === "") {
      newErrors.nameError = "Name must be filled!";
      flag_4 = false;
    } else if (addForm.title.length < 3) {
      newErrors.nameError = "Name must be more than 3 characters!";
      flag_4 = false;
    }

    // Password validation
    if (password !== "mzs1337") {
      newErrors.passwordError = "Please enter a valid password";
      flag_5 = false;
    }

    // Tags validation
    if (addForm.tags.length < 3) {
      newErrors.tagsError = "You must add at least 3 tags";
      flag_6 = false;
    }

    setFormErrors(newErrors);
    setLoading(false);
    return flag_1 && flag_2 && flag_3 && flag_4 && flag_5 && flag_6;
  };

  // submit handler for adding new project
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkInputValidity();

    if (checkInputValidity()) {
      setLoading(true);
      fetch(PUBLIC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addForm),
      })
        .then((response) => {
          if (!response.ok) {
            setLoading(false);

            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setLoading(false);
          setIsOpen(false);
        })
        .catch((error) => {
          console.error("There was an error!", error);
          setLoading(false);
        });
    }
  };

  // To add customValidity message
  const handleInvalid_password = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Please enter a correct password ");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="abs-center bg-theme fixed flex flex-col gap-2 bg-background_light p-6 rounded-lg w-11/12 md:w-9/12 lg:w-6/12 z-[1000001]"
    >
      <Heading title="Add new project" additionalStyles="!text-xl" />
      <ImageUploader
        addForm={addForm}
        setAddForm={setAddForm}
        error={formErrors.imageError}
        setFormErrors={setFormErrors}
      />

      <div className="relative flex flex-col gap-3 mt-4">
        <Input
          placeholder="Enter project name"
          value={addForm.title}
          onChange={(e) =>
            setAddForm((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          className="pl-4"
          icon={<FaProjectDiagram />}
          error={formErrors.nameError}
          required={false}
        />

        <div className="flex items-center gap-2 justify-between w-full">
          <div className="w-full">
            <Input
              placeholder="Enter project's Live URL "
              value={addForm.live_link}
              onChange={(e) =>
                setAddForm((prev) => ({
                  ...prev,
                  live_link: e.target.value,
                }))
              }
              className="pl-4"
              type={"text"}
              icon={<FaEye size={22} />}
              required={false}
              error={formErrors.liveError}
            />
          </div>

          <div className="w-full">
            <Input
              placeholder="Enter project's Github URL "
              value={addForm.github_link}
              onChange={(e) =>
                setAddForm((prev) => ({
                  ...prev,
                  github_link: e.target.value,
                }))
              }
              className="pl-4"
              type={"text"}
              icon={<FaGithub size={22} />}
              required={false}
              error={formErrors.ghError}
            />
          </div>
        </div>

        <Input
          placeholder="Enter admin's password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-4 pr-8"
          type={"password"}
          icon={<AiFillLock size={22} />}
          error={formErrors.passwordError}
          // onInvalid={handleInvalid}
          required={false}
        />
        <TagsInput
          addForm={addForm}
          setAddForm={setAddForm}
          error={formErrors.tagsError}
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button title="Save changes" className="w-4/12" loading={loading} />
      </div>
    </form>
  );
};

export default AddNewProject;
