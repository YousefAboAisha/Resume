import {
  // Dispatch,
  KeyboardEvent,
  // SetStateAction,
  useRef,
  // useState,
} from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { AddNewProjectProps } from "../../AddNewProject";
import Tag from "../Typography/Tag";
import Input from "./Input";

const TagsInput = ({ addForm, setAddForm }: AddNewProjectProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocus = () => {
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (!value.trim()) return;
    setAddForm({
      ...addForm,
      tags: [...addForm.tags, value],
    });
    e.currentTarget.value = "";
    inputFocus();
  }

  function removeTag(index: number) {
    setAddForm({
      ...addForm,
      tags: [...addForm.tags.filter((el, i) => i !== index)],
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        type="text"
        className=""
        placeholder="Add project's keywords"
        icon={<BiCategoryAlt size={22} />}
        required={false}
      />
      <div className="flex flex-row items-center flex-wrap gap-2 text-sm">
        <div className="text-theme flex items-center gap-1">
          Example <Tag title="HTML" />|
        </div>

        {addForm.tags.map((tag, index) => (
          <Tag
            key={index}
            title={tag}
            hasTimes={true}
            onTimesClicked={() => removeTag(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
