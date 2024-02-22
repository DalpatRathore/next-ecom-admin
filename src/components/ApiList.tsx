"use client";

import useOrigin from "@/hooks/useOrigin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./ApiAlert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}
const ApiList = ({ entityIdName, entityName }: ApiListProps) => {
  const params = useParams();
  const origin = useOrigin();
  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <>
      <ApiAlert
        title="GET"
        description={`${baseUrl}/${entityName}`}
        variant="public"
      ></ApiAlert>

      <ApiAlert
        title="GET"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="public"
      ></ApiAlert>

      <ApiAlert
        title="POST"
        description={`${baseUrl}/${entityName}`}
        variant="admin"
      ></ApiAlert>

      <ApiAlert
        title="PATCH"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      ></ApiAlert>

      <ApiAlert
        title="DELETE"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      ></ApiAlert>
    </>
  );
};
export default ApiList;
