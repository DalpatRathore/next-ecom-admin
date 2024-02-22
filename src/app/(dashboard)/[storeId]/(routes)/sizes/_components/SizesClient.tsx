"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { SizeColumns, SizeColumnsProps } from "./SizeColumns";
import { DataTable } from "@/components/DataTable";
import ApiList from "@/components/ApiList";

interface SizesClientProps {
  data: SizeColumnsProps[];
}

const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <PlusCircledIcon className="mr-2 w-4 h-4"></PlusCircledIcon>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={SizeColumns} data={data} searchKey="name"></DataTable>
      <Heading title="API" description="API calls for Sizes"></Heading>
      <Separator></Separator>
      <ApiList entityName="sizes" entityIdName="sizeId"></ApiList>
    </>
  );
};

export default SizesClient;
