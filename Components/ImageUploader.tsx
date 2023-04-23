import React, { Dispatch, SetStateAction, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { IoIosCloudDone } from "react-icons/io";
import { AddNewProjectProps } from "./AddNewProject";

type ImageUploaderProps = {
  initialURL?: string;
} & AddNewProjectProps;

const ImageUploader: React.FC<ImageUploaderProps> = ({
  addForm,
  setAddForm,
  initialURL,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (file: File) => {
    setIsUploading(true);

    if (!file) return;
    const storageRef = ref(storage, `sites/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot: { bytesTransferred: number; totalBytes: number }) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        getDownloadURL(storageRef).then((url) => {
          setAddForm({
            ...addForm,
            href: url,
          });
          console.log(url);
          setIsUploading(false);
        });
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      handleUpload(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center gap-4 mt-4">
        <label
          title="Upload your photo"
          className="relative w-9/12 h-32 rounded-lg cursor-pointer border-theme"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-0 h-0sUploading:cursor-not-allowed"
            required
          />

          <div className="abs-center flex flex-col items-center justify-center gap-2">
            {progress == 100 ? (
              <IoIosCloudDone className="text-green-500" size={50} />
            ) : (
              <FaUpload size={50} className="text-theme" />
            )}
            <span className="text-[13px] text-theme">
              {image ? (
                <span
                  className={`${
                    progress == 100 ? "text-green-500" : ""
                  } text-sm`}
                >
                  {isUploading ? "Uploading" : ""} {progress}%{" "}
                  {progress == 100 ? "uploaded!" : ""}
                </span>
              ) : (
                "Click Here to upload photo"
              )}
            </span>
          </div>
        </label>

        <div className="relative w-32 h-32 rounded-lg border-theme">
          {initialURL || addForm.href ? (
            <div className="relative w-32 h-32 rounded-lg z-20">
              {isUploading ? (
                <span className="abs-center text-sm">loading...</span>
              ) : (
                <img
                  src={initialURL || addForm.href}
                  alt="Selected file"
                  className="absolute w-full h-full rounded-lg z-20"
                />
              )}
            </div>
          ) : (
            <span className="text-[11px] text-theme text-center abs-center opacity-60 z-10">
              Your image will be displayed here
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
