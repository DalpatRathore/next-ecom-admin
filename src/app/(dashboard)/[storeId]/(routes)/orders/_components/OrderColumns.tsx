"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumnsProps = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const OrderColumns: ColumnDef<OrderColumnsProps>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "TotalPrice",
  },

  {
    accessorKey: "isPaid",
    header: "Paid",
  },
];
