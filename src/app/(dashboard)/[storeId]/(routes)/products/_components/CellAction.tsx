"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BillboardColumnsProps } from "./ProductColumns";
import { Button } from "@/components/ui/button";
import {
  CopyIcon,
  DotsHorizontalIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AlertModal from "@/components/AlertModal";

interface CellActionProps {
  data: BillboardColumnsProps;
}

const CellAction = ({ data }: CellActionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const params = useParams();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Id copied to the clipboard");
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
      router.refresh();
      toast.success("Billboard deleted!");
    } catch (error) {
      toast.error(
        "Make sure you removed all categories using this billboard first."
      );
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        isLoading={isLoading}
      ></AlertModal>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="w-4 h-4"></DotsHorizontalIcon>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <CopyIcon className="w-4 h-4 mr-2"></CopyIcon>
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${params.storeId}/billboards/${data.id}`)
            }
          >
            <Pencil2Icon className="w-4 h-4 mr-2"></Pencil2Icon>
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <TrashIcon className="w-4 h-4 mr-2"></TrashIcon>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default CellAction;
