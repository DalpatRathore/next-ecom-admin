"use client";

import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrderColumns, OrderColumnsProps } from "./OrderColumns";
import { DataTable } from "@/components/DataTable";

interface OrderClientProps {
  data: OrderColumnsProps[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      ></Heading>

      <Separator />
      <DataTable
        columns={OrderColumns}
        data={data}
        searchKey="product"
      ></DataTable>
    </>
  );
};

export default OrderClient;
