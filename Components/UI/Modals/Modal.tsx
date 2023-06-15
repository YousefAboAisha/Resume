import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

type ModalType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bg?: string;
  zIndex?: string;
  children?: React.ReactNode;
};

const Modal = ({
  setIsOpen,
  isOpen,
  bg = "bg-[#000000e7]",
  zIndex,
  children,
}: ModalType) =>
  ReactDOM.createPortal(
    // pointer-events-none to hide modal and disable interactions.
    <>
      <div
        className={`fixed w-full h-full left-0 top-0 duration-300 z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${bg}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`abs-center fixed bg-theme max-h-[90%] z-100 w-11/12 md:w-9/12 lg:w-6/12 z-[1000001] overflow-y-auto ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } duration-300 `}
      >
        {children}
      </div>
    </>,
    document.body
  );
export default Modal;
