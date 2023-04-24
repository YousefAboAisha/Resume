import React, { Dispatch, SetStateAction, useState } from "react";
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
  setAddForm: React.Dispatch<
    React.SetStateAction<{
      alt: string;
      github_link: string;
      href: string;
      live_link: string;
      tags: string[];
      title: string;
    }>
  >;
}

type setOpenType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddNewProject = ({ setIsOpen }: setOpenType) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addForm, setAddForm] = useState({
    alt: "",
    github_link: "",
    href: "",
    live_link: "",
    tags: [] as string[],
    title: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (password !== "mzs1337") {
      setPasswordError("Wrong password!");
      setLoading(false);
      return;
    }
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
          setPasswordError("");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setPasswordError("");
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
        setPasswordError("");
      });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="abs-center bg-theme fixed flex flex-col gap-2 bg-background_light p-6 rounded-lg w-11/12 md:w-9/12 lg:w-6/12 z-[1000001]"
    >
      <Heading title="Add new project" additionalStyles="!text-xl" />
      <ImageUploader addForm={addForm} setAddForm={setAddForm} />

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
          pattern="[a-zA-Z]{3,}"
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
              type={"url"}
              icon={<FaGithub size={22} />}
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
              type={"url"}
              icon={<FaEye size={22} />}
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
        />
        <TagsInput addForm={addForm} setAddForm={setAddForm} />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button title="Save changes" className="w-4/12" loading={loading} />
      </div>
    </form>
  );
};

export default AddNewProject;
