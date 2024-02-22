"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumns, CategoryColumnsProps } from "./CategoryColumns";
import { DataTable } from "@/components/DataTable";
import ApiList from "@/components/ApiList";

interface CategoryClientProps {
  data: CategoryColumnsProps[];
}

const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        ></Heading>
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <PlusCircledIcon className="mr-2 w-4 h-4"></PlusCircledIcon>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={CategoryColumns}
        data={data}
        searchKey="name"
      ></DataTable>
      <Heading title="API" description="API calls for Categories"></Heading>
      <Separator></Separator>
      <ApiList entityName="categories" entityIdName="categoryId"></ApiList>
    </>
  );
};

export default CategoryClient;
