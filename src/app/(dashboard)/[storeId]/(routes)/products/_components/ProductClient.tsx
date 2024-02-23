"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { ProductColumns, ProductColumnsProps } from "./ProductColumns";
import { DataTable } from "@/components/DataTable";
import ApiList from "@/components/ApiList";

interface ProductClientProps {
  data: ProductColumnsProps[];
}

const ProductClient = ({ data }: ProductClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <PlusCircledIcon className="mr-2 w-4 h-4"></PlusCircledIcon>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={ProductColumns}
        data={data}
        searchKey="name"
      ></DataTable>
      <Heading title="API" description="API calls for Products"></Heading>
      <Separator></Separator>
      <ApiList entityName="products" entityIdName="productId"></ApiList>
    </>
  );
};

export default ProductClient;
