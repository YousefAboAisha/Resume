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
  formErrors?: {
    passwordError: string;
    imageError: string;
  };
  setFormErrors?: Dispatch<
    SetStateAction<{
      passwordError: string;
      imageError: string;
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
  const [imageError, setImageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ghError, setGhError] = useState("");
  const [liveError, setLiveError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [addForm, setAddForm] = useState({
    alt: "Project photo",
    github_link: "",
    href: "",
    live_link: "",
    tags: [] as string[],
    title: "",
  });

  const imageHandler = () => {
    let flag = false;

    if (addForm.href == "" || !addForm.href) {
      setImageError("Please upload project image!");
      setLoading(false);
      return flag;
    }
    flag = true;
    setImageError("");
    return flag;
  };

  const URLHandler_GH = () => {
    let flag = false;

    if (!httpRegex.test(addForm.github_link)) {
      setGhError("Please enter a valid URL");
      setLoading(false);
      return flag;
    }
    flag = true;
    setGhError("");
    return flag;
  };

  const URLHandler_live = () => {
    let flag = false;

    if (!httpRegex.test(addForm.live_link)) {
      setLiveError("Please enter a valid URL");
      setLoading(false);
      return flag;
    }
    flag = true;
    setLiveError("");
    return flag;
  };

  const nameHandler = () => {
    let flag = false;
    if (addForm.title.trim() === "") {
      setNameError("Name must be filled!");
      setLoading(false);
    } else if (addForm.title.length < 3) {
      setNameError("Name must be more than 3 characters!");
      setLoading(false);
    } else {
      flag = true;
      setNameError("");
    }
    return flag;
  };

  const passwordHandler = () => {
    let flag = false;

    if (password != "mzs1337") {
      setPasswordError("Please enter a valid password");
      setLoading(false);
      return flag;
    }
    flag = true;
    setPasswordError("");
    return flag;
  };

  const TagsHandler = () => {
    let flag = false;

    if (addForm.tags.length < 3) {
      setTagsError("You must add at least 3 tags");
      setLoading(false);
      return flag;
    }
    flag = true;
    setTagsError("");
    return flag;
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (
      imageHandler() &&
      nameHandler() &&
      passwordHandler() &&
      URLHandler_live() &&
      URLHandler_GH() &&
      TagsHandler()
    )
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
  };

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
        error={imageError}
        setError={setImageError}
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
          error={nameError}
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
              error={liveError}
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
              error={ghError}
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
          error={passwordError}
          // onInvalid={handleInvalid}
          required={false}
        />
        <TagsInput
          addForm={addForm}
          setAddForm={setAddForm}
          error={tagsError}
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button title="Save changes" className="w-4/12" loading={loading} />
      </div>
    </form>
  );
};

export default AddNewProject;
