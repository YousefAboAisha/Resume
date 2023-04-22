import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddNewProject from "./AddNewProject";
import Modal from "./UI/Modals/Modal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed flex justify-center items-center p-2 left-4 bottom-4 rounded-xl border-dark border font-bold cursor-pointer duration-500 bg-[#00000038] backdrop-blur-md z-50 text-text_light dark:text-white"
      >
        <IoMdAdd size={25} />
      </div>

      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <AddNewProject />
      </Modal>
    </>
  );
};

export default AddButton;
