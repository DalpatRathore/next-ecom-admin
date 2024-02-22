"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumns, BillboardColumnsProps } from "./BillboardColumns";
import { DataTable } from "@/components/DataTable";

interface BillboardClientProps {
  data: BillboardColumnsProps[];
}

const BillboardClient = ({ data }: BillboardClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        ></Heading>
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <PlusCircledIcon className="mr-2 w-4 h-4"></PlusCircledIcon>
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={BillboardColumns}
        data={data}
        searchKey="label"
      ></DataTable>
    </>
  );
};

export default BillboardClient;
