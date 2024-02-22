"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { ColorColumns, ColorColumnsProps } from "./ColorColumns";
import { DataTable } from "@/components/DataTable";
import ApiList from "@/components/ApiList";

interface ColorsClientProps {
  data: ColorColumnsProps[];
}

const ColorsClient = ({ data }: ColorsClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <PlusCircledIcon className="mr-2 w-4 h-4"></PlusCircledIcon>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={ColorColumns}
        data={data}
        searchKey="name"
      ></DataTable>
      <Heading title="API" description="API calls for Colors"></Heading>
      <Separator></Separator>
      <ApiList entityName="colors" entityIdName="colorId"></ApiList>
    </>
  );
};

export default ColorsClient;
