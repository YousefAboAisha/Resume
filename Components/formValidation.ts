import { Dispatch, SetStateAction } from "react";

export const nameValidation = (
  error: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  let flag = false;
  if (error.trim() === "") {
    setError("Name must be filled!");
  } else if (error.length < 3) {
    setError("Name must be more than 3 characters!");
  } else {
    setError("");
    flag = true;
  }
  return flag;
};
