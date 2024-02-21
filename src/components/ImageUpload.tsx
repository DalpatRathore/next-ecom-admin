"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ImageIcon, TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map(url => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <TrashIcon className="w-4 h-4"></TrashIcon>
              </Button>
            </div>
            <Image src={url} fill alt="" className="object-cover"></Image>
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="dicg1cma">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImageIcon className="w-4 h-4 mr-2"></ImageIcon>
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
export default ImageUpload;
